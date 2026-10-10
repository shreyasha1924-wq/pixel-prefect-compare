import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import "@/sitevisit.css";
import propertyImg from "@/assets/property_image.avif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SiteVisit IQ — Qualified Site Visits for Premium Projects" },
      { name: "description", content: "Build a pipeline of 25–27 qualified site-visit opportunities every month for ₹1.5 Cr+ residential projects." },
      { property: "og:title", content: "SiteVisit IQ — Qualified Site Visits for Premium Projects" },
      { property: "og:description", content: "Full-funnel buyer acquisition for premium ₹1.5 Cr–₹7 Cr projects in Mumbai, Pune, Ahmedabad and Surat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const VIDEO_SRC = "";

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SiteVisit IQ home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#232019" />
        <path d="M7 25V13l5-3v15M14 25V8l6-3v20M22 25V15l4 2v8" fill="none" stroke="#F2B705" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      SITEVISIT IQ
    </a>
  );
}

const journey = ["Ad Impression", "Landing Page Visit", "Enquiry", "Engagement", "Qualification", "Sales Conversation", "Site Visit", "Quotation", "Booking"];
const opts = [
  ["Media Efficiency", "YouTube + Display media allocation."],
  ["Landing Page Conversion", "Turn traffic into enquiries."],
  ["Lead Quality", "Filter serious buyers."],
  ["Nurture", "WhatsApp + Email follow-up."],
  ["Site Visit Conversion", "Move qualified leads toward visits."],
  ["Booking Economics", "Understand the relationship between media spend and bookings."],
];
const selects: [string, string, string, string[]][] = [
  ["f-city", "city", "Project City", ["Mumbai", "Pune", "Ahmedabad", "Surat", "Other"]],
  ["f-price", "price_range", "Property Price Range", ["₹50L–₹1Cr", "₹1Cr–₹1.5Cr", "₹1.5Cr–₹3Cr", "₹3Cr–₹5Cr", "₹5Cr–₹7Cr", "₹7Cr+"]],
  ["f-units", "units", "Available / Unsold Units", ["Below 25", "25–50", "50–100", "100–250", "250+"]],
  ["f-budget", "budget", "Monthly Marketing Budget", ["Below ₹1L", "₹1L–₹2L", "₹2L–₹5L", "₹5L–₹10L", "₹10L+"]],
  ["f-source", "lead_source", "Current Lead Source", ["Meta Ads", "Google Ads", "YouTube", "Property Portals", "Brokers", "Organic", "Multiple Channels", "Other"]],
  ["f-challenge", "challenge", "Biggest Challenge", ["Low enquiry volume", "Poor lead quality", "High CPL", "Low site visits", "Poor follow-up", "Sales team conversion", "No clear attribution", "Inventory movement"]],
];

function Req() {
  return <span className="req">*</span>;
}

