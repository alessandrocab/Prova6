import React, { useState } from "react";

export default function SecretReveal() {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);

  const handleCheck = () => {
    if (input === "segreto123") {
      setRevealed(true);
    } else {
      alert("Combinazione errata. Riprova.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundImage: revealed
          ? "url('https://www.viaggiaescopri.it/wp-content/uploads/2012/10/Chiesa-di-San-Nicol%C3%B2-cosa-vedere-a-Guspini.jpg')"
          : "url('https://img.posterstore.com/zoom/wb0101-8harrypotter-thephilosophersstoneno150x70.jpg')",
      }}
    >
      {!revealed && (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Per svelare il segreto del luogo nascosto inserisci la combinazione corrett
          </h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inserisci combinazione"
            style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", fontSize: "1rem" }}
          />
          <button
            onClick={handleCheck}
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Svela il segreto
          </button>
        </div>
      )}
    </div>
  );
}
