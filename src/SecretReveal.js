import { useState, useEffect } from "react";

export default function SecretReveal() {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [orientation, setOrientation] = useState("portrait");
  const [showPassword, setShowPassword] = useState(false);

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
    if (input.trim() === "segreto123") {
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
        <div className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-xl w-full max-w-md text-center mx-2 sm:mx-auto">
          <h1 className="text-lg sm:text-xl font-bold mb-4">
            Per svelare il segreto del luogo nascosto inserisci la combinazione corretta
          </h1>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inserisci combinazione"
              className="pr-10 text-base w-full border rounded px-3 py-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"
              aria-label="Mostra password"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
          <button
            onClick={handleCheck}
            className="w-full text-base py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Svela il segreto
          </button>
        </div>
      )}

      {revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-4">
          <p className="text-xl font-semibold mb-6">
            Hai svelato il luogo nascosto!
          </p>
          <button
            onClick={() => {
              setRevealed(false);
              setInput("");
            }}
            className="text-base px-4 py-2 bg-white text-black rounded-lg"
          >
            ⬅ Torna indietro
          </button>
        </div>
      )}
    </div>
  );
}

