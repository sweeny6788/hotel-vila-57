/**
 * Hotel Vila 57 — Single-Page React Demo
 * 4 Theme Switcher: Aman / The Standard / 1 Hotels / Marriott
 *
 * Dependencies (install in your project):
 *   npm i react react-dom framer-motion lucide-react
 *   + Tailwind CSS configured
 *
 * In tailwind.config.js add:
 *   theme: { extend: { fontFamily: {
 *     serif: ['"Playfair Display"', 'serif'],
 *     sans:  ['Inter', 'system-ui', 'sans-serif'],
 *     display: ['"Space Grotesk"', 'sans-serif'],
 *     organic: ['"DM Serif Display"', 'serif'],
 *   }}}
 *
 * Add to index.html <head>:
 *   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi, Coffee, Bed, MapPin, Phone, Mail, Star, Calendar,
  Mountain, Utensils, ShieldCheck, Car, Tv, Wind, Languages,
  ArrowRight, Check, Menu, X, Users, Sparkles, Leaf, Award,
  ChevronRight, Building2, ConciergeBell, Plane, ShoppingBag,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SHARED DATA                                                        */
/* ------------------------------------------------------------------ */
const HOTEL = {
  name: "Hotel Vila 57",
  tagline: "Tirana's Panoramic Terrace Address",
  address: "Rruga Kongresi i Manastirit Nr 57, Tiranë 1001, Albania",
  phoneShort: "+355 4 000 0057",
  email: "stay@vila57.al",
  usp: "Modern, budget-friendly comfort with a panoramic terrace view of Dajti Mountain.",
  rating: 8.2,
  ratingNote: "Solo travelers rate the location 8.2",
};

const ROOMS = [
  {
    type: "Standard Double with Balcony",
    blurb: "Private balcony, city views, queen bed and writing desk.",
    sleeps: 2,
    price: 49,
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "https://picsum.photos/seed/vila57-room-double/1200/900",
  },
  {
    type: "Deluxe Twin Room",
    blurb: "Two single beds, en-suite bathroom and panoramic windows.",
    sleeps: 2,
    price: 59,
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "https://picsum.photos/seed/vila57-room-twin/1200/900",
  },
  {
    type: "Economy Triple Room",
    blurb: "Family-friendly triple with wardrobe, TV and air-conditioning.",
    sleeps: 3,
    price: 69,
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "https://picsum.photos/seed/vila57-room-triple/1200/900",
  },
];

const TOP_AMENITIES = [
  { icon: Plane, label: "Airport Shuttle" },
  { icon: Wifi, label: "Free WiFi (11 Mbps)" },
  { icon: ConciergeBell, label: "24-hour Front Desk" },
  { icon: Coffee, label: "Coffee House" },
  { icon: Utensils, label: "Bar & Snack Bar" },
  { icon: Users, label: "Family Rooms" },
  { icon: ShieldCheck, label: "24-hour Security" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "TV in every room" },
  { icon: ShoppingBag, label: "Minimarket on site" },
  { icon: Building2, label: "Business Center" },
  { icon: Car, label: "Car Rental" },
];

const ATTRACTIONS = [
  { name: "Skanderbeg Square", dist: "1.1 mi" },
  { name: "Et'hem Bey Mosque", dist: "1.2 mi" },
  { name: "Dajti Mountain View", dist: "On terrace" },
  { name: "Mother Teresa Airport", dist: "9.3 mi" },
];