function Index() {
  const [status, setStatus] = useState("");
  const [playing, setPlaying] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current!;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the highlighted fields.");
      return;
    }
    setStatus("Form is validated but not connected to a lead destination yet, so nothing was sent.");
  };
  const startVideo = () => {
    if (VIDEO_SRC) setPlaying(true);
  };

  return (
    <div className="siq">
      <header className="top">
        <div className="wrap">
          <Logo />
          <nav aria-label="Primary">
            <a href="#big-idea">How It Works</a>
            <a href="#optimise">What We Optimise</a>
            <a href="#fit">Who It’s For</a>
          </nav>
          <a className="btn" href="#apply">Get plan</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="qualifier">For premium residential projects priced from ₹1.5 Cr+ | Mumbai – Pune – Ahmedabad – Surat</p>
              <h1>Build a Pipeline of <span className="num">25–27</span> Qualified Site-Visit Opportunities Every Month</h1>
              <p className="lede">A full-funnel buyer acquisition system designed for premium ₹1.5 Cr–₹7 Cr projects — from first impression and qualification to sales conversations and site visits.</p>
              <div className="cta-row">
                <a className="btn" href="#apply">Get my project funnel plan</a>
                <a className="btn ghost" href="#big-idea">See how the funnel works</a>
              </div>
            </div>
            <div className="skyline">
              <img src={propertyImg.url} alt="Luxury residential building with a pool and palm trees" />
            </div>
          </div>
        </section>

        <section className="idea" id="big-idea">
          <div className="wrap idea-grid">
            <div>
              <p className="eyebrow">The big idea</p>
              <h2>Your Real Estate Campaign Shouldn’t Stop at “Lead Generated.”</h2>
              <p className="sub">A lead is only the beginning.</p>
              <p className="plain">Most campaigns are optimised around CPL.</p>
              <p className="plain">But developers don’t make money from leads. They make money from:</p>
              <ul className="makes">
                <li>Qualified buyers</li>
                <li>Site visits</li>
                <li>Quotations</li>
                <li>Bookings</li>
              </ul>
              <p className="close">SiteVisit IQ connects the entire journey.</p>
            </div>
            <div className="journey">
              <div className="journey-head"><span>Full journey</span><b>9 measured stages</b></div>
              <ol>
                {journey.map((s, i) => (
                  <li key={s} className={i >= 3 ? "deep" : undefined}>
                    <span className="n">{i + 1}</span>{s}
                    <span className={i === 2 ? "tag" : undefined}>{i === 2 ? "Most agencies stop here" : ""}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="alt video" id="video">
          <div className="wrap video-grid">
            <div className="player">
              {playing ? (
                <video src={VIDEO_SRC} controls autoPlay playsInline />
              ) : (
                <>
                  <svg className="bg" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <g fill="none" stroke="#232019" strokeWidth="2" opacity=".28">
                      <rect x="70" y="60" width="150" height="190" />
                      <rect x="220" y="100" width="190" height="150" />
                      <path d="M70 110h150M70 160h150M70 210h150M290 100v150M350 100v150" />
                    </g>
                  </svg>
                  <button className="play" type="button" aria-label="Play project video" onClick={startVideo}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z" fill="currentColor" /></svg>
                  </button>
                  <span className="label">Experience The Finest</span>
                </>
              )}
            </div>
            <div>
              <p className="eyebrow">Second video page</p>
              <h2 style={{ marginTop: 12 }}>Don’t Ask the Sales Team to Explain Everything.</h2>
              <p className="lede">A second video page gives warmed-up buyers deeper project information before the sales call — so conversations start further along.</p>
              <ul className="checks">
                {["Detailed project walkthrough", "Floor plans", "Location film", "Amenities", "Lifestyle", "Pricing context", "Testimonials", "Buyer FAQs"].map((c) => <li key={c}>{c}</li>)}
              </ul>
              <button className="btn" type="button" onClick={startVideo}>Watch the project video</button>
            </div>
          </div>
        </section>

        <section id="optimise">
          <div className="wrap">
            <div className="opt-head">
              <p className="eyebrow">What we optimize</p>
              <h2>We Optimize the Funnel — Not Just the Ad.</h2>
            </div>
            <div className="opt-grid">
              {opts.map(([t, d], i) => (
                <article className="opt" key={t}>
                  <div className="k">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="alt" id="fit">
          <div className="wrap">
            <div className="fit-head">
              <p className="eyebrow">Who this is for</p>
              <h2>Built for Developers Who Think Beyond CPL</h2>
            </div>
            <div className="fit-grid">
              <div className="fit yes">
                <h3>Ideal fit</h3>
                <ul>
                  {["Premium residential projects", "₹1.5 Cr+ property ticket", "Active inventory", "₹5L+ monthly marketing opportunity", "Mumbai / Pune / Ahmedabad / Surat", "Developers who want measurable funnel economics", "Sales team capable of handling qualified opportunities"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div className="fit no">
                <h3>Not ideal</h3>
                <ul>
                  {["Looking for cheap bulk leads", "No active project", "No sales team", "No inventory", "Only looking for social media posting", "Only interested in CPL"].map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="apply" id="apply">
          <div className="wrap apply-grid">
            <div>
              <p className="eyebrow">Qualification</p>
              <h2>Let’s See If Your Project Is a Fit.</h2>
              <p className="lede">Tell us about your project. We’ll assess your current acquisition funnel and identify where the biggest opportunities may exist.</p>
              <ul className="assure">
                <li>No obligation</li>
                <li>Project-specific assessment</li>
                <li>Qualified developers only</li>
              </ul>
            </div>
            <form ref={formRef} noValidate onSubmit={onSubmit}>
              <div className="field"><label htmlFor="f-name">Full Name <Req /></label><input id="f-name" name="full_name" type="text" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="f-wa">WhatsApp Number <Req /></label><input id="f-wa" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" pattern="[+0-9 ]{10,15}" required /></div>
              <div className="field"><label htmlFor="f-email">Work Email <Req /></label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="f-company">Company / Developer Name <Req /></label><input id="f-company" name="company" type="text" autoComplete="organization" required /></div>
              <div className="field full"><label htmlFor="f-project">Project Name <Req /></label><input id="f-project" name="project" type="text" required /></div>
              {selects.map(([id, name, label, options]) => (
                <div className="field" key={id}>
                  <label htmlFor={id}>{label} <Req /></label>
                  <select id={id} name={name} required defaultValue="">
                    <option value="">Select…</option>
                    {options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <button className="btn" type="submit">Get my project funnel plan →</button>
              <p className="status" role="status" aria-live="polite">{status}</p>
            </form>
          </div>
        </section>

        <section className="alt closing">
          <div className="wrap">
            <p className="path">Ad spend → Qualified leads → Site visits → Quotations → Bookings</p>
            <h2>Your Ad Budget Is Only the Beginning.</h2>
            <p className="lede">The real question is: how many qualified buyers can your funnel move from first click to site visit, quotation and booking?</p>
            <a className="btn" href="#apply">Build my real estate funnel</a>
            <p className="for">For builders and developers with active premium residential projects.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <Logo />
              <p>From Ad Spend to Site Visits.</p>
              <p>Data-Driven Growth Systems for Real Estate.</p>
              <p>Mumbai · Pune · Ahmedabad · Surat</p>
            </div>
            <div className="links">
              <a href="https://screen-capture-hero-68.lovable.app/privacy">Privacy Policy</a>
              <a href="https://screen-capture-hero-68.lovable.app/terms">Terms &amp; Conditions</a>
              <a href="#apply">Contact</a>
            </div>
          </div>
          <p className="copy">© 2026 SiteVisit IQ. All figures shown are illustrative planning scenarios.</p>
        </div>
      </footer>

      <div className="sticky"><a className="btn" href="#apply">Get my project funnel plan</a></div>
    </div>
  );
}
