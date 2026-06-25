"use client"
import { useEffect } from 'react'
import Image from "next/image";

export default function HomePage() {
  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex justify-center">
      {/* col 1: max 25rem (tailwind's w-100) | col 2: fills remaining space */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-sm sm:max-w-lg md:max-w-4xl gap-x-6 lg:gap-x-20 gap-y-6">
        <h1 className="text-center md:text-left md:col-start-1 text-2xl min-[480px]:text-4xl md:text-3xl lg:text-4xl mb-3 order-1">
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

        <p className="order-3 md:col-start-1 text-justify px-3 md:px-0 mb-6 [hyphens:auto]">
          Northbridge partners with organizations facing complex decisions, providing clear analysis, practical strategies, and measurable outcomes. From growth initiatives to operational improvements, we help leaders move forward with confidence and create lasting value.
        </p>

        <div className="order-4 md:col-start-1">
          <h2 className="mb-2 px-3 md:px-0">Trusted by teams at:</h2>

          <div className="flex gap-x-3 px-3 md:px-0">

            <Image
              src="/brands/atlassian.png"
              alt="Atlassian logo"
              width={120}
              height={120}
              className="w-9 h-9 brightness-75"
            />

            <Image
              src="/brands/toyota.png"
              alt="Toyota logo"
              width={120}
              height={120}
              className="w-10 h-10 brightness-75"
            />

            <Image
              src="/brands/cloudflare.png"
              alt="Cloudflare logo"
              width={120}
              height={120}
              className="w-10 h-10 brightness-75"
            />

            <Image
              src="/brands/pfizer.png"
              alt="Pfizer logo"
              width={120}
              height={120}
              className="w-10 h-10 brightness-75"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
