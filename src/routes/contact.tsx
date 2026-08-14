import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon } from "hugeicons-react";
import { Navigation } from "@/components/Navigation";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "contact — lambert." },
      { name: "description", content: "Get in touch with lambert" },
    ],
  }),
  component: ContactPage,
});

const CONTACTS = [
  {
    label: "email",
    value: "igweajurijosph@gmail.com",
    href: "mailto:igweajurijosph@gmail.com",
    icon: Mail,
  },
  {
    label: "twitter",
    value: "@_yk_lambert",
    href: "https://twitter.com/_yk_lambert",
    icon: TwitterIcon,
  },
  {
    label: "github",
    value: "codewithlambert",
    href: "https://github.com/codewithlambert",
    icon: GithubIcon,
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-28 lg:pb-0">
      <Navigation />
      
      <main className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow">— let's build something</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
            contact.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            reach out for collaborations, questions, or just to say hello.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Links */}
          <div className="space-y-6">
            {CONTACTS.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface group flex items-center gap-6 p-6 transition-colors hover:border-foreground/25"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground truncate">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right - Message Form */}
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold mb-6">send a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
