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
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 2000)
  //   return () => clearTimeout(timer)
  // }, [])


  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
  //       <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
  //         <motion.h2
  //           className="text-2xl font-bold text-white mb-2"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 0.5 }}
  //         >
  //           NexCo Outsourcing
  //         </motion.h2>
  //         <motion.p
  //           className="text-orange-400"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ delay: 0.7 }}
  //         >
  //           Loading Excellence...
  //         </motion.p>
  //       </motion.div>
  //     </div>
  //   )
  // }

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
      <Testimonials />
      <FAQ />
      <EventsNetworking />
      <Footer />
    </div>
  )
}
