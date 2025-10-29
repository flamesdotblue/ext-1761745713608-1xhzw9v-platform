import { motion } from "framer-motion";

export default function DancerAvatar({ type = "cat", accent = "#f472b6", bpm = 110, isDancing = true, mirror = false }) {
  const beat = 60 / bpm; // seconds per beat
  const danceTransition = {
    duration: beat * 2,
    repeat: isDancing ? Infinity : 0,
    ease: "easeInOut",
  };

  const bounce = isDancing
    ? { y: [0, -14, 0], rotate: [0, 4, 0] }
    : { y: 0, rotate: 0 };

  return (
    <div className="flex flex-col items-center w-full">
      <motion.div
        className="relative"
        animate={bounce}
        transition={danceTransition}
        style={{ scale: 1, transformOrigin: "50% 100%" }}
      >
        <CharacterSVG type={type} accent={accent} mirror={mirror} />
      </motion.div>
      <motion.div
        className="mt-4 h-2 w-28 rounded-full bg-zinc-300/50"
        animate={isDancing ? { scaleX: [1, 0.85, 1], opacity: [0.6, 0.4, 0.6] } : { scaleX: 1, opacity: 0.5 }}
        transition={{ duration: beat * 2, repeat: isDancing ? Infinity : 0, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
      <div className="mt-3 text-sm text-zinc-600 font-medium">
        {type === "cat" ? "Cool Cat" : "Happy Baby"}
      </div>
    </div>
  );
}

function CharacterSVG({ type, accent, mirror }) {
  const flip = mirror ? -1 : 1;
  if (type === "cat") return <CatSVG accent={accent} flip={flip} />;
  return <BabySVG accent={accent} flip={flip} />;
}

function CatSVG({ accent = "#f472b6", flip = 1 }) {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `scaleX(${flip})` }}>
      <defs>
        <linearGradient id="catBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3" />
          <stop offset="100%" stopColor="#fecdd3" />
        </linearGradient>
      </defs>
      <g>
        <ellipse cx="100" cy="190" rx="40" ry="10" fill="black" opacity="0.05" />
        <g>
          <path d="M55 140 Q100 170 145 140 Q140 180 100 190 Q60 180 55 140 Z" fill="url(#catBody)" stroke="#f9a8d4" />
          <circle cx="100" cy="95" r="48" fill="url(#catBody)" stroke="#f9a8d4" />
          <path d="M64 70 L80 40 L86 72" fill="#fecdd3" stroke="#f9a8d4" />
          <path d="M136 70 L120 40 L114 72" fill="#fecdd3" stroke="#f9a8d4" />
          <circle cx="84" cy="92" r="6" fill="#0f172a" />
          <circle cx="116" cy="92" r="6" fill="#0f172a" />
          <path d="M98 100 Q100 104 102 100" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M85 110 Q100 118 115 110" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M55 145 q-20 5 -15 25" stroke="#f9a8d4" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M145 145 q20 5 15 25" stroke="#f9a8d4" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M48 100 q-18 8 -18 0 q0 -8 18 0" stroke={accent} strokeWidth="2" fill="none" />
          <path d="M152 100 q18 8 18 0 q0 -8 -18 0" stroke={accent} strokeWidth="2" fill="none" />
        </g>
        <g>
          <path d="M80 150 q-10 20 10 28" stroke={accent} strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M120 150 q10 20 -10 28" stroke={accent} strokeWidth="8" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </svg>
  );
}

function BabySVG({ accent = "#fb923c", flip = 1 }) {
  return (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `scaleX(${flip})` }}>
      <defs>
        <linearGradient id="babyBody" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe4c7" />
          <stop offset="100%" stopColor="#ffd5b1" />
        </linearGradient>
        <linearGradient id="onesie" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <g>
        <ellipse cx="100" cy="190" rx="40" ry="10" fill="black" opacity="0.05" />
        <circle cx="100" cy="88" r="46" fill="url(#babyBody)" stroke="#fca5a5" />
        <circle cx="82" cy="86" r="5" fill="#0f172a" />
        <circle cx="118" cy="86" r="5" fill="#0f172a" />
        <path d="M95 96 q5 6 10 0" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 120 Q100 142 140 120 Q136 165 100 176 Q64 165 60 120 Z" fill="url(#onesie)" stroke="#fb923c" />
        <path d="M60 118 q-18 8 -14 22" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M140 118 q18 8 14 22" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M108 54 q10 -10 20 -4" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
        <circle cx="70" cy="102" r="4" fill="#fecaca" />
        <circle cx="130" cy="102" r="4" fill="#fecaca" />
        <circle cx="100" cy="44" r="8" fill={accent} />
      </g>
    </svg>
  );
}