const LANGUAGES = ["English", "Albanian", "Italian", "German", "Greek", "Spanish"];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    custom={delay}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  THEME SWITCHER                                                     */
/* ------------------------------------------------------------------ */
const THEMES = [
  { id: "aman", label: "Aman", sub: "Quiet Luxury" },
  { id: "standard", label: "The Standard", sub: "Boutique" },
  { id: "onehotels", label: "1 Hotels", sub: "Eco-Nature" },
  { id: "marriott", label: "Marriott", sub: "Corporate Trust" },
];

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div className="sticky top-0 z-50 w-full bg-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-xs sm:text-sm tracking-widest uppercase text-neutral-400">
          Demo Switcher · Hotel Vila 57
        </div>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((t) => {
            const active = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full border transition-all ${
                  active
                    ? "bg-white text-neutral-950 border-white shadow-lg"
                    : "border-neutral-700 hover:border-white hover:bg-neutral-900"
                }`}
              >
                <span className="font-semibold">{t.label}</span>
                <span className="hidden sm:inline ml-2 opacity-60">— {t.sub}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  THEME 1 — AMAN (Quiet Luxury)                                      */
/* ================================================================== */
function AmanTheme() {
  return (
    <div className="bg-[#f6f1e8] text-neutral-800 font-serif" style={{ fontFamily: '"Playfair Display", serif' }}>
      {/* Nav */}
      <header className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex items-center justify-between">
        <div className="text-xl tracking-[0.3em] uppercase">Vila 57</div>
        <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-neutral-600">
          <a href="#stay">Stay</a><a href="#terrace">Terrace</a>
          <a href="#location">Location</a><a href="#book">Reserve</a>
        </nav>
        <button className="text-sm tracking-widest uppercase border-b border-neutral-800 pb-1">Reserve</button>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-32 grid lg:grid-cols-12 gap-10 items-end">
        <Reveal className="lg:col-span-7">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-8">Tiranë · Albania</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-light">
            A quiet view<br />of Dajti Mountain.
          </h1>
          <p className="mt-10 max-w-lg text-lg text-neutral-600 leading-relaxed font-sans">
            {HOTEL.usp} A discreet retreat above the city — a panoramic terrace, private rooms,
            and the unhurried rhythm of Tirana below.
          </p>
        </Reveal>
        <Reveal delay={1} className="lg:col-span-5">
          {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
          <img
            src="https://picsum.photos/seed/vila57-aman-hero/1400/1200"
            alt="Hotel Vila 57 terrace overlooking Dajti Mountain"
            className="w-full h-[60vh] object-cover grayscale-[20%]"
          />
        </Reveal>
      </section>

      {/* Editorial split */}
      <section id="terrace" className="border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-20">
          <Reveal>
            {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
            <img src="https://picsum.photos/seed/vila57-terrace/1200/1400"
                 alt="Terrace at sunset" className="w-full h-[70vh] object-cover" />
          </Reveal>
          <Reveal delay={1} className="self-center">
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-6">The Property</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Comfort, distilled to its essentials.
            </h2>
            <p className="mt-8 text-neutral-600 leading-loose font-sans">
              Family rooms with air-conditioning, private bathrooms and panoramic windows.
              A coffee house, a bar, and a terrace where mornings begin slowly and end with the mountain
              at golden hour.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-y-6 font-sans text-sm text-neutral-700">
              <div className="flex items-center gap-3"><Coffee className="w-4 h-4" /> Coffee House</div>
              <div className="flex items-center gap-3"><Wifi className="w-4 h-4" /> Free WiFi</div>
              <div className="flex items-center gap-3"><Bed className="w-4 h-4" /> Family Rooms</div>
              <div className="flex items-center gap-3"><Mountain className="w-4 h-4" /> Terrace View</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rooms */}
      <section id="stay" className="border-t border-neutral-300 bg-[#efe7d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-6">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-light max-w-2xl">Three rooms, each with its own quiet character.</h2>
          </Reveal>
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {ROOMS.map((r, i) => (
              <Reveal key={r.type} delay={i}>
                {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
                <img src={r.img} alt={r.type} className="w-full h-80 object-cover" />
                <div className="mt-6">
                  <h3 className="text-2xl font-light">{r.type}</h3>
                  <p className="mt-3 text-sm text-neutral-600 font-sans leading-relaxed">{r.blurb}</p>
                  <div className="mt-6 flex items-center justify-between font-sans text-sm tracking-widest uppercase">
                    <span className="text-neutral-500">From €{r.price} / night</span>
                    <span className="border-b border-neutral-800 pb-1">Reserve</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="border-t border-neutral-300">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-32 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-8">Location</p>
            <p className="text-3xl md:text-5xl leading-snug font-light">
              {HOTEL.address}
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-x-16 gap-y-6 font-sans text-sm">
              {ATTRACTIONS.map(a => (
                <div key={a.name}>
                  <div className="tracking-widest uppercase text-xs text-neutral-500">{a.dist}</div>
                  <div className="mt-1 text-neutral-800">{a.name}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="book" className="border-t border-neutral-300 bg-[#1a1a1a] text-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xl tracking-[0.3em] uppercase text-white">Vila 57</div>
            <p className="mt-6 text-sm leading-relaxed text-neutral-400 font-sans">{HOTEL.address}</p>
          </div>
          <div className="font-sans text-sm space-y-2">
            <p className="text-neutral-500 uppercase tracking-widest text-xs mb-3">Contact</p>
            <p>{HOTEL.phoneShort}</p><p>{HOTEL.email}</p>
          </div>
          <div className="font-sans text-sm">
            <p className="text-neutral-500 uppercase tracking-widest text-xs mb-3">Languages</p>
            <p className="text-neutral-300">{LANGUAGES.join(" · ")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  THEME 2 — THE STANDARD (Boutique / Brutalist)                      */
/* ================================================================== */
function StandardTheme() {
  return (
    <div className="bg-white text-black" style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}>
      {/* Nav */}
      <header className="border-b-[6px] border-black sticky top-[60px] sm:top-[52px] bg-white z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex items-center justify-between">
          <div className="text-3xl font-black tracking-tighter">VILA<span className="text-red-600">/</span>57</div>
          <nav className="hidden md:flex gap-2 text-sm font-bold uppercase">
            {["Stay", "Eat", "Drink", "Visit"].map(x => (
              <a key={x} href="#" className="px-3 py-2 border-2 border-black hover:bg-red-600 hover:text-white">{x}</a>
            ))}
          </nav>
          <button className="px-4 py-2 bg-red-600 text-white font-black uppercase border-2 border-black shadow-[6px_6px_0_0_#000]">
            Book →
          </button>
        </div>
      </header>

      {/* Hero — quirky asymmetric */}
      <section className="relative border-b-[6px] border-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7">
            <span className="inline-block bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest">Tirana / 1001</span>
            <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
              SLEEP<br />
              <span className="bg-red-600 text-white px-2">LOUD.</span><br />
              WAKE UP<br />HIGHER.
            </h1>
            <p className="mt-8 text-lg max-w-md font-medium">
              {HOTEL.usp.toUpperCase()}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-black text-white font-black uppercase border-4 border-black shadow-[8px_8px_0_0_#dc2626]">
                Reserve a Room
              </button>
              <button className="px-6 py-3 bg-white text-black font-black uppercase border-4 border-black">
                See the Terrace
              </button>
            </div>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-5 relative">
            {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
            <img src="https://picsum.photos/seed/vila57-standard-hero/1200/1400"
                 alt="Bold hotel facade" className="w-full h-[60vh] object-cover border-[6px] border-black" />
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-4 border-[6px] border-black rotate-[-3deg]">
              <p className="text-xs font-black uppercase">Solo travel score</p>
              <p className="text-4xl font-black">{HOTEL.rating}/10</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-red-600 text-white border-b-[6px] border-black overflow-hidden">
        <div className="py-3 flex gap-8 whitespace-nowrap text-2xl font-black uppercase tracking-tight animate-[marquee_25s_linear_infinite]">
          {Array(2).fill(0).map((_, k) => (
            <div key={k} className="flex gap-8">
              <span>★ FREE WIFI</span><span>★ AIRPORT SHUTTLE</span><span>★ COFFEE HOUSE</span>
              <span>★ TERRACE</span><span>★ FAMILY ROOMS</span><span>★ 24H FRONT DESK</span>
              <span>★ MOVIE NIGHTS</span><span>★ MINIMARKET</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>

      {/* Rooms — quirky cards */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 border-b-[6px] border-black">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Pick Your Room.</h2>
          <p className="mt-3 text-lg font-medium">Three rooms. Zero pretension. Maximum view.</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {ROOMS.map((r, i) => (
            <Reveal key={r.type} delay={i}>
              <div className={`border-4 border-black p-1 ${i === 1 ? "bg-red-600 text-white" : "bg-white"}`}>
                {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
                <img src={r.img} alt={r.type} className="w-full h-64 object-cover border-b-4 border-black" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase">Room {String(i + 1).padStart(2, "0")}</span>
                    <span className="text-2xl font-black">€{r.price}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight">{r.type}</h3>
                  <p className="mt-2 text-sm font-medium">{r.blurb}</p>
                  <button className={`mt-4 w-full py-3 font-black uppercase border-4 border-black ${
                    i === 1 ? "bg-white text-black" : "bg-black text-white"
                  }`}>Grab It →</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Amenities — sticker grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 border-b-[6px] border-black">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">The Goods.</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOP_AMENITIES.map((a, i) => {
            const Icon = a.icon;
            const tilt = i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
            const fill = i % 3 === 0 ? "bg-red-600 text-white" : "bg-white";
            return (
              <Reveal key={a.label} delay={i % 4}>
                <div className={`p-5 border-4 border-black ${fill} ${tilt} hover:rotate-0 transition-transform`}>
                  <Icon className="w-8 h-8" strokeWidth={2.5} />
                  <p className="mt-3 font-black uppercase text-sm leading-tight">{a.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Location quirky */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 border-b-[6px] border-black grid lg:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Where?</h2>
          <p className="mt-4 text-xl font-bold">{HOTEL.address}</p>
          <ul className="mt-8 space-y-3">
            {ATTRACTIONS.map(a => (
              <li key={a.name} className="flex items-center justify-between border-b-4 border-black pb-2">
                <span className="font-black uppercase">{a.name}</span>
                <span className="bg-red-600 text-white px-2 py-1 text-sm font-black border-2 border-black">{a.dist}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={1}>
          {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
          <img src="https://picsum.photos/seed/vila57-tirana-bold/1400/1200"
               alt="Tirana neighbourhood" className="w-full h-full min-h-[400px] object-cover border-4 border-black" />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-black">VILA<span className="text-red-600">/</span>57</div>
            <p className="mt-3 text-sm font-medium">{HOTEL.address}</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-red-500 font-black uppercase mb-2">Contact</p>
            <p>{HOTEL.phoneShort}</p><p>{HOTEL.email}</p>
          </div>
          <div className="text-sm">
            <p className="text-red-500 font-black uppercase mb-2">We Speak</p>
            <p>{LANGUAGES.join(" / ")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  THEME 3 — 1 HOTELS (Eco-Nature)                                    */
/* ================================================================== */
function OneHotelsTheme() {
  return (
    <div className="bg-[#f5f1ea] text-stone-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Nav */}
      <header className="bg-[#f5f1ea]/90 backdrop-blur sticky top-[60px] sm:top-[52px] z-30 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-emerald-700" />
            <span className="text-xl font-medium tracking-wide" style={{ fontFamily: '"DM Serif Display", serif' }}>
              Vila 57
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-stone-600">
            <a href="#stay">Stay</a><a href="#nature">Nature</a>
            <a href="#wellness">Wellness</a><a href="#book">Reserve</a>
          </nav>
          <button className="px-5 py-2.5 rounded-full bg-emerald-800 text-white text-sm hover:bg-emerald-900 transition">
            Reserve
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
          <img src="https://picsum.photos/seed/vila57-nature-hero/1800/1100"
               alt="Dajti Mountain forest" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-[#f5f1ea]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur text-xs uppercase tracking-widest text-emerald-900">
              <Leaf className="w-3 h-3" /> Rooted in Tirana
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-[1.05]"
                style={{ fontFamily: '"DM Serif Display", serif' }}>
              Where the city ends<br />and Dajti begins.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-stone-100 leading-relaxed">
              {HOTEL.usp} A panoramic terrace, organic mornings, and rooms that breathe with the season.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars of sustainability feel */}
      <section id="nature" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal>
          <h2 className="text-4xl md:text-5xl max-w-2xl" style={{ fontFamily: '"DM Serif Display", serif' }}>
            Comfort that respects its surroundings.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: Mountain, title: "Mountain Air", body: "Dajti panoramas from every terrace seat — naturally cooled evenings, no extra charge." },
            { icon: Leaf, title: "Local Mornings", body: "Coffee house with regional roasters, breakfast available in-room or under the open sky." },
            { icon: Sparkles, title: "Lighter Living", body: "Thoughtful housekeeping, refillable touches, family-sized rooms designed to stay a while." },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i}>
                <div className="bg-white/60 rounded-3xl p-8 border border-stone-200 hover:bg-white transition">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-800/10 flex items-center justify-center text-emerald-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-xl text-stone-900" style={{ fontFamily: '"DM Serif Display", serif' }}>{p.title}</h3>
                  <p className="mt-3 text-stone-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Rooms */}
      <section id="stay" className="bg-[#ece5d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: '"DM Serif Display", serif' }}>Rooms & Suites</h2>
            <p className="text-stone-600 max-w-md">Linen-light interiors, wood tones, and balconies that open toward the mountain.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {ROOMS.map((r, i) => (
              <Reveal key={r.type} delay={i}>
                <div className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition">
                  {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
                  <img src={r.img} alt={r.type} className="w-full h-72 object-cover" />
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800">
                      <Users className="w-3.5 h-3.5" /> Sleeps {r.sleeps}
                    </div>
                    <h3 className="mt-3 text-2xl text-stone-900" style={{ fontFamily: '"DM Serif Display", serif' }}>{r.type}</h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">{r.blurb}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-stone-500 text-sm">From <strong className="text-stone-900">€{r.price}</strong>/night</span>
                      <button className="text-sm text-emerald-800 font-medium flex items-center gap-1">
                        Reserve <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="wellness" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: '"DM Serif Display", serif' }}>What's included</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TOP_AMENITIES.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} delay={i % 4}>
                <div className="rounded-2xl bg-white/70 border border-stone-200 p-5 flex items-center gap-3 hover:bg-white transition">
                  <div className="w-10 h-10 rounded-full bg-emerald-800/10 flex items-center justify-center text-emerald-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-stone-700">{a.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Location */}
      <section className="bg-emerald-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-emerald-300 text-xs uppercase tracking-widest">In the Neighborhood</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-white" style={{ fontFamily: '"DM Serif Display", serif' }}>
              A few steps from old Tirana, a glance from Dajti.
            </h2>
            <p className="mt-4 text-stone-300">{HOTEL.address}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {ATTRACTIONS.map(a => (
                <div key={a.name} className="rounded-2xl bg-emerald-800/40 p-4 border border-emerald-700">
                  <div className="text-emerald-300 text-xs uppercase tracking-widest">{a.dist}</div>
                  <div className="mt-1 text-white">{a.name}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
            <img src="https://picsum.photos/seed/vila57-green-terrace/1200/1400"
                 alt="Green terrace" className="w-full rounded-3xl h-[60vh] object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="book" className="bg-[#1f2a25] text-stone-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="text-xl text-white" style={{ fontFamily: '"DM Serif Display", serif' }}>Vila 57</span>
            </div>
            <p className="mt-4 text-sm text-stone-400">{HOTEL.address}</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-emerald-300 uppercase tracking-widest text-xs mb-2">Reach Us</p>
            <p>{HOTEL.phoneShort}</p><p>{HOTEL.email}</p>
          </div>
          <div className="text-sm">
            <p className="text-emerald-300 uppercase tracking-widest text-xs mb-2">Languages</p>
            <p>{LANGUAGES.join(" · ")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  THEME 4 — MARRIOTT (Corporate / Trust)                             */
/* ================================================================== */
function MarriottTheme() {
  return (
    <div className="bg-white text-slate-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-[60px] sm:top-[52px] z-30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-blue-700 flex items-center justify-center text-white font-bold">V</div>
            <div>
              <div className="text-sm font-bold text-slate-900 leading-tight">Hotel Vila 57</div>
              <div className="text-xs text-slate-500">Tirana, Albania</div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-7 text-sm text-slate-700">
            <a href="#overview">Overview</a><a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a><a href="#location">Location</a><a href="#policies">Policies</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:block text-sm text-blue-700 font-medium">Sign in</button>
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero + Booking widget */}
      <section className="relative bg-slate-900 text-white">
        {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
        <img src="https://picsum.photos/seed/vila57-corporate-hero/1800/1100"
             alt="Hotel Vila 57 exterior" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <Reveal>
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
              <span className="text-slate-300 ml-2">Guest Rated {HOTEL.rating}/10</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
              Comfort & convenience in the heart of Tirana
            </h1>
            <p className="mt-4 text-slate-200 max-w-2xl">{HOTEL.usp}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Free WiFi", "Airport Shuttle", "24/7 Front Desk", "Family Rooms", "Bar & Coffee"].map(t => (
                <span key={t} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full">{t}</span>
              ))}
            </div>
          </Reveal>

          {/* Booking widget */}
          <Reveal delay={1}>
            <div className="mt-10 bg-white text-slate-800 rounded-lg shadow-2xl p-4 md:p-5 grid grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="col-span-2 lg:col-span-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Destination</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-300 rounded px-3 py-2">
                  <MapPin className="w-4 h-4 text-blue-700" />
                  <span className="text-sm">Tirana, Albania</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Check-in</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-300 rounded px-3 py-2">
                  <Calendar className="w-4 h-4 text-blue-700" />
                  <span className="text-sm">Thu, May 7</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Check-out</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-300 rounded px-3 py-2">
                  <Calendar className="w-4 h-4 text-blue-700" />
                  <span className="text-sm">Fri, May 8</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Guests</label>
                <div className="mt-1 flex items-center gap-2 border border-slate-300 rounded px-3 py-2">
                  <Users className="w-4 h-4 text-blue-700" />
                  <span className="text-sm">1 Adult, 1 Room</span>
                </div>
              </div>
              <button className="lg:self-end bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded transition">
                Search Rooms
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "8.2/10", l: "Solo Traveler Score" },
            { n: "1.1 mi", l: "Skanderbeg Square" },
            { n: "9.3 mi", l: "TIA Airport" },
            { n: "24/7", l: "Front Desk & Security" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-blue-700">{s.n}</div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
        <Reveal className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About this property</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Vila 57 Hotel offers comfortable family rooms with air-conditioning, private bathrooms,
            and city views. Each room includes a wardrobe, TV, and complimentary toiletries. Guests
            can relax on the panoramic terrace or enjoy a drink at the bar, with free WiFi available
            throughout the property.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Located 9.3 mi from Tirana International Mother Teresa Airport, the hotel is moments from
            Skanderbeg Square (1.1 mi) and Et'hem Bey Mosque (1.2 mi). Guests consistently praise
            the value for money and excellent service.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <div className="rounded-lg border border-slate-200 p-6 bg-slate-50">
            <h3 className="font-bold text-slate-900 flex items-center gap-2"><Award className="w-5 h-5 text-blue-700" /> Why Book Direct</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {["Best price guarantee", "Flexible cancellation", "Express check-in/out", "Complimentary baggage storage"].map(b => (
                <li key={b} className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> {b}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Rooms — grid table */}
      <section id="rooms" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Available Rooms</h2>
            <p className="mt-2 text-slate-600">Select your room type. All rates include taxes and fees.</p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {ROOMS.map((r, i) => (
              <Reveal key={r.type} delay={i}>
                <div className="bg-white rounded-lg border border-slate-200 grid md:grid-cols-12 overflow-hidden">
                  {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
                  <img src={r.img} alt={r.type} className="md:col-span-4 w-full h-56 md:h-full object-cover" />
                  <div className="md:col-span-5 p-5 md:p-6 border-r border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">{r.type}</h3>
                    <p className="mt-1 text-sm text-slate-600">{r.blurb}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
                      <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-blue-700" /> Sleeps {r.sleeps}</div>
                      <div className="flex items-center gap-2"><Wifi className="w-4 h-4 text-blue-700" /> Free WiFi</div>
                      <div className="flex items-center gap-2"><Wind className="w-4 h-4 text-blue-700" /> Air conditioning</div>
                      <div className="flex items-center gap-2"><Tv className="w-4 h-4 text-blue-700" /> TV included</div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-5 md:p-6 bg-slate-50 flex flex-col justify-center items-start md:items-end">
                    <div className="text-xs text-slate-500">Per night, from</div>
                    <div className="text-3xl font-bold text-slate-900">€{r.price}</div>
                    <div className="text-xs text-slate-500 mb-3">Includes taxes</div>
                    <button className="w-full md:w-auto px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded">
                      Reserve <ChevronRight className="w-4 h-4 inline ml-1" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities grid — high info density */}
      <section id="amenities" className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Property Amenities</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
          {[
            ["Most Popular", ["Airport shuttle", "Non-smoking rooms", "Room service", "Free WiFi (11 Mbps)", "Family rooms", "24-hour front desk", "Bar"]],
            ["Front Desk Services", ["Invoice provided", "Private check-in/out", "Baggage storage", "Currency exchange", "Express check-in/out", "24-hour front desk"]],
            ["Food & Drink", ["Coffee house on site", "Wine/Champagne (extra)", "Snack bar", "Breakfast in the room", "Bar"]],
            ["Cleaning Services", ["Daily housekeeping", "Ironing service"]],
            ["Business", ["Business center", "Meeting/Banquet facilities"]],
            ["Safety & Security", ["24-hour security"]],
          ].map(([title, items], i) => (
            <Reveal key={title} delay={i % 3}>
              <div>
                <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">{title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {items.map(it => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Location</h2>
            <p className="mt-2 text-slate-700">{HOTEL.address}</p>
            <div className="mt-6 divide-y divide-slate-200 border border-slate-200 rounded-lg bg-white">
              {ATTRACTIONS.map(a => (
                <div key={a.name} className="flex items-center justify-between px-4 py-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-blue-700" />
                    <span className="text-slate-800">{a.name}</span>
                  </div>
                  <span className="text-slate-500">{a.dist}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
            <img src="https://picsum.photos/seed/vila57-tirana-corp/1400/900"
                 alt="Tirana map" className="w-full h-full min-h-[320px] rounded-lg object-cover border border-slate-200" />
          </Reveal>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-3 gap-8 text-sm">
        <Reveal>
          <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">Check-in / Check-out</h3>
          <p className="mt-3 text-slate-700">From 14:00 · Until 11:00 · Express check-in/out available · 24-hour front desk.</p>
        </Reveal>
        <Reveal delay={1}>
          <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">Pets & Parking</h3>
          <p className="mt-3 text-slate-700">Pets allowed on request — no extra charges. Parking is not available on site.</p>
        </Reveal>
        <Reveal delay={2}>
          <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2"><Languages className="w-4 h-4" /> Languages</h3>
          <p className="mt-3 text-slate-700">{LANGUAGES.join(", ")}</p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">V</div>
              <span className="text-white font-semibold">Hotel Vila 57</span>
            </div>
            <p className="mt-3 text-slate-400">{HOTEL.address}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Contact</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {HOTEL.phoneShort}</p>
            <p className="flex items-center gap-2 mt-1"><Mail className="w-4 h-4" /> {HOTEL.email}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">Information</p>
            <ul className="space-y-1">
              <li>Privacy Policy</li><li>Terms of Service</li><li>Accessibility</li><li>Sitemap</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Hotel Vila 57. All rights reserved.</p>
            <p>Distance data © OpenStreetMap.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  ROOT                                                               */
/* ================================================================== */
export default function App() {
  const [theme, setTheme] = useState("aman");

  return (
    <div className="min-h-screen">
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {theme === "aman" && <AmanTheme />}
          {theme === "standard" && <StandardTheme />}
          {theme === "onehotels" && <OneHotelsTheme />}
          {theme === "marriott" && <MarriottTheme />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
