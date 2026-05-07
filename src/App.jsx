/**
 * Hotel Vila 57 — Tirana, Albania
 * Single-page React site with EN / SQ language toggle.
 *
 * Design: Quiet-luxury (Aman) editorial layout × 1 Hotels' warm,
 * organic textures. Palette is ivory + warm terracotta + wood tones.
 * Typography: DM Serif Display + Inter.
 *
 * Hotel photos in /public/images come from the property's booking.com
 * listing: https://www.booking.com/hotel/al/vila-verde-economic.html
 */

import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  Wifi, Coffee, Bed, MapPin, Phone, Mail,
  Utensils, ShieldCheck, Tv, Wind, Languages, ArrowRight, Check,
  Users, Sparkles, ConciergeBell, Plane, ShoppingBag, Building2,
  Car, Instagram, Facebook, ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  i18n                                                               */
/* ------------------------------------------------------------------ */
const I18N = {
  en: {
    nav: {
      stay: "Stay", amenities: "Amenities", gallery: "Gallery",
      location: "Location", contact: "Contact", reserve: "Reserve a Stay",
    },
    hero: {
      badge: "A Boutique Stay in Tirana",
      title1: "Slow mornings.", title2: "Warm interiors.",
      title3: "A quieter Tirana.",
      sub: "A quiet boutique address in the heart of Tirana. Light-filled rooms, a panoramic terrace and easy access to Skanderbeg Square — designed for travellers who want the city without the noise.",
      reserveRoom: "Reserve a Room", viewRooms: "View Rooms",
    },
    stat: [
      { l: "Guest Rated" }, { l: "to Skanderbeg Square" },
      { l: "Front Desk" }, { l: "Languages Spoken" },
    ],
    about: {
      eyebrow: "The Property",
      title: "Comfort, distilled to its essentials.",
      p1: "Hotel Vila 57 is a small boutique stay tucked just off Rruga Kongresi i Manastirit. Every room is air-conditioned with a private bathroom, wardrobe and television — designed for travellers who care about the simple things done well.",
      p2: "Mornings begin in our coffee house and end at the bar or on the open-air terrace. A 24-hour front desk, daily housekeeping and an airport shuttle make the rest easy.",
      tags: ["Coffee House", "Free WiFi", "Family Rooms", "Bar & Snacks"],
    },
    rooms: {
      eyebrow: "Accommodations",
      title: "Three rooms, each with its own quiet character.",
      sub: "Linen-light interiors, warm wood tones and balconies opening over the city — choose the room that suits your trip.",
      sleeps: "Sleeps", reserve: "Reserve", from: "From", perNight: "/ night",
    },
    amenities: {
      eyebrow: "What's Included",
      title: "Thoughtful service, in every quiet detail.",
      groups: [
        {
          title: "Front Desk Services",
          items: ["24-hour front desk", "Express check-in/out", "Baggage storage", "Currency exchange", "Invoice provided"],
        },
        {
          title: "Food & Drink",
          items: ["Coffee house on site", "Bar & snack bar", "Breakfast in the room", "Wine & champagne (extra)"],
        },
        {
          title: "For Your Stay",
          items: ["Daily housekeeping", "Ironing service", "Pet-friendly (on request)", "Wake-up service", "Family rooms"],
        },
      ],
    },
    gallery: {
      eyebrow: "Life at Vila 57",
      title: "The small moments that make a stay.",
      sub: "Mornings at the coffee house, evenings at the bar, and the slow stretch of time in between.",
    },
    location: {
      eyebrow: "In the Neighborhood",
      title: "Steps from old Tirana, minutes from everywhere else.",
    },
    map: {
      eyebrow: "Find Us",
      title: "Drop a pin in the heart of Tirana.",
      address: "Address", frontDesk: "Front Desk",
      frontDeskValue: "Open 24 / 7",
      byNumbers: "By the Numbers",
      distances: "1.1 mi to Skanderbeg Square · 9.3 mi to TIA Airport",
      directions: "Get Directions",
    },
    contact: {
      eyebrow: "Reserve Your Stay",
      title: "Speak with us, anytime.",
      p: "Our front desk answers 24 hours a day. Reach out for reservations, shuttle pickup, or a quiet recommendation around Tirana.",
      call: "Call", email: "Email",
    },
    footer: {
      visit: "Visit",
      links: { rooms: "Rooms", amenities: "Amenities", gallery: "Gallery", neighborhood: "Neighborhood", map: "Map" },
      languages: "Languages",
      languagesList: ["English", "Albanian", "Italian", "German", "Greek", "Spanish"],
      copyright: "© 2026 Hotel Vila 57. All rights reserved.",
      location: "Tiranë, Albania",
    },
    rooms_data: [
      {
        type: "Standard Double with Balcony",
        blurb: "A bright, contemporary room with a queen bed, writing desk and a private balcony opening onto the city.",
        features: ["Private balcony", "City view", "Queen bed", "Air conditioning"],
      },
      {
        type: "Deluxe Twin Room",
        blurb: "Two single beds in a calm, light-filled room. Perfect for friends or business colleagues.",
        features: ["Two single beds", "En-suite bathroom", "Panoramic windows", "Workspace"],
      },
      {
        type: "Economy Triple Room",
        blurb: "A generous, family-friendly room with three beds, a wardrobe and en-suite bath.",
        features: ["Three single beds", "Family-friendly", "Wardrobe & TV", "Air conditioning"],
      },
    ],
    amenities_data: [
      "Free WiFi", "24-hour Front Desk", "Airport Shuttle", "Coffee House",
      "Bar & Snack Bar", "Family Rooms", "24-hour Security", "Air Conditioning",
      "TV in every room", "Minimarket", "Business Center", "Car Rental",
    ],
    attractions_data: [
      { name: "Skanderbeg Square", note: "City's main plaza" },
      { name: "Et'hem Bey Mosque", note: "Historic landmark" },
      { name: "Bunk'Art 2", note: "Cold-war museum" },
      { name: "Blloku District", note: "Cafés & nightlife" },
      { name: "National History Museum", note: "Albanian heritage" },
      { name: "Mother Teresa Airport", note: "TIA — direct shuttle" },
    ],
  },

  sq: {
    nav: {
      stay: "Dhomat", amenities: "Shërbimet", gallery: "Galeria",
      location: "Vendndodhja", contact: "Kontakt", reserve: "Rezervo",
    },
    hero: {
      badge: "Një Qëndrim Butik në Tiranë",
      title1: "Mëngjese të qeta.", title2: "Ambient i ngrohtë.",
      title3: "Një Tiranë më e qetë.",
      sub: "Një adresë butik e qetë në zemër të Tiranës. Dhoma plot dritë, një terrasë panoramike dhe akses i lehtë drejt Sheshit Skënderbej — krijuar për udhëtarët që e duan qytetin pa zhurmën.",
      reserveRoom: "Rezervo një Dhomë", viewRooms: "Shiko Dhomat",
    },
    stat: [
      { l: "Vlerësim mysafirësh" }, { l: "deri tek Sheshi Skënderbej" },
      { l: "Recepsion" }, { l: "Gjuhë të folura" },
    ],
    about: {
      eyebrow: "Prona",
      title: "Rehati, e thjeshtuar në thelbin e saj.",
      p1: "Hotel Vila 57 është një vendpushim i vogël butik pranë Rrugës Kongresi i Manastirit. Çdo dhomë ka kondicioner, banjë private, garderobë dhe televizor — e krijuar për udhëtarët që e vlerësojnë thjeshtësinë e bërë mirë.",
      p2: "Mëngjeset fillojnë në kafenenë tonë dhe mbarojnë në bar ose në terrasën në qiell të hapur. Recepsioni 24 orësh, pastrimi ditor dhe transporti për aeroportin e bëjnë të lehtë gjithçka tjetër.",
      tags: ["Kafene", "WiFi falas", "Dhoma familjare", "Bar & Snack"],
    },
    rooms: {
      eyebrow: "Akomodimi",
      title: "Tre dhoma, secila me karakterin e saj të qetë.",
      sub: "Ambient i ndriçuar, tone të ngrohta druri dhe ballkone që hapen mbi qytet — zgjidh dhomën që të përshtatet me udhëtimin tënd.",
      sleeps: "Për", reserve: "Rezervo", from: "Prej", perNight: "/ nata",
    },
    amenities: {
      eyebrow: "Çfarë Përfshihet",
      title: "Shërbim i kujdesshëm, në çdo detaj të qetë.",
      groups: [
        {
          title: "Shërbimet e Recepsionit",
          items: ["Recepsion 24 orësh", "Check-in/out i shpejtë", "Ruajtje bagazhi", "Këmbim valutor", "Faturë me kërkesë"],
        },
        {
          title: "Ushqim & Pije",
          items: ["Kafene në vend", "Bar & snack bar", "Mëngjes në dhomë", "Verë & shampanjë (ekstra)"],
        },
        {
          title: "Për Qëndrimin Tuaj",
          items: ["Pastrim ditor", "Shërbim hekurosjeje", "Pranohen kafshët (me kërkesë)", "Shërbim zgjimi", "Dhoma familjare"],
        },
      ],
    },
    gallery: {
      eyebrow: "Jeta në Vila 57",
      title: "Momentet e vogla që e bëjnë një qëndrim.",
      sub: "Mëngjeset në kafene, mbrëmjet në bar, dhe shtrirja e ngadaltë e kohës ndërmjet.",
    },
    location: {
      eyebrow: "Në Lagjen Tonë",
      title: "Disa hapa nga Tirana e vjetër, minuta nga gjithçka tjetër.",
    },
    map: {
      eyebrow: "Na Gjeni",
      title: "Vendos një pin në zemër të Tiranës.",
      address: "Adresa", frontDesk: "Recepsioni",
      frontDeskValue: "Hapur 24 / 7",
      byNumbers: "Në Numra",
      distances: "1.8 km nga Sheshi Skënderbej · 15 km nga Aeroporti TIA",
      directions: "Merr Drejtimet",
    },
    contact: {
      eyebrow: "Rezervo Qëndrimin Tënd",
      title: "Bisedo me ne, kurdoherë.",
      p: "Recepsioni ynë përgjigjet 24 orë në ditë. Na kontakto për rezervime, transport nga aeroporti, ose një rekomandim të qetë rreth Tiranës.",
      call: "Telefono", email: "Email",
    },
    footer: {
      visit: "Vizito",
      links: { rooms: "Dhomat", amenities: "Shërbimet", gallery: "Galeria", neighborhood: "Lagja", map: "Harta" },
      languages: "Gjuhët",
      languagesList: ["Anglisht", "Shqip", "Italisht", "Gjermanisht", "Greqisht", "Spanjisht"],
      copyright: "© 2026 Hotel Vila 57. Të gjitha të drejtat e rezervuara.",
      location: "Tiranë, Shqipëri",
    },
    rooms_data: [
      {
        type: "Dhomë Dyshe me Ballkon",
        blurb: "Dhomë e ndritshme dhe bashkëkohore me krevat queen, tavolinë pune dhe një ballkon privat që hapet drejt qytetit.",
        features: ["Ballkon privat", "Pamje qyteti", "Krevat queen", "Kondicioner"],
      },
      {
        type: "Dhomë Twin Deluxe",
        blurb: "Dy krevate teke në një dhomë të qetë, plot dritë. Ideale për shoqëri ose kolegë biznesi.",
        features: ["Dy krevate teke", "Banjë private", "Dritare panoramike", "Hapësirë pune"],
      },
      {
        type: "Dhomë Treshe Ekonomike",
        blurb: "Dhomë e gjerë dhe miqësore për familjen me tre krevate, garderobë dhe banjë private.",
        features: ["Tre krevate teke", "Për familje", "Garderobë & TV", "Kondicioner"],
      },
    ],
    amenities_data: [
      "WiFi falas", "Recepsion 24 orësh", "Transport Aeroporti", "Kafene",
      "Bar & Snack", "Dhoma Familjare", "Sigurim 24 orësh", "Kondicioner",
      "TV në çdo dhomë", "Minimarket", "Qendër Biznesi", "Qira Makinash",
    ],
    attractions_data: [
      { name: "Sheshi Skënderbej", note: "Sheshi kryesor i qytetit" },
      { name: "Xhamia e Et'hem Beut", note: "Pikë historike" },
      { name: "Bunk'Art 2", note: "Muze i Luftës së Ftohtë" },
      { name: "Blloku", note: "Kafene & jetë nate" },
      { name: "Muzeu Historik Kombëtar", note: "Trashëgimia shqiptare" },
      { name: "Aeroporti Nënë Tereza", note: "TIA — transport direkt" },
    ],
  },
};

