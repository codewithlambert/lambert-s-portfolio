import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const skills = ["javascript", "mysql", "postgresql", "rest apis", "git", "react", "node.js", "next.js", "typescript", "tailwind css", "supabase", "firebase", "groq api", "vercel", "cloudflare"];
const experience = [
  ["builder", "lynktern", "2026 — present"], 
  ["intern", "niit port harcourt", "2025"], 
  ["freelance developer", "independent", "2024 — present"]
];
const strengths = [
  { title: "systems thinking", text: "I think in flows, not pages: how data moves, how users behave, and how systems scale." }, 
  { title: "product mindset", text: "I don't build isolated projects. I build things people can actually use." }, 
  { title: "full-stack execution", text: "From idea to design to backend to deployment. I don't stop halfway." }, 
  { title: "ownership", text: "I build independently. What ships reflects my decisions, good or bad." }
];

export const Route = createFileRoute("/about")({ 
  head: () => ({ 
    meta: [
      { title: "about — lambert." }, 
      { name: "description", content: "About lambert, a full-stack developer building systems in silence" }
    ] 
  }), 
  component: AboutPage 
});

function AboutPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background pb-28 lg:pb-0 page-transition">
      <Navigation />
      
      <main className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        {/* Header */}
        <header className="mb-20">
          <p className="text-eyebrow">about</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                still early.<br />already building.
              </h1>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>I didn't get into tech because it was trending. I got into it because I wanted to understand how things work, and eventually build my own.</p>
                <p>I'm currently a computer science student, but most of what I've learned came from building: breaking things, fixing them, and figuring out why they broke in the first place.</p>
                <p>Right now, I'm building <span className="text-foreground font-medium">lynktern</span>, a platform focused on fixing how students manage SIWES and internships in Nigeria.</p>
              </div>
            </div>
            
            {/* Profile Card with Glassmorphism */}
            <div className="p-6 scroll-fade-in">
              <div className="aspect-[4/5] mb-4 overflow-hidden rounded-lg border border-white/10 bg-secondary/50">
                <video 
                  src="/Lambert.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    console.error('Video failed to load:', e);
                    (e.target as HTMLVideoElement).style.display = 'none';
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground">port harcourt, nigeria</p>
              <p className="mt-1 text-xs text-muted-foreground/60">backed by God.</p>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">stats</p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              ["2+", "years building"], 
              ["5+", "projects shipped"], 
              ["1", "live product"], 
              ["40+", "users onboarded"]
            ].map(([number, text], i) => (
              <div key={text} className="group text-center scroll-fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="text-3xl font-bold transition-transform duration-300 group-hover:scale-110 sm:text-4xl">{number}</p>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">skills</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-white/20 hover:bg-white/10 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Table */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">experience</p>
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 font-medium text-muted-foreground">role</th>
                    <th className="px-6 py-4 font-medium text-muted-foreground">company</th>
                    <th className="px-6 py-4 font-medium text-muted-foreground">year</th>
                  </tr>
                </thead>
                <tbody>
                  {experience.map(([role, company, year], i) => (
                    <tr key={role} className={i !== experience.length - 1 ? "border-b border-white/5" : ""}>
                      <td className="px-6 py-4 font-medium">{role}</td>
                      <td className="px-6 py-4">{company}</td>
                      <td className="px-6 py-4 text-muted-foreground">{year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">philosophy</p>
          <div className="glass-card p-8 sm:p-10">
            <blockquote className="space-y-6 text-xl font-medium leading-relaxed sm:text-2xl">
              <p>"I don't build for the sake of building. Every project starts with a problem I've seen or experienced.</p>
              <p>Most systems fail because they look good but don't hold up in real use. I focus on building things that actually work, even when no one is watching.</p>
              <p>I'd rather ship something real than polish something that doesn't matter."</p>
            </blockquote>
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">what i bring</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">more than just code.</h2>
          <p className="mb-10 max-w-2xl text-lg text-muted-foreground">
            I'm not just focused on writing features. I focus on how everything connects.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, i) => (
              <div key={item.title} className="tile scroll-fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 scroll-fade-in">
          <p className="text-eyebrow mb-6">testimonials</p>
          <div className="text-center">
            <p className="text-lg font-medium">Real feedback, when it is ready to share.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Testimonials will be published here with permission from the people and teams involved.
            </p>
          </div>
        </section>

        {/* Final Statement */}
        <div className="scroll-fade-in text-center">
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            still early. still building. still having fun with it.
          </p>
        </div>
      </main>
    </div>
  );
}
