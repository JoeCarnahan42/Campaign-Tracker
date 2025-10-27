"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const adventureBook = {
    title: "Hoard of the Dragon Queen",
    summary: `The cult of the dragon is amassing a mighty treasure hoard
    in an attempt to raise Tiamat, the five-headed dragon goddess,
    from the Nine Hells. Heroes must stop the cult's advance across
    the Sword Coast and prevent the rise of Tiamat.`,
    nextSession: new Date("2025-10-31T19:00:00"), // example date & time
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const total = adventureBook.nextSession - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Formatted date & time
  const sessionDate = adventureBook.nextSession.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const sessionTime = adventureBook.nextSession.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container my-5">
      <div className="d-flex flex-column flex-md-row align-items-center gap-4 mb-4">
        {/* Cover Art */}
        <div className="flex-shrink-0">
          <Image
            src="/Hoard-of-the-Dragon-Queen.jpg"
            alt={`${adventureBook.title} Cover`}
            width={350}
            height={190}
            style={{ objectFit: "contain" }}
            className="rounded shadow"
          />
        </div>

        {/* Adventure Info */}
        <div className="flex-fill">
          <h1 className="mb-3">{adventureBook.title}</h1>
          <p style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
            {adventureBook.summary}
          </p>
        </div>
      </div>

      {/* Next Session */}
      <div
        className="p-4 rounded shadow text-center"
        style={{
          backgroundColor: "#fef8e7",
          maxWidth: "400px",
          margin: "0 auto",
          fontFamily: "Georgia, serif",
        }}
      >
        <h3 className="mb-3">Next Session</h3>

        {/* Date & Time */}
        <p className="mb-2" style={{ fontSize: "1.1rem" }}>
          <strong>Date:</strong> {sessionDate}
        </p>
        <p className="mb-3" style={{ fontSize: "1.1rem" }}>
          <strong>Time:</strong> {sessionTime}
        </p>

        {/* Countdown */}
        {timeLeft.total > 0 ? (
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        ) : (
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            The session is happening now!
          </div>
        )}
      </div>
    </div>
  );
}
