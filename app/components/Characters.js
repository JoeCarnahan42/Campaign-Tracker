"use client";

import { useState } from "react";
import CharacterDetails from "./CharacterDetails";

export default function Characters() {
  // Placeholder for selected character (we’ll implement details later)
  // Will probably use context
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Sample character data
  const characters = [
    {
      id: 1,
      name: "Arin the Brave",
      race: "Human",
      class: "Fighter",
      subclass: "Champion",
      level: 5,
      alignment: "Lawful Good",
      background: "Soldier",
      experiencePoints: 6500,
      abilities: {
        strength: 18,
        dexterity: 14,
        constitution: 16,
        intelligence: 10,
        wisdom: 12,
        charisma: 11,
      },
      proficiencyBonus: 3,
      savingThrows: {
        strength: true,
        dexterity: false,
        constitution: true,
        intelligence: false,
        wisdom: false,
        charisma: false,
      },
      skills: {
        athletics: true,
        acrobatics: false,
        sleightOfHand: false,
        stealth: false,
        arcana: false,
        history: false,
        investigation: false,
        nature: false,
        religion: false,
        animalHandling: false,
        insight: false,
        medicine: false,
        perception: true,
        survival: true,
        deception: false,
        intimidation: true,
        performance: false,
        persuasion: false,
      },
      hp: {
        max: 45,
        temporary: 0,
        hitDiceTotal: 5,
        hitDice: "5d10",
      },
      ac: 18,
      initiative: 2,
      speed: 30,
      weapons: [
        {
          name: "Longsword",
          attackBonus: 6,
          damage: "1d8+4 slashing",
          type: "Melee",
        },
        {
          name: "Dagger",
          attackBonus: 5,
          damage: "1d4+4 piercing",
          type: "Melee or Ranged",
        },
        {
          name: "Javelin",
          attackBonus: 5,
          damage: "1d6+4 piercing",
          type: "Ranged",
        },
      ],
      spellcasting: null,
      equipment: [
        "Longsword",
        "Dagger",
        "Shield",
        "Chain Mail",
        "Explorer's Pack",
      ],
      features: [
        {
          name: "Second Wind",
          description: "Once per short rest, regain 1d10 + level HP.",
        },
        {
          name: "Action Surge",
          description: "On your turn, take one additional action.",
        },
        {
          name: "Fighting Style",
          description: "Choose a style such as Defense or Dueling.",
        },
        {
          name: "Improved Critical",
          description:
            "Your weapon attacks score a critical hit on a roll of 19 or 20.",
        },
      ],
      proficiencies: [
        "All armor",
        "Shields",
        "Simple weapons",
        "Martial weapons",
      ],
      languages: ["Common", "Dwarvish"],
    },
  ];

  // Get selected character data
  const characterDetails = characters.find((c) => c.id === selectedCharacter);

  return (
    <div className="text-center">
      <h2 className="mb-4 fw-bold">Your Party</h2>

      {/* Character buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {characters.map((char) => (
          <button
            key={char.id}
            onClick={() => setSelectedCharacter(char.id)}
            className="btn btn-lg text-light flex-fill mb-3"
            style={{
              width: "45%",
              maxWidth: "200px",
              height: "150px",
              backgroundColor: "#b22222",
              borderColor: "#8b0000",
            }}
          >
            {char.name}
          </button>
        ))}
      </div>
      <div className="justify-content-center">
        {characterDetails && <CharacterDetails character={characterDetails} />}
      </div>
    </div>
  );
}
