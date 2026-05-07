/**
 * Hotel Vila 57 — Tirana, Albania
 * Single-page React site.
 *
 * Design: Quiet-luxury (Aman) editorial layout × 1 Hotels' warm,
 * organic textures. Palette is ivory + warm terracotta + wood tones
 * (no green). Typography: DM Serif Display + Inter.
 *
 * Image tags use stable picsum.photos seeds as placeholders. The
 * hotel's real photo source is referenced in code comments next to
 * each <img>, e.g.:
 *   // https://www.booking.com/hotel/al/vila-verde-economic.html
 */

import React from "react";
import { motion } from "framer-motion";
import {
  Wifi, Coffee, Bed, MapPin, Phone, Mail, Star, Calendar,
  Utensils, ShieldCheck, Tv, Wind, Languages, ArrowRight, Check,
  Users, Sparkles, ConciergeBell, Plane, ShoppingBag, Building2,
  Car, Instagram, Facebook, ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  HOTEL DATA                                                         */
/* ------------------------------------------------------------------ */
const HOTEL = {
  name: "Hotel Vila 57",
  tagline: "A quiet boutique address in the heart of Tirana.",
  address: "Rruga Kongresi i Manastirit Nr 57, Tiranë 1001, Albania",
  phoneShort: "+355 4 000 0057",
  email: "stay@vila57.al",
  facebook: "https://www.facebook.com/hotelvilaverde/",
  instagram: "https://www.instagram.com/vila__57/",
  rating: 8.2,
  reviewCount: 342,
};

const ROOMS = [
  {
    type: "Standard Double with Balcony",
    blurb:
      "A bright, contemporary room with a queen bed, writing desk and a private balcony opening onto the city.",
    sleeps: 2,
    sizeM2: 22,
    price: 49,
    features: ["Private balcony", "City view", "Queen bed", "Air conditioning"],
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "/images/835853782.jpg",
  },
  {
    type: "Deluxe Twin Room",
    blurb:
      "Two single beds in a calm, light-filled room. Perfect for friends or business colleagues.",
    sleeps: 2,
    sizeM2: 24,
    price: 59,
    features: ["Two single beds", "En-suite bathroom", "Panoramic windows", "Workspace"],
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "/images/553067845.jpg",
  },
  {
    type: "Economy Triple Room",
    blurb:
      "A generous, family-friendly room with three beds, a wardrobe and en-suite bath.",
    sleeps: 3,
    sizeM2: 28,
    price: 69,
    features: ["Three single beds", "Family-friendly", "Wardrobe & TV", "Air conditioning"],
    // https://www.booking.com/hotel/al/vila-verde-economic.html
    img: "/images/835184929.jpg",
  },
];

const AMENITIES = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: ConciergeBell, label: "24-hour Front Desk" },
  { icon: Plane, label: "Airport Shuttle" },
  { icon: Coffee, label: "Coffee House" },
  { icon: Utensils, label: "Bar & Snack Bar" },
  { icon: Users, label: "Family Rooms" },
  { icon: ShieldCheck, label: "24-hour Security" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "TV in every room" },
  { icon: ShoppingBag, label: "Minimarket" },
  { icon: Building2, label: "Business Center" },
  { icon: Car, label: "Car Rental" },
];

const ATTRACTIONS = [
  { name: "Skanderbeg Square", dist: "1.1 mi", note: "City's main plaza" },
  { name: "Et'hem Bey Mosque", dist: "1.2 mi", note: "Historic landmark" },
  { name: "Bunk'Art 2", dist: "1.3 mi", note: "Cold-war museum" },
  { name: "Blloku District", dist: "1.5 mi", note: "Cafés & nightlife" },
  { name: "National History Museum", dist: "1.2 mi", note: "Albanian heritage" },
  { name: "Mother Teresa Airport", dist: "9.3 mi", note: "TIA — direct shuttle" },
];

