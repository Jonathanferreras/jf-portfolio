const allowedOrigins = [
  process.env.DEVELOPMENT_URL,
  process.env.PRODUCTION_URL,
];

export function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return allowedOrigins.includes(origin);
}

export function withAllowedOrigins(
  handler: (req: Request) => Promise<Response>
) {
  return async function (req: Request): Promise<Response> {
    const origin = req.headers.get("origin");

    if (!isOriginAllowed(origin)) {
      return new Response("Forbidden", {
        status: 403,
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "null",
        },
      });
    }

    const response = await handler(req);
    response.headers.set("Access-Control-Allow-Origin", origin ?? "");

    return response;
  };
}
