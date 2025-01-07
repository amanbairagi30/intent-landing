"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Install via npm",
    code: "npm install -g intent-cli",
    description:
      "Get started by installing the Intent CLI globally on your system.",
  },
  {
    number: "02",
    title: "Create project",
    code: "intent new my-project",
    description: "Create a new Intent project with our starter template.",
  },
  {
    number: "03",
    title: "Start developing",
    code: "npm run dev",
    description: "Launch your development server and start building.",
  },
];

const quickExample = `import { HttpKernel } from './http/kernel';
import { ApplicationContainer } from './boot/container';
import { ApplicationExceptionFilter } from './errors/filter';
import { IntentHttpServer } from '@intentjs/core';

const server = IntentHttpServer.init();

server.useContainer(ApplicationContainer);

server.useKernel(HttpKernel);

server.handleErrorsWith(ApplicationExceptionFilter);

server.start();
`;

export default function GetStarted() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [copiedExample, setCopiedExample] = useState(false);

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (index !== undefined) {
      setCopiedStep(index);
      setTimeout(() => setCopiedStep(null), 2000);
    } else {
      setCopiedExample(true);
      setTimeout(() => setCopiedExample(false), 2000);
    }
  };

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
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 my-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Get Up and Running in Minutes
        </h2>
        <p className="mt-4 text-lg">
          Follow these simple steps to start building with Intent
        </p>
      </div>

      <motion.div
        className="mt-16 grid gap-8 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="relative group bg-accent/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={hoverVariants.hover}
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold ">{step.title}</h3>
            </div>
            <p className="text-neutral-400 mb-4">{step.description}</p>
            <div className="relative group">
              <SyntaxHighlighter
                language="bash"
                style={atomDark}
                className="rounded-lg !bg-accent/40 !p-4"
              >
                {step.code}
              </SyntaxHighlighter>
              <button
                onClick={() => copyToClipboard(step.code, index)}
                className="absolute top-2 right-2 p-2 rounded-md bg-accent/50 hover:bg-accent/50 transition-colors"
              >
                {copiedStep === index ? (
                  <IconCheck className="w-5 h-5 text-primary" />
                ) : (
                  <IconCopy className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-6">Quick Example</h3>
        <div className="relative w-full md:max-w-3xl mx-auto rounded-3xl">
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            className="rounded-3xl !bg-accent/40 !p-6"
          >
            {quickExample}
          </SyntaxHighlighter>
          <Button
            onClick={() => copyToClipboard(quickExample)}
            className="absolute top-4 right-4 p-2 rounded-md bg-accent/50 hover:bg-accent/50 transition-colors"
          >
            {copiedExample ? (
              <IconCheck className="w-5 h-5 text-primary" />
            ) : (
              <IconCopy className="w-5 h-5 text-primary" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
