"use client";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBook,
  IconBrandNodejs,
  IconCheck,
  IconCopy,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import Link from "next/link";
import IntentLogo from "./intent-logo";
import { images } from "@/images/image";
import { useState } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText("npx new-intent-app@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="py-12 relative sm:py-24 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-6 sm:space-y-8">
        <motion.div
          className="flex justify-center px-4"
          variants={itemVariants}
        >
          <Link
            href="/changelog"
            className="inline-flex items-center border-2 border-primary/50 rounded-full 
              bg-primary/10 text-primary hover:bg-primary/20 transition-colors
              text-xs sm:text-sm font-medium"
          >
            <div className="flex font-semibold text-background bg-primary rounded-l-full px-2 sm:px-3 py-1 items-center gap-1">
              v0.1.3.5
            </div>
            <div className="px-2 sm:px-3 py-1 flex items-center gap-2 font-semibold">
              New Release
              <IconArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col items-center font-bold tracking-tighter px-4"
          variants={itemVariants}
        >
          <span>The Laravel-Inspired Framework</span>
          <div className="flex flex-wrap justify-center items-center">
            for Modern
            <span
              className="text-primary md:flex hidden mt-2 mx-2 bg-primary/20 text-2
            xl text-2xl sm:text-4xl md:text-5xl border-2 border-primary rounded-md px-3 sm:px-4 py-1 sm:py-2 items-center gap-2"
            >
              <IconBrandNodejs className="w-6 h-6 md:w-8 md:h-8 sm:w-10 sm:h-10" />{" "}
              Node.js
            </span>
            <span className="flex mx-2 md:hidden"> Node.js</span>
            <span>Applications.</span>
          </div>
        </motion.div>
        <motion.p
          className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground px-4"
          variants={itemVariants}
        >
          A <span></span>refreshing take on traditional nodejs frameworks,
          change the way you build your products.{" "}
          <span className="font-semibold text-foreground">Intent</span> is an
          <span className="font-semibold text-foreground">
            {" "}
            open-source
          </span>{" "}
          framework with focus on productivity and{" "}
          <span className="font-semibold text-foreground">
            developer experience.
          </span>
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row justify-center px-4"
          variants={itemVariants}
        >
          <Button className="font-semibold" size="lg" asChild>
            <Link href="/get-started">
              Get Started <IconArrowRight />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">
              Read Docs <IconBook />
            </Link>
          </Button>
        </motion.div>

        <motion.div className="px-4" variants={itemVariants}>
          <div
            className="flex items-center gap-2 bg-muted/20 w-fit mx-auto p-3 sm:p-4 rounded-xl mt-2 text-primary font-mono text-sm sm:text-base cursor-pointer hover:bg-muted/30 transition-colors"
            onClick={copyCommand}
          >
            <IntentLogo
              className="w-5 h-5 sm:w-6 sm:h-6"
              src={images.intentLogoDark}
            />
            ~ npx new-intent-app@latest
            {copied ? (
              <IconCheck className="w-4 h-4" />
            ) : (
              <IconCopy className="w-4 h-4" />
            )}
          </div>
        </motion.div>
      </motion.div>
      <div className="bottom-[-10rem] md:bottom-[-29rem] left-[50%] z-[-1] absolute bg-gradient-to-t opacity-50 dark:opacity-100 from-primary to-green-900/50 blur-[8em] rounded-xl transition-all translate-x-[-50%] duration-700 ease-out w-[10rem] md:w-[30rem] h-[20rem] md:h-[30rem] rotate-[54deg]"></div>
    </motion.section>
  );
}
