"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const adventureBook = {
    title: "Rise of Tiamat",
    summary: `The Cult of the Dragon leads the charge in an unholy crusade to bring Tiamat back to the Realms, and the situation grows more perilous for good people with each passing moment. The battle becomes increasingly political as opportunities to gather allies and gain advantage present themselves. From Waterdeep to the Sea of Moving Ice to Thay, it is a race against Evil. Succeed or succumb to the oppression of draconic tyranny. Win or lose, things will never be the same again.`,
    nextSession: new Date("2026-05-09T19:00:00"), // example date & time
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
            src="/Rise-of_Tiamat.jpg"
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
