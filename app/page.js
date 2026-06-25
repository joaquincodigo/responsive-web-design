'use client'
import { useState } from 'react'
import Image from 'next/image'

const DEVICES = [
  { label: 'Phone', icon: "./icons/phone.svg", width: 330, height: 620 },
  { label: 'Tablet portrait', icon: "./icons/tablet_portrait.svg", width: 480, height: 740 },
  { label: 'Tablet landscape', icon: "./icons/tablet_landscape.svg", width: 768, height: 540 },
  { label: 'Notebook', icon: "./icons/notebook.svg", width: 1280, height: 768 },
]

const MAX_W = 900

export default function RootPage({ url }) {

  url = "/home"
  const [index, setIndex] = useState(3)
  const d = DEVICES[index]
  const scale = Math.min(1, MAX_W / d.width)

  return (
    <div className="flex flex-col items-center gap-6 h-screen w-screen items-center justify-center bg-gradient-to-b from-slate-300 to-slate-200">

      {/* iframe */}
      <div
        className={`
          overflow-hidden

          ${DEVICES[index].label === 'Phone'
            ? 'rounded-lg outline outline-[10px] border border-b-40 border-t-20'
            : ''}

          ${DEVICES[index].label === 'Tablet portrait'
            ? 'rounded-lg outline outline-[10px]'
            : ''}

          ${DEVICES[index].label === 'Tablet landscape'
            ? 'rounded-lg outline outline-[10px]'
            : ''}


          ${DEVICES[index].label === 'Notebook'
            ? 'outline outline-[5px]'
            : ''}
        `}
        style={{
          width: d.width * scale,
          height: d.height * scale,
          transition: 'width 0.35s ease, height 0.35s ease',
        }}
      >

        <iframe
          src={url}
          scrolling="vertical" // for modern browsers, allows vertical scroll if needed
          style={{
            width: d.width,
            height: d.height,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 'none',
            overflow: 'hidden',        // hides scrollbars inside iframe doc
            transition: 'width 0.35s ease, height 0.35s ease, transform 0.35s ease',
          }}
        />


      </div>


      {/* CONTAINER */}
      <div className="flex flex-col items-center gap-1 w-full max-w-sm">

        {/* DEVICE LABELS */}
        <div className="flex justify-between w-full  ">
          {DEVICES.map(({ label, icon }, i) => (
            <button
              key={label}
              onClick={() => setIndex(i)}
              className="flex flex-col items-center justify-center gap-1 group w-10 h-10 hover:cursor-pointer"
            >
              <Image
                alt={label}
                width={24}
                height={24}
                src={icon}
                size={40}
                className={`transition-colors ${i === index ? 'text-neutral-800' : 'text-neutral-400'}`}
              />

            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative w-full flex items-center px-3">
          <div className="absolute inset-x-0 h-px bg-black" />
          <input
            type="range"
            min={0}
            max={DEVICES.length - 1}
            step={1}
            value={index}
            onChange={e => setIndex(Number(e.target.value))}
            className="relative w-full appearance-none bg-transparent cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-neutral-800
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-neutral-800
              [&::-moz-range-thumb]:border-0"
          />
        </div>


        <span className={`text-xl tracking-wide $text-neutral-700`}>
          {DEVICES[index].label}
        </span>
      </div>
    </div >
  )
}