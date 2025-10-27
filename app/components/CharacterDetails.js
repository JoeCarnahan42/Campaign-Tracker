"use client";

export default function CharacterDetails({ character }) {
  if (!character) return null;

  // Helper: calculate ability modifier
  const getMod = (score) => Math.floor((score - 10) / 2);

  // Map each skill to its ability (for modifier calculation)
  const skillAbilities = {
    athletics: "strength",
    acrobatics: "dexterity",
    sleightOfHand: "dexterity",
    stealth: "dexterity",
    arcana: "intelligence",
    history: "intelligence",
    investigation: "intelligence",
    nature: "intelligence",
    religion: "intelligence",
    animalHandling: "wisdom",
    insight: "wisdom",
    medicine: "wisdom",
    perception: "wisdom",
    survival: "wisdom",
    deception: "charisma",
    intimidation: "charisma",
    performance: "charisma",
    persuasion: "charisma",
  };

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
          {character.race} {character.class} (Level {character.level}{" "}
          {character.subclass || ""})
        </p>
        <p className="mb-0">
          {character.background} | {character.alignment}
        </p>
      </div>

      <hr />

      {/* Ability Scores */}
      <div
        className="d-flex justify-content-between mb-3 flex-wrap"
        style={{ gap: "0.5rem" }}
      >
        {Object.entries(character.abilities).map(([key, score]) => (
          <div
            key={key}
            className="text-center mb-2"
            style={{
              flex: "1 1 80px", // min width 80px, expand if space allows
              minWidth: "60px",
            }}
          >
            {/* Abbreviate stat names on small screens */}
            <span className="d-inline d-md-none">
              {key.slice(0, 3).toUpperCase()}
            </span>
            <span className="d-none d-md-inline">{key.toUpperCase()}</span>
            <div>
              {score} (
              {getMod(score) >= 0 ? `+${getMod(score)}` : getMod(score)})
            </div>
          </div>
        ))}
      </div>

      <hr />

      {/* Combat Stats */}
      <div
        className="mb-3 p-3 rounded"
        style={{
          backgroundColor: "#fef8e7",
          border: "1px solid #ccc",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1.1rem",
        }}
      >
        <div style={{ flex: "1 1 120px", textAlign: "center" }}>
          <strong>Max HP:</strong> {character.hp.max}
        </div>
        <div style={{ flex: "1 1 120px", textAlign: "center" }}>
          <strong>AC:</strong> {character.ac}
        </div>
        <div style={{ flex: "1 1 120px", textAlign: "center" }}>
          <strong>Initiative:</strong> {character.initiative}
        </div>
        <div style={{ flex: "1 1 120px", textAlign: "center" }}>
          <strong>Speed:</strong> {character.speed} ft
        </div>
        <div style={{ flex: "1 1 120px", textAlign: "center" }}>
          <strong>Hit Dice:</strong> {character.hp.hitDice}
        </div>
      </div>

      <hr />

      {/* Skills & Saving Throws */}
      <div className="mb-3 d-flex flex-wrap gap-3 justify-content-center">
        {/* Skills Box */}
        <div
          className="p-3 rounded"
          style={{
            flex: "1 1 300px",
            backgroundColor: "#fef8e7",
            border: "1px solid #ccc",
            minWidth: "280px",
          }}
        >
          <h5 className="mb-2 text-center">
            <u>Skills</u>
          </h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {Object.entries(character.skills).map(([skill, proficient]) => {
              const ability = skillAbilities[skill];
              const mod =
                getMod(character.abilities[ability]) +
                (proficient ? character.proficiencyBonus : 0);
              return (
                <div
                  key={skill}
                  style={{
                    borderBottom: "1px solid #ccc",
                    paddingBottom: "2px",
                  }}
                >
                  <strong>
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </strong>
                  : {mod >= 0 ? `+${mod}` : mod} {proficient ? "(P)" : ""}
                </div>
              );
            })}
          </div>
        </div>

        {/* Saving Throws Box */}
        <div
          className="p-4 rounded"
          style={{
            flex: "1 1 300px",
            backgroundColor: "#fef8e7",
            border: "1px solid #ccc",
            minWidth: "280px",
          }}
        >
          <h5 className="mb-3 text-center">
            <u>Saving Throws</u>
          </h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "1rem",
              fontSize: "1.1rem",
            }}
          >
            {Object.entries(character.savingThrows).map(
              ([ability, proficient]) => {
                const mod =
                  getMod(character.abilities[ability]) +
                  (proficient ? character.proficiencyBonus : 0);
                return (
                  <div
                    key={ability}
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>
                      {ability.toUpperCase()}
                    </div>
                    <div style={{ marginTop: "0.25rem" }}>
                      {mod >= 0 ? `+${mod}` : mod} {proficient ? "(P)" : ""}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <hr />

      {/* Weapons & Equipment */}
      <div className="mb-3 d-flex flex-wrap gap-3 justify-content-center">
        {/* Weapons Box */}
        <div
          className="p-3 rounded"
          style={{
            flex: "1 1 300px",
            backgroundColor: "#fef8e7",
            border: "1px solid #ccc",
            minWidth: "280px",
          }}
        >
          <h5 className="mb-2 text-center">
            <u>Weapons</u>
          </h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              rowGap: "0.5rem",
            }}
          >
            {character.weapons.map((w, idx) => (
              <div key={idx}>
                <strong>{w.name}</strong> (
                {w.attackBonus >= 0 ? `+${w.attackBonus}` : w.attackBonus}) -{" "}
                {w.damage} [{w.type}]
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Box */}
        <div
          className="p-3 rounded"
          style={{
            flex: "1 1 300px",
            backgroundColor: "#fef8e7",
            border: "1px solid #ccc",
            minWidth: "280px",
          }}
        >
          <h5 className="mb-2 text-center">
            <u>Equipment</u>
          </h5>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              rowGap: "0.5rem",
            }}
          >
            {character.equipment.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      {/* Features & Traits */}
      <div className="mb-3">
        <h5>Features & Traits</h5>
        <div
          style={{
            maxHeight: "150px",
            overflowY: "auto",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fef8e7",
          }}
        >
          {character.features.map((f, idx) => (
            <div key={idx} className="mb-2">
              <strong>{f.name}:</strong> {f.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
