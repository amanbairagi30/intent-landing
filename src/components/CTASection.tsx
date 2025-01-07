"use client";

import { ctaSection } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { IconSearch } from "@tabler/icons-react";
import { motion } from "motion/react";

export function CTASection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 20,
      },
    },
  };

  const gradientVariants = {
    hidden: {
      rotate: 100,
      opacity: 0,
      scale: 0.8,
      x: 110,
      filter: "blur(30px)",
    },
    visible: {
      rotate: 90,
      filter: "blur(50px)",
      opacity: 1,
      scale: 1,
      x: -110,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.2,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto py-16 px-4 max-w-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="bg-gradient-to-b relative overflow-hidden from-accent/40 rounded-lg p-8 text-center">
        <motion.div
          className="md:bottom-[-18rem] left-[30%] opacity-100 z-[-1] absolute bg-gradient-to-t from-primary to-primary/90 blur-[4em] rounded-xl transition-all translate-x-[-50%] w-[10rem] md:w-[10rem] h-[10rem] md:h-[30rem]"
          variants={gradientVariants}
          animate={{
            rotate: [90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.h2 className="text-3xl font-bold mb-6" variants={titleVariants}>
          {ctaSection.title}
        </motion.h2>

        <motion.div variants={titleVariants} whileHover="hover" whileTap="tap">
          <Button className="relative overflow-hidden group">
            <Link
              href={ctaSection.buttonHref}
              className="font-semibold flex items-center gap-2"
            >
              <motion.span>{ctaSection.buttonText}</motion.span>
              <motion.div
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <IconSearch className="w-5 h-5" />
              </motion.div>
            </Link>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