const LangContext = createContext({ lang: "en", setLang: () => {} });
const useLang = () => useContext(LangContext);
const useT = () => I18N[useLang().lang];

/* ------------------------------------------------------------------ */
/*  HOTEL CONSTANTS (language-independent)                             */
/* ------------------------------------------------------------------ */
const HOTEL = {
  name: "Hotel Vila 57",
  address: "Rruga Kongresi i Manastirit Nr 57, Tiranë 1001, Albania",
  phoneShort: "+355 4 000 0057",
  email: "stay@vila57.al",
  facebook: "https://www.facebook.com/hotelvilaverde/",
  instagram: "https://www.instagram.com/vila__57/",
  rating: 8.2,
};

const ROOM_META = [
  { sleeps: 2, sizeM2: 22, price: 49, img: "/images/835853782.jpg" },
  { sleeps: 2, sizeM2: 24, price: 59, img: "/images/553067845.jpg" },
  { sleeps: 3, sizeM2: 28, price: 69, img: "/images/835184929.jpg" },
];

const AMENITY_ICONS = [
  Wifi, ConciergeBell, Plane, Coffee,
  Utensils, Users, ShieldCheck, Wind,
  Tv, ShoppingBag, Building2, Car,
];

const ATTRACTION_DIST = ["1.1 mi", "1.2 mi", "1.3 mi", "1.5 mi", "1.2 mi", "9.3 mi"];

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
/*  LANG SWITCHER                                                      */
/* ------------------------------------------------------------------ */
function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-stone-300 bg-white/70 backdrop-blur p-0.5 text-xs">
      {["en", "sq"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-full uppercase tracking-widest transition ${
            lang === code
              ? "bg-stone-900 text-white"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NAV                                                                */
/* ------------------------------------------------------------------ */
function Nav() {
  const t = useT();
  return (
    <header className="sticky top-0 z-40 bg-[#faf6f0]/85 backdrop-blur-md border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-2 shrink-0">
          <span
            className="text-2xl text-stone-900"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Vila 57
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-stone-500 hidden sm:inline">
            Tirana
          </span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-stone-700">
          <a href="#stay" className="hover:text-[#b25c3a] transition">{t.nav.stay}</a>
          <a href="#amenities" className="hover:text-[#b25c3a] transition">{t.nav.amenities}</a>
          <a href="#gallery" className="hover:text-[#b25c3a] transition">{t.nav.gallery}</a>
          <a href="#location" className="hover:text-[#b25c3a] transition">{t.nav.location}</a>
          <a href="#contact" className="hover:text-[#b25c3a] transition">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <LangSwitcher />
          <a
            href="#book"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-stone-900 transition shadow-sm"
          >
            {t.nav.reserve}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0">
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
            <Sparkles className="w-3 h-3 text-[#b25c3a]" /> {t.hero.badge}
          </span>
          <h1
            className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] max-w-4xl"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            {t.hero.title1}<br />
            {t.hero.title2}<br />
            <span className="italic text-[#f4dac6]">{t.hero.title3}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-stone-100 leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#book"
              className="px-7 py-3.5 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-[#8a4628] transition flex items-center gap-2"
            >
              {t.hero.reserveRoom} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#stay"
              className="px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-stone-900 text-sm font-medium transition"
            >
              {t.hero.viewRooms}
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
  const t = useT();
  const numbers = [`${HOTEL.rating}/10`, "1.1 mi", "24 / 7", "6"];
  return (
    <section className="border-y border-stone-200 bg-[#f0e9dd]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {t.stat.map((s, i) => (
          <Reveal key={s.l}>
            <div
              className="text-3xl md:text-4xl text-stone-900"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {numbers[i]}
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
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */
function About() {
  const t = useT();
  const tagIcons = [Coffee, Wifi, Bed, Utensils];
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-5">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">{t.about.eyebrow}</span>
        <h2
          className="mt-4 text-4xl md:text-5xl text-stone-900 leading-[1.1]"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          {t.about.title}
        </h2>
        <p className="mt-6 text-stone-600 leading-relaxed">{t.about.p1}</p>
        <p className="mt-4 text-stone-600 leading-relaxed">{t.about.p2}</p>
        <div className="mt-8 grid grid-cols-2 gap-y-4 text-sm text-stone-700">
          {t.about.tags.map((tag, i) => {
            const Icon = tagIcons[i];
            return (
              <div key={tag} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#b25c3a]" /> {tag}
              </div>
            );
          })}
        </div>
      </Reveal>
      <Reveal delay={1} className="lg:col-span-7 grid grid-cols-2 gap-4">
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
  const t = useT();
  return (
    <section id="stay" className="bg-[#f0e9dd] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">{t.rooms.eyebrow}</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-stone-900"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {t.rooms.title}
            </h2>
          </div>
          <p className="max-w-md text-stone-600">{t.rooms.sub}</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.rooms_data.map((r, i) => {
            const meta = ROOM_META[i];
            return (
              <Reveal key={r.type} delay={i}>
                <article className="group bg-white rounded-3xl overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow">
                  <div className="overflow-hidden">
                    <img
                      src={meta.img}
                      alt={r.type}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#b25c3a]">
                      <span>{t.rooms.sleeps} {meta.sleeps}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span>{meta.sizeM2} m²</span>
                    </div>
                    <h3
                      className="mt-3 text-2xl text-stone-900 leading-tight"
                      style={{ fontFamily: '"DM Serif Display", serif' }}
                    >
                      {r.type}
                    </h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">{r.blurb}</p>
                    <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-stone-700">
                      {r.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#b25c3a]" /> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 pt-5 border-t border-stone-200 flex items-end justify-between mt-auto">
                      <div>
                        <span className="text-xs text-stone-500 block">{t.rooms.from}</span>
                        <span
                          className="text-2xl text-stone-900"
                          style={{ fontFamily: '"DM Serif Display", serif' }}
                        >
                          €{meta.price}
                        </span>
                        <span className="text-xs text-stone-500 ml-1">{t.rooms.perNight}</span>
                      </div>
                      <a
                        href="#book"
                        className="text-sm text-[#b25c3a] font-medium flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        {t.rooms.reserve} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  AMENITIES                                                          */
/* ------------------------------------------------------------------ */
function Amenities() {
  const t = useT();
  return (
    <section id="amenities" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">{t.amenities.eyebrow}</span>
        <h2
          className="mt-3 text-4xl md:text-5xl text-stone-900 max-w-2xl"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          {t.amenities.title}
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {t.amenities_data.map((label, i) => {
          const Icon = AMENITY_ICONS[i];
          return (
            <Reveal key={label} delay={i % 4}>
              <div className="rounded-2xl bg-white border border-stone-200 p-5 flex items-center gap-4 hover:border-[#b25c3a]/40 hover:shadow-sm transition">
                <div className="w-11 h-11 rounded-xl bg-[#f4dac6] flex items-center justify-center text-[#b25c3a] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-stone-800">{label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={2} className="mt-16 grid lg:grid-cols-3 gap-6">
        {t.amenities.groups.map((g) => (
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
  { src: "/images/215276144.jpg", alt: "Breakfast", h: "row-span-2" },
  { src: "/images/713692504.jpg", alt: "Cappuccino and pastry" },
  { src: "/images/51571422.jpg", alt: "Wine glasses at the bar" },
  { src: "/images/283955638.jpg", alt: "Reception lobby" },
  { src: "/images/51455605.jpg", alt: "Lounge in the bar caffe" },
  { src: "/images/194347459.jpg", alt: "Champagne in an ice bucket" },
];

function Gallery() {
  const t = useT();
  return (
    <section id="gallery" className="bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">{t.gallery.eyebrow}</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-stone-900 max-w-2xl"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-md text-stone-600">{t.gallery.sub}</p>
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
/*  LOCATION                                                           */
/* ------------------------------------------------------------------ */
function Location() {
  const t = useT();
  return (
    <section id="location" className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[#f4dac6]">{t.location.eyebrow}</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-white leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            {t.location.title}
          </h2>
          <p className="mt-5 text-stone-300 max-w-md">{HOTEL.address}</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {t.attractions_data.map((a, i) => (
              <div
                key={a.name}
                className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-4"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[#f4dac6] min-w-[60px]">
                  {ATTRACTION_DIST[i]}
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
/*  GOOGLE MAPS                                                        */
/* ------------------------------------------------------------------ */
function MapSection() {
  const t = useT();
  const query = encodeURIComponent("Hotel Vila 57, Rruga Kongresi i Manastirit 57, Tiranë 1001, Albania");
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  const embed = `https://www.google.com/maps?q=${query}&z=16&output=embed`;

  return (
    <section id="map" className="bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-[#b25c3a]">{t.map.eyebrow}</span>
          <h2
            className="mt-3 text-4xl md:text-5xl text-stone-900 leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            {t.map.title}
          </h2>

          <div className="mt-8 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{t.map.address}</div>
              <p className="mt-1 text-stone-800">{HOTEL.address}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{t.map.frontDesk}</div>
              <p className="mt-1 text-stone-800">{t.map.frontDeskValue} · {HOTEL.phoneShort}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">{t.map.byNumbers}</div>
              <p className="mt-1 text-stone-800">{t.map.distances}</p>
            </div>
          </div>

          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b25c3a] text-white text-sm font-medium hover:bg-stone-900 transition shadow-sm"
          >
            {t.map.directions} <ArrowUpRight className="w-4 h-4" />
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
  const t = useT();
  return (
    <footer id="contact" className="bg-[#1f1a17] text-stone-300">
      <div id="book" className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12">
        <Reveal className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#f4dac6]">{t.contact.eyebrow}</span>
            <h2
              className="mt-3 text-4xl md:text-5xl text-white leading-[1.1]"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              {t.contact.title}
            </h2>
            <p className="mt-5 text-stone-400 max-w-md">{t.contact.p}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`tel:${HOTEL.phoneShort.replace(/\s/g, "")}`}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition"
            >
              <Phone className="w-5 h-5 text-[#f4dac6]" />
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-3">{t.contact.call}</div>
              <div className="text-white mt-1">{HOTEL.phoneShort}</div>
            </a>
            <a
              href={`mailto:${HOTEL.email}`}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition"
            >
              <Mail className="w-5 h-5 text-[#f4dac6]" />
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500 mt-3">{t.contact.email}</div>
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
            <p className="text-[#f4dac6] uppercase tracking-[0.2em] text-xs mb-3">{t.footer.visit}</p>
            <ul className="space-y-1.5">
              <li><a href="#stay">{t.footer.links.rooms}</a></li>
              <li><a href="#amenities">{t.footer.links.amenities}</a></li>
              <li><a href="#gallery">{t.footer.links.gallery}</a></li>
              <li><a href="#location">{t.footer.links.neighborhood}</a></li>
              <li><a href="#map">{t.footer.links.map}</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[#f4dac6] uppercase tracking-[0.2em] text-xs mb-3 flex items-center gap-2">
              <Languages className="w-3.5 h-3.5" /> {t.footer.languages}
            </p>
            <p className="text-stone-300 leading-relaxed">{t.footer.languagesList.join(" · ")}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.location}</p>
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
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div
        lang={lang}
        className="min-h-screen bg-[#faf6f0] text-stone-800"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
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
    </LangContext.Provider>
  );
}
