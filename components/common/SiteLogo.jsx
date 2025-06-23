import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SiteLogo = () => {
  return (
    <Link href={"/"} className="relative h-16 w-20">
      <Image src={"/images/new-logo.png"} fill />
    </Link>
  );
};
export default SiteLogo;