const LANGUAGES = ["English", "Albanian", "Italian", "German", "Greek", "Spanish"];

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPER                                                   */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => (
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
/*  NAV                                                                */
/* ------------------------------------------------------------------ */
function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-[#faf6f0]/85 backdrop-blur-md border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className="text-2xl text-stone-900"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Vila 57
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-500">
            Tirana
          </span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-stone-700">
          <a href="#stay" className="hover:text-[#b25c3a] transition">Stay</a>
          <a href="#amenities" className="hover:text-[#b25c3a] transition">Amenities</a>
          <a href="#gallery" className="hover:text-[#b25c3a] transition">Gallery</a>
          <a href="#location" className="hover:text-[#b25c3a] transition">Location</a>
          <a href="#contact" className="hover:text-[#b25c3a] transition">Contact</a>
        </nav>
        <a
          href="#book"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-stone-900 transition shadow-sm"
        >
          Reserve a Stay
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0">
        {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
          alt="Mountain landscape at dawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/10 to-[#faf6f0]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-44 lg:pt-44 lg:pb-56">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[11px] uppercase tracking-[0.25em] text-stone-700 border border-white">
            <Sparkles className="w-3 h-3 text-[#b25c3a]" /> A Boutique Stay in Tirana
          </span>
          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] max-w-4xl"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Slow mornings.<br />
            Warm interiors.<br />
            <span className="italic text-[#f4dac6]">A quieter Tirana.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-stone-100 leading-relaxed">
            {HOTEL.tagline} Light-filled rooms, a panoramic terrace and easy access to
            Skanderbeg Square — designed for travellers who want the city without the noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#book"
              className="px-7 py-3.5 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-[#8a4628] transition flex items-center gap-2"
            >
              Reserve a Room <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#stay"
              className="px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-stone-900 text-sm font-medium transition"
            >
              View Rooms
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STAT BAND                                                          */
/* ------------------------------------------------------------------ */
function StatBand() {
  return (
    <section className="border-y border-stone-200 bg-[#f0e9dd]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { n: `${HOTEL.rating}/10`, l: "Guest Rated" },
          { n: "1.1 mi", l: "to Skanderbeg Square" },
          { n: "24 / 7", l: "Front Desk" },
          { n: "6", l: "Languages Spoken" },
        ].map((s) => (
          <Reveal key={s.l}>
            <div
              className="text-3xl md:text-4xl text-stone-900"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {s.n}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-2">
              {s.l}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT / STORY                                                      */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-5">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">The Property</span>
        <h2
          className="mt-4 text-4xl md:text-5xl text-stone-900 leading-[1.1]"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Comfort, distilled to its essentials.
        </h2>
        <p className="mt-6 text-stone-600 leading-relaxed">
          Hotel Vila 57 is a small boutique stay tucked just off Rruga Kongresi i Manastirit.
          Every room is air-conditioned with a private bathroom, wardrobe and television —
          designed for travellers who care about the simple things done well.
        </p>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Mornings begin in our coffee house and end at the bar or on the open-air terrace.
          A 24-hour front desk, daily housekeeping and an airport shuttle make the rest easy.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-y-4 text-sm text-stone-700">
          <div className="flex items-center gap-3"><Coffee className="w-4 h-4 text-[#b25c3a]" /> Coffee House</div>
          <div className="flex items-center gap-3"><Wifi className="w-4 h-4 text-[#b25c3a]" /> Free WiFi</div>
          <div className="flex items-center gap-3"><Bed className="w-4 h-4 text-[#b25c3a]" /> Family Rooms</div>
          <div className="flex items-center gap-3"><Utensils className="w-4 h-4 text-[#b25c3a]" /> Bar & Snacks</div>
        </div>
      </Reveal>
      <Reveal delay={1} className="lg:col-span-7 grid grid-cols-2 gap-4">
        {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
        <img
          src="/images/51455577.jpg"
          alt="The bar and lounge at Hotel Vila 57"
          className="w-full h-[28rem] object-cover rounded-2xl"
        />
        <img
          src="/images/245720167.jpg"
          alt="Espresso pulling from the on-site coffee house"
          className="w-full h-[28rem] object-cover rounded-2xl mt-12"
        />
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ROOMS                                                              */
/* ------------------------------------------------------------------ */
function Rooms() {
  return (
    <section id="stay" className="bg-[#f0e9dd] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">Accommodations</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-stone-900"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Three rooms, each with its own quiet character.
            </h2>
          </div>
          <p className="max-w-md text-stone-600">
            Linen-light interiors, warm wood tones and balconies opening over the city —
            choose the room that suits your trip.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {ROOMS.map((r, i) => (
            <Reveal key={r.type} delay={i}>
              <article className="group bg-white rounded-3xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow">
                <div className="overflow-hidden">
                  {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
                  <img
                    src={r.img}
                    alt={r.type}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#b25c3a]">
                    <span>Sleeps {r.sleeps}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{r.sizeM2} m²</span>
                  </div>
                  <h3
                    className="mt-3 text-2xl text-stone-900 leading-tight"
                    style={{ fontFamily: '"DM Serif Display", serif' }}
                  >
                    {r.type}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{r.blurb}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-stone-700">
                    {r.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#b25c3a]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 pt-5 border-t border-stone-200 flex items-end justify-between mt-auto">
                    <div>
                      <span className="text-xs text-stone-500 block">From</span>
                      <span
                        className="text-2xl text-stone-900"
                        style={{ fontFamily: '"DM Serif Display", serif' }}
                      >
                        €{r.price}
                      </span>
                      <span className="text-xs text-stone-500 ml-1">/ night</span>
                    </div>
                    <a
                      href="#book"
                      className="text-sm text-[#b25c3a] font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Reserve <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  AMENITIES                                                          */
/* ------------------------------------------------------------------ */
function Amenities() {
  return (
    <section id="amenities" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">What's Included</span>
        <h2
          className="mt-3 text-4xl md:text-5xl text-stone-900 max-w-2xl"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Thoughtful service, in every quiet detail.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {AMENITIES.map((a, i) => {
          const Icon = a.icon;
          return (
            <Reveal key={a.label} delay={i % 4}>
              <div className="rounded-2xl bg-white border border-stone-200 p-5 flex items-center gap-4 hover:border-[#b25c3a]/40 hover:shadow-sm transition">
                <div className="w-11 h-11 rounded-xl bg-[#f4dac6] flex items-center justify-center text-[#b25c3a] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-stone-800">{a.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={2} className="mt-16 grid lg:grid-cols-3 gap-6">
        {[
          { title: "Front Desk Services", items: ["24-hour front desk", "Express check-in/out", "Baggage storage", "Currency exchange", "Invoice provided"] },
          { title: "Food & Drink", items: ["Coffee house on site", "Bar & snack bar", "Breakfast in the room", "Wine & champagne (extra)"] },
          { title: "For Your Stay", items: ["Daily housekeeping", "Ironing service", "Pet-friendly (on request)", "Wake-up service", "Family rooms"] },
        ].map((g) => (
          <div key={g.title} className="bg-[#f0e9dd] rounded-3xl p-7">
            <h3
              className="text-xl text-stone-900"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#b25c3a] mt-0.5 shrink-0" /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GALLERY                                                            */
/* ------------------------------------------------------------------ */
const GALLERY = [
  { src: "/images/215276144.jpg", alt: "Breakfast spread with croissants and fresh juices", h: "row-span-2" },
  { src: "/images/713692504.jpg", alt: "Cappuccino and pastry from the coffee house" },
  { src: "/images/51571422.jpg", alt: "Wine glasses hanging at the bar" },
  { src: "/images/283955638.jpg", alt: "Vila 57 reception lobby with framed art" },
  { src: "/images/51455605.jpg", alt: "The leather lounge in the bar caffe" },
  { src: "/images/194347459.jpg", alt: "Champagne in an ice bucket" },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">Life at Vila 57</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-stone-900 max-w-2xl"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              The small moments that make a stay.
            </h2>
          </div>
          <p className="max-w-md text-stone-600">
            Mornings at the coffee house, evenings at the bar, and the slow stretch of time in
            between.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[14rem] md:auto-rows-[16rem] gap-4">
          {GALLERY.map((g, i) => (
            <Reveal
              key={g.src}
              delay={i % 3}
              className={`overflow-hidden rounded-2xl ${g.h || ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  LOCATION + ATTRACTIONS                                             */
/* ------------------------------------------------------------------ */
function Location() {
  return (
    <section id="location" className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[#f4dac6]">In the Neighborhood</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Steps from old Tirana, minutes from everywhere else.
          </h2>
          <p className="mt-5 text-stone-300 max-w-md">{HOTEL.address}</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {ATTRACTIONS.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[#f4dac6] min-w-[60px]">
                  {a.dist}
                </div>
                <div>
                  <div className="text-white text-sm">{a.name}</div>
                  <div className="text-xs text-stone-400">{a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={1}>
          {/* https://www.booking.com/hotel/al/vila-verde-economic.html */}
          <img
            src="/images/364625410.jpg"
            alt="Hotel Vila 57 facade on Rruga Kongresi i Manastirit"
            className="w-full h-[60vh] rounded-3xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  GOOGLE MAPS PIN                                                    */
/* ------------------------------------------------------------------ */
function MapSection() {
  const query = encodeURIComponent("Hotel Vila 57, Rruga Kongresi i Manastirit 57, Tiranë 1001, Albania");
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  const embed = `https://www.google.com/maps?q=${query}&z=16&output=embed`;

  return (
    <section id="map" className="bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">Find Us</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-stone-900 leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Drop a pin in the heart of Tirana.
          </h2>

          <div className="mt-8 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Address</div>
              <p className="mt-1 text-stone-800">{HOTEL.address}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">Front Desk</div>
              <p className="mt-1 text-stone-800">Open 24 / 7 · {HOTEL.phoneShort}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">By the Numbers</div>
              <p className="mt-1 text-stone-800">1.1 mi to Skanderbeg Square · 9.3 mi to TIA Airport</p>
            </div>
          </div>

          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-stone-900 transition shadow-sm"
          >
            Get Directions <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>

        <Reveal delay={1} className="h-full">
          <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[380px]">
            <iframe
              title="Hotel Vila 57 location on Google Maps"
              src={embed}
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT + FOOTER                                                   */
/* ------------------------------------------------------------------ */
function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#1f1a17] text-stone-300">
      <div id="book" className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12">
        <Reveal className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#f4dac6]">Reserve Your Stay</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-white leading-[1.1]"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Speak with us, anytime.
            </h2>
            <p className="mt-5 text-stone-400 max-w-md">
              Our front desk answers 24 hours a day. Reach out for reservations,
              shuttle pickup, or a quiet recommendation around Tirana.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`tel:${HOTEL.phoneShort.replace(/\s/g, "")}`}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition"
            >
              <Phone className="w-5 h-5 text-[#f4dac6]" />
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-3">Call</div>
              <div className="text-white mt-1">{HOTEL.phoneShort}</div>
            </a>
            <a
              href={`mailto:${HOTEL.email}`}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition"
            >
              <Mail className="w-5 h-5 text-[#f4dac6]" />
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-3">Email</div>
              <div className="text-white mt-1">{HOTEL.email}</div>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-4 gap-10 text-sm">
          <div className="md:col-span-2">
            <div
              className="text-2xl text-white"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Hotel Vila 57
            </div>
            <p className="mt-3 text-stone-400 max-w-sm">{HOTEL.address}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={HOTEL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#b25c3a] flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={HOTEL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#b25c3a] flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-[#f4dac6] uppercase tracking-[0.2em] text-xs mb-3">Visit</p>
            <ul className="space-y-1.5">
              <li><a href="#stay">Rooms</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Neighborhood</a></li>
              <li><a href="#map">Map</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[#f4dac6] uppercase tracking-[0.2em] text-xs mb-3 flex items-center gap-2">
              <Languages className="w-3.5 h-3.5" /> Languages
            </p>
            <p className="text-stone-300 leading-relaxed">{LANGUAGES.join(" · ")}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p>© 2026 Hotel Vila 57. All rights reserved.</p>
            <p>Tiranë, Albania</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  ROOT                                                               */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-stone-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Nav />
      <Hero />
      <StatBand />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Location />
      <MapSection />
      <ContactFooter />
    </div>
  );
}
