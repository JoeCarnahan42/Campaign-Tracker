"use client";

export default function CharacterDetails({ character }) {
  if (!character) return null;

  return (
    <div
      className="mt-5 p-4 border border-secondary rounded shadow bg-light mx-auto"
      style={{
        maxWidth: "800px",
        maxHeight: "600px",
        overflowY: "auto",
        fontFamily: "serif",
      }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">{character.name}</h2>
        <p className="mb-1">
          {character.race} {character.class}
        </p>
      </div>

      <hr />
    </div>
  );
}
