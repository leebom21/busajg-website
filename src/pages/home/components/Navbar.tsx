import { useEffect, useState } from "react";

const menu = [
  { label: "회사소개", href: "#about" },
  { label: "작업종류", href: "#services" },
  { label: "작업사례", href: "#gallery" },
  { label: "진행절차", href: "#process" },
  { label: "자주묻는질문", href: "#faq" },
  { label: "견적문의", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foreground-950/95 backdrop-blur border-b border-foreground-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-500 text-foreground-950 group-hover:bg-primary-400 transition-colors">
            <i className="ri-truck-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
          </div>
          <div className="leading-tight">
            <div
              className="text-background-50 text-xl tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              삼부자중기
            </div>
            <div className="text-[11px] text-primary-400 tracking-[0.2em] uppercase">
              SKID LOADER PRO
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {menu.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className="text-sm text-background-50/85 hover:text-primary-400 transition-colors cursor-pointer whitespace-nowrap"
            >
              {m.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:010-3778-9007"
            className="flex items-center gap-2 px-5 h-11 rounded-md bg-primary-500 text-foreground-950 font-bold hover:bg-primary-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
            010-3778-9007
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-background-50 cursor-pointer"
          aria-label="menu"
        >
          <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-2xl w-6 h-6 flex items-center justify-center`}></i>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-foreground-950 border-t border-foreground-800 px-6 py-4 flex flex-col gap-3">
          {menu.map((m) => (
            <a
              key={m.href}
              href={m.href}
              onClick={() => setOpen(false)}
              className="text-background-50 py-2 border-b border-foreground-800 cursor-pointer"
            >
              {m.label}
            </a>
          ))}
          <a
            href="tel:010-3778-9007"
            className="mt-2 flex items-center justify-center gap-2 h-12 rounded-md bg-primary-500 text-foreground-950 font-bold whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill w-4 h-4 flex items-center justify-center"></i>
            010-3778-9007
          </a>
        </div>
      )}
    </header>
  );
}