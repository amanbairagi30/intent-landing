import {
  IconDatabase,
  IconTerminal2,
  IconAlertTriangle,
  IconLanguage,
  IconBolt,
  IconAlertCircle,
  IconMail,
  IconCode,
  IconLine,
  IconRoute,
} from "@tabler/icons-react";
import { images } from "@/images/image";

export const featuresOne = [
  {
    title: "Cache Management",
    description:
      "Built-in multi-store caching with Redis and in-memory options to improve application latency.",
    icon: IconBolt,
    class: " border-2 border-red-500",
    href: "/cache-management",
    image: images.cache,
  },
  {
    title: "Console Utilities",
    description:
      "Tools for building command-line interface scripts, including functionalities for printing and prompts.",
    icon: IconTerminal2,
    class: "md:col-span-1 md:row-span-2",
    href: "/console-utilities",
    image: null,
  },
  {
    title: "Database Integration",
    description:
      "First-class API support for MySQL and PostgreSQL, providing a declarative syntax for database operations.",
    icon: IconDatabase,
    class: "md:col-span-1 md:row-span-2",
    href: "/database-integration",
    image: null,
  },
  {
    title: "Error Handling",
    description:
      "Comprehensive error management with out-of-the-box integration for services like Sentry.",
    icon: IconAlertTriangle,
    class: "md:col-span-2 md:row-span-1",
    href: "/error-handling",
    image: null,
  },
  {
    title: "File Storage",
    description:
      "An elegant API for accessing various storage solutions, such as AWS S3 or local storage, allowing disk changes without code modifications.",
    icon: IconDatabase,
    class: "md:col-span-2",
    href: "/file-storage",
    image: null,
  },
  {
    title: "Localization",
    description:
      "Support for multiple languages to build personalized applications for users.",
    icon: IconLanguage,
    class: "md:col-span-1",
    href: "/localization",
    image: null,
  },
  {
    title: "Logging",
    description:
      "Robust logging mechanisms to monitor errors across different application environments.",
    icon: IconAlertCircle,
    class: "md:col-span-1 md:row-span-1",
    href: "/logging",
    image: null,
  },
  {
    title: "Request Handling",
    description:
      "Utilities for routing, validation, transformation, and request management, leveraging NestJS's routing system.",
    icon: IconRoute,
    class: "col-span-1 row-span-4",
    href: "/request-handling",
    image: images.requests,
  },
  {
    title: "Mailers",
    description:
      "Built-in templates and support for SMTP, Mailgun, or Resend to facilitate email sending.",
    icon: IconMail,
    class: "col-span-1 row-span-2",
    href: "/mailers",
    image: null,
  },
  {
    title: "MVC Architecture",
    description:
      "A powerful code generator to reduce boilerplate code, enabling developers to focus on feature development.",
    icon: IconCode,
    class: "md:col-span-1 md:row-span-2",
    href: "/mvc-architecture",
    image: null,
  },
  {
    title: "Queues",
    description:
      "Simplified message queue APIs based on AWS SQS and Redis for building scalable applications.",
    icon: IconLine,
    class: "md:col-span-1 md:row-span-2",
    href: "/queues",
    image: null,
  },
];

export const featuresTwo = [];

export const ctaSection = {
  title: "Ready to deep dive into IntentJs?",
  buttonText: "Explore Now",
  buttonHref: "/docs/getting-started",
};
