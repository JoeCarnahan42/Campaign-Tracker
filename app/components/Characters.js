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
      name: "Fauna",
      race: "Wood Elf",
      class: "Druid",
      subclass: "Circle of the Moon",
      level: 5,
      alignment: "N/A",
      background: "Outlander",
      experiencePoints: "N/A",
      abilities: {
        strength: 9,
        dexterity: 16,
        constitution: 14,
        intelligence: 12,
        wisdom: 16,
        charisma: 7,
      },
      proficiencyBonus: 3,
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: true,
        wisdom: true,
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
        nature: true,
        religion: false,
        animalHandling: true,
        insight: false,
        medicine: true,
        perception: true,
        survival: true,
        deception: false,
        intimidation: false,
        performance: false,
        persuasion: false,
      },
      hp: {
        max: 38,
        temporary: 0,
        hitDiceTotal: 5,
        hitDice: "5d8",
      },
      ac: 14,
      initiative: 3,
      speed: 35,
      weapons: [
        {
          name: "Shillelagh (Quarterstaff)",
          attackBonus: 2,
          damage: "1d8+4 bludgeoning(Magic)",
          type: "Melee",
        },
        {
          name: "Scimitar",
          attackBonus: 6,
          damage: "1d6+3 slashing",
          type: "Melee",
        },
        {
          name: "Longbow",
          attackBonus: 6,
          damage: "1d8+3 piercing",
          type: "Ranged",
        },
      ],
      spellcasting: null, // To be implemented
      equipment: [
        "Quarterstaff",
        "Scimitar",
        "Longbow with 20 arrows",
        "Leather armor",
        "Pip's Old Violin",
        "Wooden shield",
        "Druidic Focus (Vine Crown)",
        "Blessed Healing Herb",
      ],
      features: [
        {
          name: "Trance",
          description:
            "When you meditate, you gain the same benefit as a long rest in 4 hours.",
        },
        {
          name: "Wild Shape",
          description:
            "On your turn, you can use your action to transform into a beast you have seen before.",
        },
        {
          name: "Improved Wild Shape",
          description:
            "Your Wild Shape now ignores the limitations on the maximum CR of the beast you can transform into. The other restrictions still apply.",
        },
        {
          name: "Darkvision",
          description:
            "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.",
        },
      ],
      proficiencies: [
        "Light armor",
        "shields",
        "simple weapons",
        "scimitars",
        "longbows",
      ],
      languages: ["Common", "Elvish", "Druidic"],
    },
    {
      id: 2,
      name: "Nevik",
      race: "Dwarf",
      class: "Barbarian",
      subclass: "Berserker",
      level: 5,
      alignment: "N/A",
      background: "Background",
      experiencePoints: "N/A",
      abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      proficiencyBonus: 0,
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false,
      },
      skills: {
        athletics: false,
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
        perception: false,
        survival: false,
        deception: false,
        intimidation: false,
        performance: false,
        persuasion: false,
      },
      hp: {
        max: 0,
        temporary: 0,
        hitDiceTotal: 0,
        hitDice: "0d0",
      },
      ac: 0,
      initiative: 0,
      speed: 0,
      weapons: [
        {
          name: "Weapon Name",
          attackBonus: 0,
          damage: "0d0 damage type",
          type: "Type",
        },
      ],
      spellcasting: null,
      equipment: ["Item 1", "Item 2"],
      features: [
        {
          name: "Feature Name",
          description: "Feature description.",
        },
      ],
      proficiencies: ["Proficiency 1", "Proficiency 2"],
      languages: ["Language 1", "Language 2"],
    },
    {
      id: 3,
      name: "Mira",
      race: "Wood Elf",
      class: "Ranger",
      subclass: "Fey Wanderer",
      level: 5,
      alignment: "N/A",
      background: "Background",
      experiencePoints: "N/A",
      abilities: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      },
      proficiencyBonus: 0,
      savingThrows: {
        strength: false,
        dexterity: false,
        constitution: false,
        intelligence: false,
        wisdom: false,
        charisma: false,
      },
      skills: {
        athletics: false,
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
        perception: false,
        survival: false,
        deception: false,
        intimidation: false,
        performance: false,
        persuasion: false,
      },
      hp: {
        max: 0,
        temporary: 0,
        hitDiceTotal: 0,
        hitDice: "0d0",
      },
      ac: 0,
      initiative: 0,
      speed: 0,
      weapons: [
        {
          name: "Weapon Name",
          attackBonus: 0,
          damage: "0d0 damage type",
          type: "Type",
        },
      ],
      spellcasting: null,
      equipment: ["Item 1", "Item 2"],
      features: [
        {
          name: "Feature Name",
          description: "Feature description.",
        },
      ],
      proficiencies: ["Proficiency 1", "Proficiency 2"],
      languages: ["Language 1", "Language 2"],
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
