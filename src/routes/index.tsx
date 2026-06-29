import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Phone,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  X,
  ChevronDown,
  ShieldCheck,
  Clock,
  Wrench,
  Layers,
  Shield,
  Play,
  Mail,
} from "lucide-react";
import chatgptImg from "@/assets/ChatGPT_Image_Jun_25__2026__10_33_08_PM-removebg-preview.png";
import geminiImg from "@/assets/Gemini_Generated_Image_a4ew3wa4ew3wa4ew-removebg-preview.png";
import serviceImg1 from "@/assets/image-removebg-preview.png";
import serviceImg2 from "@/assets/image-removebg-preview (1).png";
import serviceImg3 from "@/assets/image-removebg-preview (2).png";
import serviceImg4 from "@/assets/image-removebg-preview (3).png";
import serviceImg5 from "@/assets/image-removebg-preview (4).png";
import acImg from "@/assets/air conditioner.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Appliances Repair and Service — Appliance Repair Experts" },
      {
        name: "description",
        content:
          "Fast, reliable repair for washing machines, refrigerators, ovens, stoves, generators and more — same-day service and 24/7 emergency support.",
      },
      { property: "og:title", content: "Home Appliances Repair and Service" },
      {
        property: "og:description",
        content:
          "Trusted repair for washing machines, refrigerators, ovens, stoves and generators.",
      },
    ],
  }),
  component: Index,
});

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-secondary/60 text-xs uppercase tracking-widest text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}

