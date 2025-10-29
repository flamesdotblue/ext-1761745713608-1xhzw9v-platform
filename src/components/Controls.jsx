import { Play, Pause, Music } from "lucide-react";

export default function Controls({ bpm, onBpmChange, isDancing, onToggle }) {
  return (
    <section id="controls" className="mt-10">
      <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-100 text-pink-700">
              <Music className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm text-zinc-500">Tempo</div>
              <div className="font-semibold leading-tight">{bpm} BPM</div>
            </div>
          </div>

          <div className="flex-1 w-full sm:w-auto sm:flex-none sm:min-w-[260px]">
            <input
              type="range"
              min={60}
              max={180}
              value={bpm}
              onChange={(e) => onBpmChange(Number(e.target.value))}
              className="w-full accent-pink-500"
              aria-label="Tempo"
            />
          </div>

          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 active:translate-y-px transition px-4 py-2 text-sm font-medium"
          >
            {isDancing ? (
              <>
                <Pause className="h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Dance
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
