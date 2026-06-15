import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      {/* col 1: max 25rem (tailwind's w-100) | col 2: fills remaining space */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-sm sm:max-w-lg md:max-w-4xl gap-x-6 lg:gap-x-20 gap-y-6">
        <h1 className="text-center md:text-left md:col-start-1 text-4xl mb-3 order-1">
          We help you make the{" "}
          <span className="font-bold">decisions that deliver</span>
        </h1>

        <Image
          src="/hero.jpg"
          alt="Marcus and Isabella"
          width={800}
          height={800}
          priority
          className="order-2 md:order-0 md:col-start-2 md:row-start-1 md:row-span-3 aspect-square w-full md:w-100 shrink-0 md:justify-self-center lg:justify-self-stretch"
        />

        <p className="order-3 md:col-start-1 text-justify mb-6">
          Northbridge partners with organizations facing complex decisions, providing clear analysis, practical strategies, and measurable outcomes. From growth initiatives to operational improvements, we help leaders move forward with confidence and create lasting value.
        </p>

        <div className="order-4 md:col-start-1">
          <h2 className="mb-2">Trusted by teams at:</h2>

          <div className="flex gap-x-3">
            <Image
              src="/brands/atlassian.png"
              alt="Atlassian logo"
              width={120}
              height={120}
              className="w-9 h-9"
            />

            <Image
              src="/brands/toyota.png"
              alt="Toyota logo"
              width={120}
              height={120}
              className="w-10 h-10"
            />
            <Image
              src="/brands/cloudflare.png"
              alt="Cloudflare logo"
              width={120}
              height={120}
              className="w-10 h-10"
            />
            <Image
              src="/brands/pfizer.png"
              alt="Pfizer logo"
              width={120}
              height={120}
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
