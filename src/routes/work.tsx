import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "work — lambert." },
      { name: "description", content: "Selected projects and work by lambert" },
    ],
  }),
  component: WorkPage,
});

const PROJECTS = [
  {
    title: "lynktern",
    desc: "siwes platform for nigerian students.",
    img: "/shot-lynktern.png",
    featured: true,
    projectId: "lynktern",
  },
  {
    title: "aesthura",
    desc: "interior design portfolio and booking platform.",
    img: "/shot-aesthura.png",
    projectId: "aesthura",
  },
  {
    title: "shipixa",
    desc: "shipping & logistics platform.",
    img: "/shot-shipixa.jpg",
    projectId: "shipixa",
  },
  {
    title: "classiq store",
    desc: "e-commerce store experience.",
    img: "/shot-classiq.png",
    projectId: "classiq-store",
  },
  {
    title: "nxlstchz",
    desc: "crocheted streetwear brand platform.",
    img: "/shot-nxlstchz.png",
    projectId: "nxlstchz",
  },
];

function WorkPage() {
  const matchRoute = useMatchRoute();
  const isCaseStudy = matchRoute({ to: "/work/$projectId", fuzzy: false });

  useScrollAnimation();

  if (isCaseStudy) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background pb-32 lg:pb-0 page-transition">
      <Navigation />
      
      <main className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow">— selected work</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
            projects.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            a collection of systems, products and experiences i've built.
          </p>
        </div>

        {/* Featured Project */}
        <Link
          to={`/work/${PROJECTS[0].projectId}`}
          className="card-surface group mb-8 grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,1fr)_1.15fr] scroll-fade-in"
        >
          <div className="flex flex-col p-6 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-3 py-1.5 text-sm text-foreground">
              <Star className="h-3.5 w-3.5 fill-current" />
              featured
            </span>
            <h3 className="mt-8 text-4xl font-semibold tracking-tight lg:text-5xl">
              {PROJECTS[0].title}
            </h3>
            <p className="mt-4 max-w-[28ch] text-[0.95rem] text-muted-foreground">
              {PROJECTS[0].desc}
            </p>
            <span className="mt-10 inline-flex items-center gap-3 text-[0.95rem]">
              view case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
          <div className="relative min-h-[220px] overflow-hidden md:min-h-[300px]">
            <img
              src={PROJECTS[0].img}
              alt={`${PROJECTS[0].title} preview`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-left-top opacity-90 transition-all duration-300"
            />
          </div>
        </Link>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {PROJECTS.slice(1).map((project) => (
            <Link
              key={project.title}
              to={`/work/${project.projectId}`}
              className="card-surface group grid grid-cols-[minmax(0,1fr)_42%] items-stretch overflow-hidden transition-colors hover:border-foreground/25 sm:grid-cols-1 scroll-fade-in"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:order-1">
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col justify-between p-5 sm:order-2 sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                    {project.desc}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/90">
                  view case
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
