import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-illustration.jpg";
import { PenTool, Sparkles, Building2, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Handwritten "ritershub" SVG path animation
function HandwrittenLogo() {
  return (
    <svg
      viewBox="0 0 600 140"
      className="w-full max-w-[520px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut" }}
        d="M30,95 C32,70 38,50 44,90 M44,55 C44,55 46,52 50,52 M70,95 C70,72 72,58 78,90 C82,75 90,68 98,72 C104,75 100,88 92,92 C86,95 80,90 78,86 M118,95 C118,72 120,58 126,90 C130,75 138,68 146,72 C152,75 148,88 140,92 M168,55 C168,55 170,52 174,52 M168,95 C168,72 172,60 176,90 M196,95 C196,72 200,58 206,90 C210,75 218,68 226,72 C232,75 228,88 220,92 M250,80 C260,68 280,68 282,82 C284,96 264,100 254,92 C248,86 252,76 262,72 M308,55 L308,100 M298,78 L322,78 M340,80 C350,68 370,68 372,82 C374,96 354,100 344,92 C338,86 342,76 352,72 M398,80 C408,68 428,68 430,82 C432,96 412,100 402,92 C396,86 400,76 410,72 M460,40 L460,105 C460,112 466,114 472,108 M450,80 L478,80"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
        d="M40,115 Q230,128 480,118"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.7"
      />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritershub — Real handwritten cards for hotels & cafes in Goa" },
      {
        name: "description",
        content:
          "Ritershub writes real pen-and-ink cards at scale for hotels, resorts and boutique brands. Premium, personal, affordable from ₹50/card.",
      },
      { property: "og:title", content: "Ritershub — Handwritten cards at scale" },
      {
        property: "og:description",
        content: "Real pen & ink cards for hospitality brands. Made in Goa.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-12 pb-20 md:grid-cols-2 md:items-center md:pt-20">
          <div>
            <span className="font-script text-2xl text-primary">time to write!</span>
            <h1 className="mt-2 font-serif-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Your words.
              <br />
              In <span className="underline-scribble">pen &amp; ink.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Ritershub helps hotels, cafes and boutique brands send real handwritten
              cards — at scale. Premium paper, real ink, zero effort on your side.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:brightness-110"
              >
                Start Writing
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 underline-offset-4 hover:text-primary hover:underline"
              >
                View pricing →
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Robotic arm writing on a card with pen and ink"
              width={1280}
              height={1024}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-secondary/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span>Hotels</span><span>·</span>
          <span>Resorts</span><span>·</span>
          <span>Cafes</span><span>·</span>
          <span>Boutique brands</span><span>·</span>
          <span>Real estate</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-script text-2xl text-primary">how it works</span>
          <h2 className="mt-1 font-serif-display text-4xl text-foreground sm:text-5xl">
            From your message to <span className="underline-scribble">their mailbox.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: PenTool,
              t: "1. Send your message",
              d: "Share a template, customer names and quantity. Pick a handwriting style from 30+ options.",
            },
            {
              icon: Sparkles,
              t: "2. We write in real ink",
              d: "Our pen plotters write each card in real ink with natural variation — no two cards alike.",
            },
            {
              icon: Building2,
              t: "3. Delivered to your guests",
              d: "Cards ship to your property or directly to customers. Bulk batches of 30–500.",
            },
          ].map((s) => (
            <div key={s.t} className="paper-card rounded-2xl p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-script text-2xl text-primary">why ritershub</span>
            <h2 className="mt-1 font-serif-display text-4xl sm:text-5xl">
              The personal touch your brand <span className="underline-scribble">can't fake.</span>
            </h2>
            <ul className="mt-8 space-y-4 text-base text-foreground/80">
              {[
                "Real pen, real ink — not printed fonts",
                "30+ authentic handwriting styles",
                "₹50–₹80 per card with bulk pricing",
                "Free sample before you commit",
                "Made in Goa, delivered across India",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="paper-card rounded-2xl p-10">
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 font-serif-display text-2xl italic leading-snug text-foreground">
              “Guests have started photographing the card we leave on their pillow.
              It's now part of our brand.”
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              — Boutique resort, North Goa
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center">
        <h2 className="font-serif-display text-4xl sm:text-5xl">
          Try it on us. <span className="font-script text-primary">Really.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Request a free sample card and see the quality before you order.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-md bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-md transition hover:brightness-110"
        >
          Request Free Sample
        </Link>
      </section>
    </SiteLayout>
  );
}
