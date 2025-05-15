import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SecretReveal() {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const updateOrientation = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      setOrientation(isLandscape ? "landscape" : "portrait");
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  const handleCheck = () => {
    if (input === "segreto123") {
      setRevealed(true);
    } else {
      alert("Combinazione errata. Riprova.");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover bg-center p-4 relative transition-all duration-500 ${orientation === "landscape" ? "flex-row" : "flex-col"}`}
      style={{
        backgroundImage: revealed
          ? "url('https://www.viaggiaescopri.it/wp-content/uploads/2012/10/Chiesa-di-San-Nicol%C3%B2-cosa-vedere-a-Guspini.jpg')"
          : "url('https://img.posterstore.com/zoom/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg')",
      }}
    >
      {!revealed && (
        <div className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-xl w-full max-w-md text-center mx-2 sm:mx-auto animate-fade-in">
          <h1 className="text-lg sm:text-xl font-bold mb-4">
            Per svelare il segreto del luogo nascosto inserisci la combinazione corretta
          </h1>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inserisci combinazione"
            className="mb-4 text-base"
          />
          <Button onClick={handleCheck} className="w-full text-base py-2">
            Svela il segreto
          </Button>
        </div>
      )}

      {revealed && (
        <div className="absolute top-4 left-4 animate-slide-in">
          <Button
            variant="secondary"
            onClick={() => {
              setRevealed(false);
              setInput("");
            }}
            className="text-sm px-3 py-1"
          >
            ⬅ Indietro
          </Button>
        </div>
      )}
    </div>
  );
}
