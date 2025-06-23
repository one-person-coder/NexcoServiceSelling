"use client";
import Header from "@/components/common/Header"
import Hero from "@/components/main/home/Hero"
import Service from "@/components/main/home/Service"
import ServiceFoundation from "@/components/main/home/ServiceFoundation"
import ScrollingText from "@/components/main/home/ScrollingText"
import TrustedByThousand from "@/components/main/home/TrustedByThousand"
import OurProcess from "@/components/main/home/OurProcess"
import ServiceProcess from "@/components/main/home/ServiceProcess"
import Testimonials from "@/components/main/home/Testimonials"
import FAQ from "@/components/main/home/FAQ"
import EventsNetworking from "@/components/main/home/EventsNetworking"
import TopScroll from "@/components/common/TopScroll"
import BgParticles from "@/components/common/BgParticles"
import Footer from "@/components/common/Footer"


export default function NexCoOutsourcing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <TopScroll />
      <BgParticles />
      <Header />
      <Hero />
      <Service />
      <ServiceFoundation />
      <ScrollingText />
      <TrustedByThousand />
      <OurProcess />
      <ServiceProcess />
      {/* <Testimonials /> */}
      <FAQ />
      <EventsNetworking />
      <Footer />
    </div>
  )
}
