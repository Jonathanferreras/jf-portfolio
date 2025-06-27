import Script from "next/script";

export default function GoogleAnalyticsHead() {
  return (
    <>
      {/* Load gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-T1S6B5PG1R"
        strategy="afterInteractive"
      />
      {/* Initialize GA */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T1S6B5PG1R', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
