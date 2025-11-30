"use client";

export default function Navbar() {
  const toggleDark = () => {
    document.body.classList.toggle("dark");
  };

  const toggleLang = () => {
    const isFA = document.body.classList.contains("fa");
    if (!isFA) {
      document.body.classList.add("fa");
      // فقط منو را فارسی می‌کنیم، بقیه متن را در صفحه اصلی هندل می‌کنیم
    } else {
      document.body.classList.remove("fa");
      window.location.reload();
    }
  };

  const toggleNeon = () => {
    document.body.classList.toggle("engineer-neon");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 flex justify-between items-center engineer-glass">
      <div id="nav-links" className="flex gap-6 text-sm font-semibold">
        <a href="#about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/research">Research</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleLang} className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-xs font-semibold">
          FA / EN
        </button>
        <button onClick={toggleDark} className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-xs font-semibold">
          Dark
        </button>
        <button onClick={toggleNeon} className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-xs font-semibold">
          Neon
        </button>
      </div>
    </nav>
  );
}
