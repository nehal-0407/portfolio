export default function WhatsAppButton() {
  const phone = '8801738062029'
  const message = encodeURIComponent("Hi Neyamul, I came across your portfolio and I'd like to connect.")

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:gap-2 hover:pr-4"
    >
      <span className="h-14 w-14 grid place-items-center shrink-0">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.45 5.17L2 22l5.07-1.55a9.86 9.86 0 0 0 4.97 1.34h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.06h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.94.93-3-.2-.31a8.13 8.13 0 0 1-1.25-4.36c0-4.5 3.66-8.16 8.17-8.16 4.5 0 8.16 3.66 8.16 8.16 0 4.51-3.66 8.04-8.3 8.04zm4.47-6.1c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.03-.45-.08-.12-.6-1.45-.82-1.98-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.18 0-.48.07-.74.34-.26.27-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 1.95 2.98 4.73 4.06 2.78 1.08 2.78.72 3.28.67.5-.05 1.6-.65 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.11-.24-.18-.48-.3z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 group-hover:max-w-[8rem] group-hover:opacity-100 transition-all duration-300">
        WhatsApp me
      </span>
    </a>
  )
}
