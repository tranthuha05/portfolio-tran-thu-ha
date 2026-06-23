import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-line/80 bg-white/95 shadow-sm backdrop-blur-xl'
          : 'border-transparent bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="focus-ring rounded text-sm font-semibold tracking-wide text-navy"
          onClick={closeMenu}
        >
          Tran Thu Ha
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-mist hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          title={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-teal hover:text-teal lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="section-shell grid gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-mist hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
