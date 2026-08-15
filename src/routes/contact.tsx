import { createFileRoute } from "@tanstack/react-router";
import { Mail, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { GithubIcon, TwitterIcon } from "hugeicons-react";
import { Navigation } from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

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

function CalendarBooking() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [step, setStep] = React.useState<'date' | 'time' | 'details'>('date');
  
  const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  
  // Available time slots (9 AM - 5 PM, 30 min intervals)
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isDateAvailable = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0 && date.getDay() !== 6; // No weekends
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateSelect = (date: Date | null) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setStep('time');
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('details');
  };

  const days = getDaysInMonth(currentDate);

  if (step === 'details' && selectedDate && selectedTime) {
    return (
      <div className="mx-auto max-w-2xl">
        <button 
          onClick={() => setStep('time')}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> back to time slots
        </button>
        
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold mb-2">confirm your call</h2>
          <p className="text-sm text-muted-foreground mb-8">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {selectedTime}
          </p>
          
          <form 
            name="booking" 
            method="POST" 
            data-netlify="true"
            action="/success.html"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="booking" />
            <input type="hidden" name="date" value={selectedDate.toISOString()} />
            <input type="hidden" name="time" value={selectedTime} />
            
            <div>
              <label htmlFor="booking-name" className="block text-sm font-medium mb-2">name</label>
              <input
                type="text"
                id="booking-name"
                name="name"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your name"
              />
            </div>

            <div>
              <label htmlFor="booking-email" className="block text-sm font-medium mb-2">email</label>
              <input
                type="email"
                id="booking-email"
                name="email"
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="booking-topic" className="block text-sm font-medium mb-2">what would you like to discuss?</label>
              <textarea
                id="booking-topic"
                name="topic"
                rows={4}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="brief description of the topic..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground text-background py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            >
              confirm booking
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 'time' && selectedDate) {
    return (
      <div className="mx-auto max-w-4xl">
        <button 
          onClick={() => setStep('date')}
          className="mb-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" /> back to calendar
        </button>
        
        <div className="card-surface p-8">
          <h2 className="text-2xl font-semibold mb-2">select a time</h2>
          <p className="text-sm text-muted-foreground mb-8">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Clock className="h-4 w-4" />
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="card-surface p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={previousMonth}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:bg-white/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextMonth}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors hover:bg-white/5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Day names */}
        <div className="mb-4 grid grid-cols-7 gap-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((date, index) => {
            const isAvailable = isDateAvailable(date);
            const isSelected = selectedDate && date && 
              selectedDate.toDateString() === date.toDateString();
            
            return (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-lg text-sm transition-all
                  ${!date ? 'cursor-default' : ''}
                  ${isAvailable 
                    ? 'border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10' 
                    : 'cursor-not-allowed text-muted-foreground/30'
                  }
                  ${isSelected ? 'border-foreground bg-foreground/10 text-foreground' : ''}
                `}
              >
                {date ? date.getDate() : ''}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          weekdays only · 30-minute calls · 9am - 5pm WAT
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  useScrollAnimation();
  const [showCalendar, setShowCalendar] = React.useState(false);

  return (
    <div className="min-h-screen bg-background pb-28 lg:pb-0 page-transition">
      <Navigation />
      
      <main className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow">let's build something</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
            contact.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            reach out for collaborations, questions, or just to say hello.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mb-12 flex flex-wrap gap-4">
          <button
            onClick={() => setShowCalendar(false)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              !showCalendar 
                ? 'bg-foreground text-background' 
                : 'border border-white/10 text-foreground hover:bg-white/5'
            }`}
          >
            send message
          </button>
          <button
            onClick={() => setShowCalendar(true)}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              showCalendar 
                ? 'bg-foreground text-background' 
                : 'border border-white/10 text-foreground hover:bg-white/5'
            }`}
          >
            book a call
          </button>
        </div>

        {!showCalendar ? (
          /* Contact Form View */
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
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                netlify-honeypot="bot-field"
                action="/success.html"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="message"
                    rows={5}
                    required
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
        ) : (
          /* Calendar View */
          <CalendarBooking />
        )}
      </main>
    </div>
  );
}
