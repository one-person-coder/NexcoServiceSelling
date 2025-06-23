"use client";
import Hero from "@/components/main/home/Hero";
import Service from "@/components/main/home/Service";
import ServiceFoundation from "@/components/main/home/ServiceFoundation";
import ScrollingText from "@/components/main/home/ScrollingText";
import TrustedByThousand from "@/components/main/home/TrustedByThousand";
import OurProcess from "@/components/main/home/OurProcess";
import ServiceProcess from "@/components/main/home/ServiceProcess";
import FAQ from "@/components/main/home/FAQ";
import EventsNetworking from "@/components/main/home/EventsNetworking";

export default function NexCoOutsourcing() {
  const scrollingTexts = [
    "We deliver what we promise.",
    "We understand the outsourcing business deeply.",
    "We put in the effort to exceed expectations.",
    "No empty talk — only real, measurable outcomes.",
  ];

  return (
    <div>
      <Hero />
      <Service />
      <ServiceFoundation />
      <ScrollingText scrollingTexts={scrollingTexts} />
      <TrustedByThousand />
      <OurProcess />
      <ServiceProcess />
      {/* <Testimonials /> */}
      <FAQ />
      <EventsNetworking />
    </div>
  );
}
