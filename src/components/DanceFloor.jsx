import { motion } from "framer-motion";
import DancerAvatar from "./DancerAvatar";

export default function DanceFloor({ bpm, isDancing }) {
  return (
    <section className="mt-8">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,182,193,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,215,170,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(180,255,220,0.25),transparent_35%)]" />

        <div className="relative px-6 sm:px-10 pt-10 pb-16 sm:pb-20">
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Feel the beat
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 mt-2">
                The cat and the baby are groovin' together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 items-end w-full max-w-3xl">
              <DancerAvatar
                type="cat"
                accent="#f472b6"
                bpm={bpm}
                isDancing={isDancing}
              />
              <DancerAvatar
                type="baby"
                accent="#fb923c"
                bpm={bpm}
                isDancing={isDancing}
                mirror
              />
            </div>

            <div className="relative mt-10 w-full">
              <div className="h-2 rounded-full bg-gradient-to-r from-pink-200 via-violet-200 to-amber-200" />
              <div className="absolute inset-x-6 bottom-0 h-24 bg-[repeating-linear-gradient(90deg,#ffffff,#ffffff_14px,#111827_14px,#111827_16px)] opacity-[0.03] pointer-events-none" />
            </div>
          </div>
        </div>

        <Spotlights isDancing={isDancing} bpm={bpm} />
      </div>
    </section>
  );
}

function Spotlights({ isDancing, bpm }) {
  const dur = 60 / bpm;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-16 top-0 h-[140%] w-56 bg-gradient-to-b from-pink-300/35 to-transparent blur-2xl"
        animate={isDancing ? { rotate: [20, -10, 20] } : { rotate: 5 }}
        style={{ transformOrigin: "top center" }}
        transition={{ duration: dur * 8, repeat: isDancing ? Infinity : 0, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 top-0 h-[140%] w-56 bg-gradient-to-b from-amber-300/35 to-transparent blur-2xl"
        animate={isDancing ? { rotate: [-15, 15, -15] } : { rotate: -5 }}
        style={{ transformOrigin: "top center" }}
        transition={{ duration: dur * 8, repeat: isDancing ? Infinity : 0, ease: "easeInOut" }}
      />
    </div>
  );
}
