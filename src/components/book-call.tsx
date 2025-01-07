"use client";

import {
  IconCalendar,
  IconDeviceLandlinePhone,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function BookCall() {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  // Grid items animation variants
  const gridItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="max-w-6xl flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col p-8 rounded-3xl bg-gradient-to-b md:bg-gradient-to-r from-accent/30 to-accent/5 md:flex-row items-center justify-between w-full gap-10">
        {/* Content Side */}
        <motion.div className="flex-1 space-y-6" variants={contentVariants}>
          <motion.h2
            className="text-3xl font-bold tracking-tight"
            variants={contentVariants}
          >
            Book a Strategy Call
          </motion.h2>
          <motion.p
            className="text-lg max-w-xl text-muted-foreground"
            variants={contentVariants}
          >
            Let&apos;s discuss how we can help transform your business. Schedule
            a no-obligation call with our expert team today.
          </motion.p>
          <motion.div
            className="flex items-center gap-4"
            variants={contentVariants}
          >
            <motion.button
              className="inline-flex font-semibold items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconCalendar size={20} />
              Book a Call with Vinayak
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          <motion.div
            className="bg-accent relative overflow-hidden rounded-2xl w-28 aspect-square"
            variants={gridItemVariants}
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1829903163396145154/8MjVxnd2_400x400.jpg"
              alt="Profile Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
          <motion.div
            className="bg-accent/20 flex items-center justify-center rounded-2xl w-28 aspect-square"
            variants={gridItemVariants}
          >
            <IconUsers className="text-primary w-10 h-10" />
          </motion.div>
          <motion.div
            className="bg-accent/20 flex items-center justify-center rounded-2xl w-28 aspect-square"
            variants={gridItemVariants}
          >
            <IconUsers className="text-primary w-10 h-10" />
          </motion.div>
          <motion.div
            className="bg-accent flex items-center justify-center rounded-2xl w-28 aspect-square"
            variants={gridItemVariants}
          >
            <IconDeviceLandlinePhone className="text-primary w-10 h-10" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
