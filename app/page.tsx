"use client";

import React from "react";

export default function RezoneWebsite() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-black tracking-tight">
            REZONE
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#packages" className="hover:text-white">Packages</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#book" className="hover:text-white">Book</a>
          </div>

          <a
            href="#book"
            className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-gray-200"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
      >
        <div className="mb-5 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm text-gray-300">
          Former Professional Fortnite Player • NA-West Competitive Coaching
        </div>

        <h1 className="max-w-6xl text-6xl font-black tracking-tight md:text-8xl">
          REZONE YOUR GAME.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Competitive Fortnite coaching built for players who want cleaner
          mechanics, smarter fights, stronger rotations, and a real plan to
          improve instead of just grinding ranked randomly.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="rounded-2xl bg-white px-7 py-4 font-bold text-black transition hover:bg-gray-200"
          >
            View Coaching
          </a>

          <a
            href="https://liquipedia.net/fortnite/Cesar"
            target="_blank"
            className="rounded-2xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
          >
            Liquipedia
          </a>

          <a
            href="https://fortnitetracker.com/profile/kbm/Cesars%2010/events?region=GLOBAL"
            target="_blank"
            className="rounded-2xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
          >
            Fortnite Tracker
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-zinc-950 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          <Stat number="339K+" label="Fortnite PR" />
          <Stat number="$16.5K" label="Event Earnings" />
          <Stat number="41K+" label="Tracker Views" />
          <Stat number="Pollo" label="Former Duo History" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              About the coach
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight">
              Cristian / Cesar
            </h2>

            <p className="mt-4 text-gray-400">
              Former professional Fortnite player
            </p>

            <div className="mt-8 grid gap-4">
              <Info title="Region" text="NA-West" />
              <Info title="Experience" text="Years of competitive Fortnite" />
              <Info
                title="Focus"
                text="Fighting, rotations, VOD review, tournament prep"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
              My story
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Coaching from real competitive experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Hey, my name is Cristian, although most people online know me as
              Cesar. I’m a 17-year old former professional Fortnite player who
              competed in the NA-West region for several years.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Through competing at a high level, I learned how much separates
              average players from strong competitive players: decision making,
              consistency, confidence, and having a clear structure for
              improvement.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My goal with Rezone is to help players stop guessing what they
              need to fix. Whether you’re trying to rank up, improve your
              fighting, or perform better in tournaments, I’ll help break down
              your gameplay and give you a real plan to improve.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            Packages
          </p>

          <h2 className="mt-4 text-center text-5xl font-black">
            Coaching Packages
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Package
              tag="Starter"
              price="$25 CAD"
              title="VOD Review"
              text="Send gameplay and get a clear breakdown of your biggest mistakes."
              items={[
                "Fight analysis",
                "Rotation mistakes",
                "Endgame review",
                "Practice recommendations",
              ]}
            />

            <Package
              tag="Most Popular"
              price="$50 CAD"
              title="1-on-1 Coaching"
              text="A live private session focused on your gameplay and improvement."
              items={[
                "60 minute private session",
                "Mechanics coaching",
                "Ranked strategy",
                "Custom improvement plan",
              ]}
            />

            <Package
              tag="Competitive"
              price="$120 CAD"
              title="30-Day Program"
              text="A full improvement plan for players trying to take comp seriously."
              items={[
                "Weekly coaching",
                "Daily routines",
                "VOD reviews",
                "Tournament preparation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            Reviews
          </p>

          <h2 className="mt-4 text-center text-5xl font-black">
            Student Feedback
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Review
              name="Evan M."
              rank="Elite → Unreal"
              text="I was hardstuck Elite for months. After two sessions my fights felt way cleaner and I finally hit Unreal."
            />

            <Review
              name="Jayden R."
              rank="Competitive Player"
              text="Most coaches just tell you obvious stuff. Cristian actually broke down why I kept dying midgame and fixed it fast."
            />

            <Review
              name="Marcus T."
              rank="Champion Player"
              text="The routines helped way more than I expected. My mechanics got way more consistent after like a week."
            />
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-zinc-950 p-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-500">
            Book Coaching
          </p>

          <h2 className="mt-4 text-center text-5xl font-black">
            Submit a Booking Request
          </h2>

          <form
            action="https://formsubmit.co/guywithduckonhisface@gmail.com"
            method="POST"
            className="mt-10 space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            />

            <input
              name="contact"
              placeholder="Email or Discord"
              required
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me your rank, region, and what you need help with."
              required
              className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-6 py-4 font-black text-black transition hover:bg-gray-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-8">
      <h3 className="text-4xl font-black">{number}</h3>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  );
}

function Info({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 font-bold">{text}</p>
    </div>
  );
}

function Package({
  tag,
  price,
  title,
  text,
  items,
}: {
  tag: string;
  price: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-white/30">
      <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
        {tag}
      </p>

      <h3 className="text-2xl font-black">{title}</h3>

      <p className="mt-3 text-4xl font-black">{price}</p>

      <p className="mt-4 leading-7 text-gray-400">{text}</p>

      <ul className="mt-6 space-y-3 text-gray-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Review({
  name,
  rank,
  text,
}: {
  name: string;
  rank: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black p-8">
      <p className="leading-7 text-gray-300">“{text}”</p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{rank}</p>
      </div>
    </div>
  );
}