import { useState } from "react";
import Header from "./components/Header";
import DanceFloor from "./components/DanceFloor";
import Controls from "./components/Controls";

export default function App() {
  const [bpm, setBpm] = useState(110);
  const [isDancing, setIsDancing] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 text-zinc-800">
      <Header />
      <main className="max-w-5xl mx-auto px-4 pb-24">
        <DanceFloor bpm={bpm} isDancing={isDancing} />
        <Controls
          bpm={bpm}
          onBpmChange={setBpm}
          isDancing={isDancing}
          onToggle={() => setIsDancing((v) => !v)}
        />
      </main>
    </div>
  );
}
