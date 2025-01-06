import { images } from "@/images/image";
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

export const featuresOne = [
  {
    title: "Cache Management",
    description:
      "Built-in multi-store caching with Redis and in-memory options to improve application latency.",
    icon: IconBolt,
    className: "md:col-span-1 md:row-span-2",
    href: "/cache-management",
    image: images.cache,
  },
  {
    title: "Console Utilities",
    description:
      "Tools for building command-line interface scripts, including functionalities for printing and prompts.",
    icon: IconTerminal2,
    className: "md:col-span-1 md:row-span-2",
    href: "/console-utilities",
    image: null,
  },
  {
    title: "Database Integration",
    description:
      "First-class API support for MySQL and PostgreSQL, providing a declarative syntax for database operations.",
    icon: IconDatabase,
    className: "md:col-span-1 md:row-span-2",
    href: "/database-integration",
    image: null,
  },
  {
    title: "Error Handling",
    description:
      "Comprehensive error management with out-of-the-box integration for services like Sentry.",
    icon: IconAlertTriangle,
    className: "md:col-span-2 md:row-span-1",
    href: "/error-handling",
    image: null,
  },
  {
    title: "File Storage",
    description:
      "An elegant API for accessing various storage solutions, such as AWS S3 or local storage, allowing disk changes without code modifications.",
    icon: IconDatabase,
    className: "md:col-span-2",
    href: "/file-storage",
    image: null,
  },
  {
    title: "Localization",
    description:
      "Support for multiple languages to build personalized applications for users.",
    icon: IconLanguage,
    className: "md:col-span-1",
    href: "/localization",
    image: null,
  },
];

export const featuresTwo = [
  {
    title: "Logging",
    description:
      "Robust logging mechanisms to monitor errors across different application environments.",
    icon: IconAlertCircle,
    className: "md:col-span-1 md:row-span-1",
    href: "/logging",
    image: null,
  },
  {
    title: "Request Handling",
    description:
      "Utilities for routing, validation, transformation, and request management, leveraging NestJS's routing system.",
    icon: IconRoute,
    className: "col-span-1 row-span-2",
    href: "/request-handling",
    image: images.requests,
  },
  {
    title: "Mailers",
    description:
      "Built-in templates and support for SMTP, Mailgun, or Resend to facilitate email sending.",
    icon: IconMail,
    className: "md:col-span-1 md:row-span-2",
    href: "/mailers",
    image: null,
  },
  {
    title: "MVC Architecture",
    description:
      "A powerful code generator to reduce boilerplate code, enabling developers to focus on feature development.",
    icon: IconCode,
    className: "md:col-span-1 md:row-span-2",
    href: "/mvc-architecture",
    image: null,
  },
  {
    title: "Queues",
    description:
      "Simplified message queue APIs based on AWS SQS and Redis for building scalable applications.",
    icon: IconLine,
    className: "md:col-span-1 md:row-span-2",
    href: "/queues",
    image: null,
  },
];
