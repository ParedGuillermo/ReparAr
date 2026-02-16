export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491170607386"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        bg-green-500
        hover:bg-green-600
        text-white
        w-14 h-14
        rounded-full
        flex items-center justify-center
        shadow-lg
        animate-pulsewhatsapp
        transition
        duration-300
        z-50
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.11.55 4.17 1.6 6L0 24l6.18-1.6A11.95 11.95 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.5-8.52z"/>
      </svg>
    </a>
  );
}
