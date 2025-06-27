export default function Footer() {
  return (
    <footer className="bg-[color:var(--background)] border-t border-white/10 py-10 text-center">
      <section className="flex items-center justify-center gap-2 overflow-visible">
        <a
          href="https://github.com/Jonathanferreras/jf-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-[color:var(--accent)] text-sm sm:text-base transition-colors duration-300 underline underline-offset-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M256 0C114.6 0 0 114.9 0 256.5c0 113.4 73.3 209.4 175 243.2 12.8 2.3 17.4-5.6 17.4-12.4 0-6.1-.2-26.2-.3-47.6-71.2 15.6-86.2-30.7-86.2-30.7-11.7-29.7-28.5-37.6-28.5-37.6-23.3-16.1 1.8-15.8 1.8-15.8 25.8 1.8 39.3 26.9 39.3 26.9 22.9 39.3 60.2 27.9 74.9 21.3 2.3-16.7 9-27.9 16.3-34.3-56.9-6.5-116.8-28.6-116.8-127.4 0-28.1 10-51.1 26.4-69.1-2.6-6.5-11.4-32.7 2.5-68.1 0 0 21.5-6.9 70.5 26.4a242.3 242.3 0 0164.2-8.7c21.8.1 43.8 3 64.2 8.7 48.9-33.3 70.4-26.4 70.4-26.4 13.9 35.4 5.1 61.6 2.5 68.1 16.4 18 26.3 41 26.3 69.1 0 99-60 120.9-117.1 127.3 9.3 8 17.6 23.9 17.6 48.2 0 34.8-.3 62.9-.3 71.5 0 6.9 4.6 14.8 17.5 12.3C438.8 465.9 512 369.9 512 256.5 512 114.9 397.4 0 256 0z" />
          </svg>
          View source code
        </a>
      </section>
    </footer>
  );
}
