import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";

import { SpiderWeb } from "@/components/SpiderWeb";
import { Navigation } from "@/components/Navigation";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "lambert. — building systems in silence" },
      {
        name: "description",
        content:
          "Portfolio of lambert, a developer building digital systems and experiences with clean code and minimal design.",
      },
      { property: "og:title", content: "lambert. — building systems in silence" },
      {
        property: "og:description",
        content: "Selected work: lynktern, aesthura, shipixa, classiq store, nxlstchz.",
      },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  {
    title: "lynktern",
    desc: "siwes platform for nigerian students.",
    img: "/shot-lynktern.png",
    projectId: "lynktern",
  },
  {
    title: "aesthura",
    desc: "interior design portfolio and booking platform.",
    img: "/shot-aesthura.png",
    imgClass: "object-cover object-left-top",
    projectId: "aesthura",
  },
  {
    title: "shipixa",
    desc: "shipping & logistics platform.",
    img: "/shot-shipixa.jpg",
    imgClass: "object-cover",
    projectId: "shipixa",
  },
  {
    title: "classiq store",
    desc: "e-commerce store experience.",
    img: "/shot-classiq.png",
    imgClass: "object-cover object-top",
    projectId: "classiq-store",
  },
  {
    title: "nxlstchz",
    desc: "crocheted streetwear brand platform.",
    img: "/shot-nxlstchz.png",
    imgClass: "object-cover",
    projectId: "nxlstchz",
  },
];

function ProjectCard({
  title,
  desc,
  img,
  imgClass,
  projectId,
}: {
  title: string;
  desc: string;
  img: string;
  imgClass?: string;
  projectId: string;
}) {
  return (
    <Link
      to={`/work/${projectId}`}
      className="card-surface group grid grid-cols-[minmax(0,1fr)_42%] items-stretch overflow-hidden transition-colors hover:border-foreground/25 scroll-fade-in"
    >
      <div className="flex min-w-0 flex-col justify-between p-4 sm:p-6">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight sm:text-2xl">{title}</h3>
          <p className="mt-2 text-[0.8rem] text-muted-foreground sm:max-w-[18ch] sm:text-sm">{desc}</p>
        </div>
        <ArrowUpRight className="mt-6 h-5 w-5 sm:mt-8 shrink-0 text-foreground/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={`${title} preview`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full ${imgClass || 'object-cover'} opacity-90 transition-all duration-300`}
        />
      </div>
    </Link>
  );
}


function Index() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background pb-28 lg:pb-0 page-transition">
      <Navigation />

      <main id="top" className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* hero */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-16 bottom-0 overflow-hidden">
            <SpiderWeb className="absolute right-[-6%] top-[-40%] h-[150%] w-[80%] text-web lg:right-[8%] lg:top-[-52%] lg:h-[190%] lg:w-[60%]" />
            <div className="absolute right-[10%] top-[-22rem] h-[22rem] w-px bg-border lg:right-[22%] lg:top-[-26rem] lg:h-[26rem]" />
            <img
              src="/spider-hanging.png"
              alt=""
              width={912}
              height={1200}
              className="absolute right-[2%] top-4 w-[42%] max-w-[240px] opacity-95 animate-swing lg:right-[16%] lg:top-0 lg:w-[16%] lg:max-w-[190px]"
            />
          </div>

          <div className="relative pt-8 lg:pt-14">
            <p className="text-eyebrow">— developer</p>
            <h1 className="mt-3 text-[3.75rem] font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
              <span className="inline-block animate-typewriter">lambert.</span>
            </h1>
            <p className="mt-2 text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-muted-foreground sm:text-5xl lg:mt-1 lg:text-[3.5rem]">
              building systems<br />in silence.
            </p>
            <Link
              to="/work"
              className="mt-8 inline-flex items-center gap-4 rounded-full border border-foreground/70 px-7 py-4 text-lg transition-colors hover:bg-foreground hover:text-background lg:mt-9 lg:py-3.5"
            >
              view work
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
            </Link>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <TechStackMarquee />

        {/* featured work */}
        <section id="work" className="relative mt-24 lg:mt-16">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="text-eyebrow truncate">— selected work</p>
            <Link
              to="/work"
              className="inline-flex shrink-0 items-center gap-3 text-[0.95rem] text-foreground/90 hover:text-foreground"
            >
              view all
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Featured - Lynktern (always visible) */}
          <Link
            to="/work/lynktern"
            className="card-surface group mt-5 grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,1fr)_1.15fr] scroll-fade-in"
          >
            <div className="flex flex-col p-6 sm:p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm text-foreground">
                <Star className="h-3.5 w-3.5 fill-current" />
                featured
              </span>
              <h3 className="mt-8 text-4xl font-semibold tracking-tight lg:text-5xl">lynktern</h3>
              <p className="mt-4 max-w-[28ch] text-[0.95rem] text-muted-foreground">
                siwes platform for nigerian students.
              </p>
              <span className="mt-10 inline-flex items-center gap-3 text-[0.95rem] lg:mt-auto">
                view case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <div className="relative min-h-[220px] overflow-hidden md:min-h-[300px]">
              <img
                src="/shot-lynktern.png"
                alt="lynktern dashboard preview"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-left-top opacity-90 transition-all duration-300"
              />
            </div>
          </Link>

          {/* Other projects - Hidden on mobile, visible on desktop */}
          <div className="mt-5 hidden grid-cols-2 gap-4 sm:gap-5 lg:grid lg:grid-cols-3">
            {PROJECTS.slice(1).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          {/* About section */}
          <div className="mt-5">
            <Link
              id="about"
              to="/about"
              className="card-surface relative overflow-hidden p-6 sm:p-8 scroll-fade-in block"
              aria-label="about"
            >
              <img
                src="/spider-macro.jpg"
                alt=""
                loading="lazy"
                className="pointer-events-none absolute bottom-0 right-0 h-[78%] w-[70%] object-cover object-left opacity-80"
              />
              <div className="relative">
                <p className="text-eyebrow">— about</p>
                <p className="mt-5 max-w-[34ch] text-[1.05rem] leading-relaxed text-foreground/90">
                  i build digital systems and experiences. focused on clean code, minimal design and
                  real impact.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <footer id="contact" className="mt-16 hidden pb-10 text-eyebrow lg:block">
          — © 2026 lambert. all rights reserved.
        </footer>
      </main>
    </div>
  );
}
