import { Music } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/40 border-b border-zinc-200/60">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-amber-400 text-white shadow-sm shadow-pink-200">
            <Music className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Cat & Baby Dance Party</h1>
            <p className="text-sm text-zinc-500">A tiny groove to brighten your day</p>
          </div>
        </div>
        <a
          className="text-sm text-pink-600 hover:text-pink-700 transition"
          href="#controls"
        >
          Controls
        </a>
      </div>
    </header>
  );
}
