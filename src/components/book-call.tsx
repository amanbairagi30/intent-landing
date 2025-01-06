import {
  IconCalendar,
  IconDeviceLandlinePhone,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

export default function BookCall() {
  return (
    <section className="max-w-6xl flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col p-8 rounded-3xl bg-gradient-to-b md:bg-gradient-to-r from-accent/30 to-accent/5 md:flex-row items-center justify-between w-full gap-10">
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Book a Strategy Call
          </h2>
          <p className="text-lg max-w-xl text-muted-foreground">
            Let&apos;s discuss how we can help transform your business. Schedule
            a no-obligation call with our expert team today.
          </p>
          <div className="flex items-center gap-4">
            <button className="inline-flex font-semibold items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <IconCalendar size={20} />
              Book a Call with Vinayak
            </button>
          </div>
        </div>
        {/* Image Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-accent relative overflow-hidden rounded-2xl w-28 aspect-square">
            <Image
              src="https://pbs.twimg.com/profile_images/1829903163396145154/8MjVxnd2_400x400.jpg"
              alt="Profile Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="bg-accent/20 flex items-center justify-center rounded-2xl w-28 aspect-square">
            <IconUsers className="text-primary w-10 h-10" />
          </div>
          <div className="bg-accent/20 flex items-center justify-center rounded-2xl w-28 aspect-square">
            <IconUsers className="text-primary w-10 h-10" />
          </div>
          <div className="bg-accent flex items-center justify-center rounded-2xl w-28 aspect-square">
            <IconDeviceLandlinePhone className="text-primary w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
