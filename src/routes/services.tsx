import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const services = [
  { title: "backend development", description: "server-side systems built to be reliable, scalable, and clean.", detail: "apis, authentication, background jobs, data handling — everything that runs beneath the surface.", tools: "node.js • php • rest apis • auth systems" },
  { title: "api design & integration", description: "apis that make sense.", detail: "clear structure, predictable responses, and integrations that don’t break when things get real. payments, messaging, third-party services — all wired properly.", tools: "rest • webhooks • oauth • integrations" },
  { title: "database architecture", description: "data is where most systems fail.", detail: "i design schemas that scale, write queries that stay fast, and structure things so they don’t fall apart later.", tools: "postgres • mysql • data modeling • performance" },
  { title: "product development", description: "from idea to working system.", detail: "not just building screens — building flows, logic, and systems people can actually use.", tools: "full-stack • saas • system design" },
  { title: "technical thinking", description: "sometimes you don’t need code — you need clarity.", detail: "i help break down systems, fix bad decisions early, and structure things before they become expensive mistakes.", tools: "architecture • reviews • system planning" },
  { title: "creative work", description: "design, visuals, and motion when needed.", detail: "not my primary focus — but enough to make sure what i build doesn’t feel incomplete.", tools: "design • visuals • motion" },
];

const process = [
  { number: "01", title: "understand", text: "we break down the problem first. what you actually need, what you think you need, and where things can go wrong." },
  { number: "02", title: "structure", text: "before writing code, i map the system. data, flows, architecture — everything is clear before anything is built." },
  { number: "03", title: "build", text: "iterative, focused development. no guessing. no random decisions. everything connects." },
  { number: "04", title: "ship", text: "deployment, cleanup, and handoff. the system works, and you understand it." },
];

export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title: "services — lambert." }, { name: "description", content: "Backend, product, API, and technical development services by lambert" }] }), component: ServicesPage });

function ServicesPage() {
  return <div className="min-h-screen bg-background pb-28 lg:pb-0"><Navigation /><main className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
    <header className="mb-20"><p className="text-eyebrow">— what i build</p><h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">systems that hold up<br />beyond the surface.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">thoughtful software, clear workflows, and the technical decisions that make products reliable in real use.</p></header>
    <section className="border-t border-white/10">{services.map((service) => <article key={service.title} className="grid gap-5 border-b border-white/10 py-10 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] sm:gap-10"><div><h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2><p className="mt-3 text-lg text-foreground/90">{service.description}</p></div><div><p className="leading-relaxed text-muted-foreground">{service.detail}</p><p className="mt-5 text-sm font-medium text-foreground/90">{service.tools}</p></div></article>)}</section>
    <section className="pt-24"><p className="text-eyebrow">— how it works</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">simple. intentional.<br />built properly.</h2><div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">{process.map((step) => <article key={step.number} className="bg-background p-6 sm:p-8"><p className="text-sm text-muted-foreground">{step.number}</p><h3 className="mt-7 text-2xl font-semibold">{step.title}</h3><p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{step.text}</p></article>)}</div><Link to="/contact" className="mt-12 inline-flex items-center gap-3 rounded-lg bg-foreground px-5 py-3 text-sm text-background hover:opacity-90">start a conversation <ArrowUpRight className="h-4 w-4" /></Link></section>
  </main></div>;
}
