"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SiteLogo from "@/components/common/SiteLogo";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Sectors We Serve", href: "/sectors-we-serve" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-orange-500/20"
    >
      <div className="border-b border-gray-300">
        <div className="container flex-wrap mx-auto px-4 flex justify-between gap-3 py-2 ">
          <Link
            href="mailto:Info@nexcooutsourcing.com"
            className="text-gray-600 font-semibold"
          >
            Info@nexcooutsourcing.com
          </Link>
          <Link
            href="tel:+447961606003"
            className="text-gray-600 font-semibold"
          >
            +44 7961 606003
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          <SiteLogo />
          <DesktopNavigation navLinks={navLinks} />
          <BookTrial />
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <MobileNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navLinks={navLinks}
        />
      </div>
    </motion.header>
  );
}

const DesktopNavigation = ({ navLinks }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navLinks.map((item, index) => (
        <motion.div
          key={item?.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`${item?.href}`}
            className="text-black hover:text-orange-500 transition-all duration-300 !font-semibold relative group"
          >
            {item?.label}
          </Link>
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
            layoutId="underline"
          />
        </motion.div>
      ))}
    </nav>
  );
};

const MobileNavigation = ({ navLinks, isMenuOpen, setIsMenuOpen }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden mt-4 pb-4 border-t border-orange-500/20 overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((item, index) => (
              <motion.a
                key={item?.label}
                href={item?.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-900 hover:text-orange-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item?.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-fit"
              >
                <Link href={"mailto:mehvish.asghar@nexcooutsourcing.com"}>
                  Book A Trial
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.button
      className="lg:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-6 h-6 text-black" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-6 h-6 text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const BookTrial = () => {
  return (
    <motion.div
      className="hidden lg:block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <Link
          href="mailto:mehvish.asghar@nexcooutsourcing.com"
          className="relative z-10"
        >
          Book A Trial
        </Link>
      </Button>
    </motion.div>
  );
};

export default Header;