function Bolt({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function Index() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isFloatingSocialsOpen, setIsFloatingSocialsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Certified & Experienced Technicians",
      icon: ShieldCheck,
      description:
        "Our technicians are fully certified, background-checked, and insured. They undergo regular training to troubleshoot and fix everything from vintage ranges to the newest smart appliances with digital control panels.",
    },
    {
      title: "24/7 Emergency Appliance Support",
      icon: Clock,
      description:
        "A warm freezer or leaky washer can't wait. We provide 24/7 priority emergency response to ensure your home runs smoothly. Live dispatchers are online right now to schedule immediate help.",
    },
    {
      title: "Advanced Tools & Modern Technology",
      icon: Wrench,
      description:
        "We utilize state-of-the-art diagnostic sensors, voltage meters, and thermal imaging to precisely isolate appliance system faults, leading to extremely fast, reliable fixes without guesswork.",
    },
    {
      title: "All Major Brands & Models",
      icon: Layers,
      description:
        "We are factory authorized and parts-stocked for all major brands—including Samsung, Whirlpool, LG, Maytag, Bosch, KitchenAid, Frigidaire, Generac, and premium luxury brands.",
    },
    {
      title: "Up-Front Pricing & Repair Warranty",
      icon: Shield,
      description:
        "We offer transparent flat-rate repair quotes up front. We back our elite standard of service with a solid 90-day parts and labor warranty, meaning you never pay twice for the same issue.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SVG filter to remove white fringing on images with imperfect background removal */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="remove-white-fringe" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="erode" radius="2" result="alphaErode" />
          <feComposite in="SourceGraphic" in2="alphaErode" operator="in" />
        </filter>
      </svg>
      {/* Nav */}
      <header className="border-b border-white/5 relative z-50">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-base sm:text-xl font-bold text-primary shrink-0 tracking-tight">
            <Bolt className="h-6 w-6 shrink-0" /> Home Appliances Repair & Service
          </div>
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 text-sm font-medium">
            {["Home", "About Us", "Services", "Projects", "Blog", "Pages", "Contact Us"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  {l}
                </a>
              ),
            )}
          </div>
          <div className="shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              GET FREE QUOTE <Arrow className="h-3 w-3" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-visible bg-[#153320] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-20 pb-10 lg:grid-cols-2 relative z-10">
          <div className="z-20">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1e452c] border border-[#FFB800]/20 px-4 py-2 text-sm text-white font-medium">
              <Bolt className="h-4 w-4 text-[#FFB800]" /> Professional Appliance Repair
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-5xl font-extrabold leading-[1.2] tracking-tight md:text-6xl text-white">
              Your <span className="text-[#FFB800]">Trusted Experts</span> for All{" "}
              <br className="hidden md:block" />
              Appliance Repairs
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-lg text-white/90 font-medium">
              We provide fast, reliable, and efficient appliance solutions—from washing machines,
              ovens, and stoves to generators, coffee machines, and more.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#"
                className="inline-flex h-14 items-center gap-4 rounded-full bg-[#FFB800] pl-6 pr-2 text-sm font-bold text-black hover:bg-[#FFB800]/90 transition-colors"
              >
                GET FREE QUOTE
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#153320] text-white">
                  <Arrow className="h-4 w-4 rotate-45" />
                </div>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex h-14 items-center gap-3 rounded-full border border-[#6B7280] bg-[#1a3a24] pr-6 pl-2 text-sm font-bold text-[#FFB800] hover:bg-[#1a3a24]/80 transition-colors cursor-pointer"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#FFB800] text-black">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                WATCH VIDEO
              </button>
            </div>
          </div>

          <div className="relative lg:static flex justify-center lg:justify-end mt-10 lg:mt-0 z-10">
            {/* Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-transparent via-[#FFB800]/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto z-10 px-4 sm:px-0">
              {/* ChatGPT Image */}
              <div className="relative z-10 drop-shadow-2xl">
                <div style={{ filter: "url(#remove-white-fringe)" }}>
                  <img
                    src={chatgptImg}
                    alt="Certified appliance technician"
                    className="w-full h-auto object-contain [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                  />
                </div>
              </div>

              {/* Floating Badge 1 - Positioned in the upper-left free space */}
              <div className="absolute top-[12%] -left-4 sm:-left-12 lg:-left-24 rounded-full bg-[#112a1a]/95 px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white whitespace-nowrap transition-transform hover:scale-105 duration-300">
                <Check className="h-4 w-4 text-[#FFB800]" /> Free Appliance Diagnostic
              </div>

              {/* Floating Badge 2 - Positioned in the lower-left free space */}
              <div className="absolute bottom-[15%] -left-8 sm:-left-20 lg:-left-36 rounded-full bg-[#112a1a]/95 px-4 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(255,184,0,0.15)] z-20 flex items-center gap-2 border border-[#FFB800]/20 text-white whitespace-nowrap transition-transform hover:scale-105 duration-300">
                <Check className="h-4 w-4 text-[#FFB800]" /> Book a Service Instantly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl h-[350px] sm:h-[450px] lg:h-full min-h-[350px] sm:min-h-[450px] bg-[#0c1f13]">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFB800]/20 blur-3xl rounded-full z-0 transition-transform duration-700 group-hover:scale-110 pointer-events-none"></div>

            <img
              src={geminiImg}
              alt="Certified appliance technician diagnosing equipment"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105 z-10"
              style={{ filter: "url(#remove-white-fringe)" }}
            />
            {/* Elegant overlay gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2114]/90 via-[#0e2114]/25 to-transparent transition-opacity duration-300 group-hover:opacity-95 z-20 pointer-events-none" />

            {/* Premium Floating Stat Badge */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#112a1a]/90 p-5 sm:p-6 rounded-2xl border border-white/10 text-white shadow-xl flex items-center justify-between gap-4 z-30">
              <div>
                <div className="text-4xl font-black text-[#FFB800] flex items-center gap-1">
                  2K<span className="text-white">+</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/60 font-bold mt-1">
                  Completed Repairs
                </div>
                <p className="mt-1.5 text-xs text-white/80 leading-relaxed max-w-[200px] sm:max-w-xs">
                  Delivering reliable appliance solutions across local homes and businesses.
                </p>
              </div>
              <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 border border-primary/20 text-[#FFB800]">
                <Bolt className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— About Us</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Keeping Your Home Running with Trusted Appliance Repair
            </h2>
            <p className="mt-6 text-muted-foreground">
              At Home Appliances Repair and Service, we specialize in repairing major household
              appliances — washing machines, refrigerators, ovens, stoves, dryers and generators.
              Our certified technicians carry common parts on the truck so most jobs are done in a
              single visit.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-card/60 p-6">
              <div className="text-primary">★★★★★</div>
              <p className="mt-3 text-lg">
                “Home Appliances Repair and Service fixed our refrigerator and oven on the same
                visit — fast, clean, and fairly priced. They've become our go-to for every
                appliance.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Dawit Haile"
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="font-semibold">Dawit Haile</div>
                  <div className="text-xs text-muted-foreground">Homeowner</div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                "24/7 Emergency Repairs",
                "Certified Technicians",
                "All Major Brands",
                "90-Day Repair Warranty",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2.5 rounded-full bg-secondary/60 px-4 py-2 border border-white/5"
                >
                  <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-white/95 font-medium text-xs sm:text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">
                — Why Choose Us
              </span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Why Homeowners Choose Us for Appliance Repair
              </h2>
              <p className="mt-6 text-muted-foreground">
                Genuine parts, transparent pricing and technicians trained on every major brand —
                from Samsung and LG to Whirlpool, Bosch and Generac.
              </p>

              {/* Premium Video Play Launcher Card */}
              <div
                onClick={() => setIsVideoOpen(true)}
                className="group relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#112a1a] cursor-pointer shadow-2xl"
              >
                {/* Background Image of the actual YouTube video */}
                <img
                  src="https://img.youtube.com/vi/WJ4EBYS9SeI/hqdefault.jpg"
                  alt="Home Appliances Repair and Service - Intro Video Thumbnail"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Rich overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Central Play Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FFB800] text-black shadow-[0_0_20px_rgba(255,184,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFB800]/90">
                    <span className="absolute -inset-2 rounded-full border border-[#FFB800]/30 animate-ping opacity-40 group-hover:animate-none" />
                    <Play className="h-6 w-6 fill-current ml-1" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-sm group-hover:text-primary transition-colors">
                    Watch Video Tour
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Watch our team in action delivering fast, top-quality appliance repair services.
              </p>
            </div>

            {/* Premium Interactive Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item, idx) => {
                const isOpen = activeAccordion === idx;
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#FFB800]/30 bg-[#153320]/60 shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
                        : "border-white/10 bg-card/40 hover:border-white/20 hover:bg-card/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${
                            isOpen
                              ? "bg-primary/20 text-primary"
                              : "bg-white/5 text-muted-foreground"
                          }`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span
                          className={`text-base sm:text-lg font-semibold transition-colors ${
                            isOpen ? "text-white" : "text-white/80"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div
                        className={`grid h-7 w-7 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-primary/40 text-primary rotate-180 bg-primary/10"
                            : "border-white/10 text-white/50"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {/* Collapsible Content Area */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-40 border-t border-white/5 opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="p-5 pt-4 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">— Our Services</span>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Repair Services for Every Major Appliance
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              From the kitchen to the laundry room to the back-up generator — we diagnose, repair
              and service the appliances your home depends on.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Washing Machine Repair",
                image: serviceImg4,
                desc: "Expert diagnostic and repair for all top and front-load washers.",
              },
              {
                title: "Refrigerator Repair",
                image: serviceImg1,
                desc: "Fixing compressor failures, temperature leaks, and smart cooling systems.",
              },
              {
                title: "Oven & Stove Repair",
                image: serviceImg2,
                desc: "Thermostat calibrations, heating elements replacement, and burner repairs.",
              },
              {
                title: "Air Conditioner Repair",
                image: acImg,
                desc: "Fixing cooling issues, replacing filters, and servicing compressors.",
              },
              {
                title: "Coffee Machine Repair",
                image: serviceImg3,
                desc: "Professional espresso machine tuning, pump descaling, and electrical fixes.",
              },
              {
                title: "Generator Repair & Service",
                image: serviceImg5,
                desc: "Standby generator servicing, engine rebuilds, and routine tune-ups.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                <div className="overflow-hidden rounded-xl aspect-[4/3] w-full bg-secondary/30 relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between p-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Bolt />
                      </div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                    </div>
                    <Arrow className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground pl-13">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">
                — Recent Repairs
              </span>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Real Repairs, Happy Households
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary"
            >
              View All Repairs <Arrow className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "LG Front-Load Washer Rebuild",
                status: "Completed",
                date: "March 12, 2026",
                desc: "Replaced drum bearings and door seal on a 6-year-old front-loader — back in service the same day.",
                image:
                  "https://images.unsplash.com/photo-1545173168-9f1947eebd01?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Samsung Smart Fridge Repair",
                status: "Completed",
                date: "April 02, 2026",
                desc: "Diagnosed and replaced a failed inverter compressor; restored cooling and ice-maker function.",
                image:
                  "https://images.unsplash.com/photo-1571175432247-5c868db2a36b?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Generac Standby Generator Service",
                status: "In Progress",
                date: "May 18, 2026",
                desc: "Annual overhaul, load test and battery replacement on a 22kW residential standby generator.",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-card/60 transition-all duration-300 hover:border-primary/50"
              >
                <div className="overflow-hidden aspect-[4/3] w-full bg-secondary/30">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 text-xs">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-primary">
                      {p.status}
                    </span>
                    <span className="rounded-full bg-secondary/60 px-3 py-1 text-muted-foreground">
                      {p.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-primary">— Contact Us</span>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                We're Here to Keep Your Home Running Smoothly
              </h2>
              <p className="mt-6 text-muted-foreground">
                Get immediate help from our certified appliance technicians. Avoid long forms and
                wait times — call us directly on our 24/7 hotline or speak to a live support agent
                right now.
              </p>

              <div className="mt-10">
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Connect on Social Media
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: Facebook, url: "https://facebook.com", label: "Facebook" },
                    { Icon: Twitter, url: "https://twitter.com", label: "Twitter" },
                    { Icon: Instagram, url: "https://instagram.com", label: "Instagram" },
                    { Icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
                    { Icon: Youtube, url: "https://youtube.com", label: "YouTube" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-12 w-12 place-items-center rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-1"
                    >
                      <s.Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#153320] p-6 sm:p-8 shadow-2xl space-y-5">
              <h3 className="text-2xl font-bold text-white mb-2">Connect Instantly</h3>
              <p className="text-sm text-white/70 mb-4">
                Choose an option below to connect with a repair specialist.
              </p>

              {/* Phone Channel */}
              <a
                href="tel:+18005552487"
                className="group flex items-center gap-4 rounded-2xl bg-[#112a1a]/90 border border-white/5 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#112a1a]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-105">
                  <Phone className="h-5 w-5 text-[#FFB800]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/50">
                    Call 24/7 Support
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5 group-hover:text-[#FFB800] transition-colors">
                    +251 988110506
                  </h4>
                  <p className="text-xs text-[#FFB800] mt-1 flex items-center gap-1.5 font-medium">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#FFB800] animate-pulse" />
                    Emergency dispatch active
                  </p>
                </div>
              </a>

              {/* Email Channel */}
              <a
                href="mailto:support@homeappliancesrepair.com"
                className="group flex items-center gap-4 rounded-2xl bg-[#112a1a]/90 border border-white/5 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#112a1a]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-105">
                  <Mail className="h-5 w-5 text-[#FFB800]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider text-white/50">
                    Email Support
                  </span>
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mt-0.5 group-hover:text-[#FFB800] transition-colors break-all">
                    support@homeappliancesrepair.com
                  </h4>
                  <p className="text-xs text-[#FFB800] mt-1 flex items-center gap-1.5 font-medium">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#FFB800] animate-pulse" />
                    Response under 1 hour
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-secondary/40 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-primary leading-tight">
              <Bolt className="h-6 w-6 shrink-0" /> Home Appliances Repair & Service
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional appliance repair for homes and businesses — washing machines,
              refrigerators, ovens, stoves, generators and more.
            </p>
          </div>
          {[
            { h: "Company", l: ["About Us", "Services", "Projects", "Contact"] },
            {
              h: "Services",
              l: ["Washing Machines", "Refrigerators", "Ovens & Stoves", "Generators"],
            },
            {
              h: "Contact",
              l: [
                "support@homeappliancesrepair.com",
                "+251 988110506",
                "24/7 Emergency",
                "Mon–Sat 8am–8pm",
              ],
            },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="font-semibold">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-muted-foreground">
          © 2026 Home Appliances Repair & Service. All rights reserved.
        </div>
      </footer>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-4xl border-none bg-black p-0 overflow-hidden aspect-video">
          <DialogHeader className="sr-only">
            <DialogTitle>Watch Appliance Repair Video</DialogTitle>
          </DialogHeader>
          {isVideoOpen && (
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/WJ4EBYS9SeI?autoplay=1"
              title="Home Appliances Repair and Service — intro video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Floating Circular Message Icon (reveals social media links on click) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isFloatingSocialsOpen && (
          <div className="w-64 bg-[#112a1a] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-xs font-semibold text-[#FFB800] uppercase tracking-wider">
                Connect With Us
              </span>
              <button
                type="button"
                onClick={() => setIsFloatingSocialsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-white/70">Message us on any of our social channels below:</p>
            <div className="flex flex-col gap-1.5">
              {[
                {
                  Icon: Facebook,
                  url: "https://facebook.com",
                  label: "Facebook",
                  color: "hover:text-[#1877F2]",
                },
                {
                  Icon: Twitter,
                  url: "https://twitter.com",
                  label: "Twitter",
                  color: "hover:text-[#1DA1F2]",
                },
                {
                  Icon: Instagram,
                  url: "https://instagram.com",
                  label: "Instagram",
                  color: "hover:text-[#E1306C]",
                },
                {
                  Icon: Linkedin,
                  url: "https://linkedin.com",
                  label: "LinkedIn",
                  color: "hover:text-[#0A66C2]",
                },
                {
                  Icon: Youtube,
                  url: "https://youtube.com",
                  label: "YouTube",
                  color: "hover:text-[#FF0000]",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/80 transition-all duration-300 hover:bg-[#153320] hover:border-primary/25 ${s.color}`}
                >
                  <s.Icon className="h-4 w-4 shrink-0" />
                  <span className="font-medium text-xs">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsFloatingSocialsOpen(!isFloatingSocialsOpen)}
          className={`grid h-14 w-14 place-items-center rounded-full bg-[#FFB800] text-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative ${
            isFloatingSocialsOpen ? "rotate-90 bg-white" : ""
          }`}
          aria-label="Contact us"
        >
          {isFloatingSocialsOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white/20 text-[9px] font-bold text-white items-center justify-center">
                  •
                </span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
