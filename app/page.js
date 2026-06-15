'use client'
import { useState } from 'react'
import { Smartphone, Tablet, Monitor, Laptop } from 'lucide-react'
import { TURBOPACK_CLIENT_BUILD_MANIFEST } from 'next/dist/shared/lib/constants'

const DEVICES = [
  { label: 'Phone', Icon: Smartphone, width: 320, height: 568 },
  { label: 'Tablet portrait', Icon: Tablet, width: 480, height: 640 },
  { label: 'Tablet landscape', Icon: Tablet, width: 768, height: 540 },
  { label: 'Notebook', Icon: Laptop, width: 1280, height: 768 },
]

const MAX_W = 900

export default function RootPage({ url }) {

  url = "http://localhost:3000/home"
  const [index, setIndex] = useState(3)
  const d = DEVICES[index]
  const scale = Math.min(1, MAX_W / d.width)

  return (
    <div className="flex flex-col items-center gap-6">

      {/* iframe */}
      <div
        className="overflow-hidden border border-neutral-200 rounded"
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
        <div className="flex justify-between w-full px-1 bg-red-100">
          {DEVICES.map(({ label, Icon }, i) => (
            <button
              key={label}
              onClick={() => setIndex(i)}
              className="flex flex-col items-center gap-1 group"
            >
              <Icon
                size={20}
                className={`
                  transition-colors
                  ${i === index ? 'text-neutral-800' : 'text-neutral-400'}
                  ${DEVICES[i].label === 'Tablet landscape' ? '-rotate-90' : ''}
                  `}
              />
              {/* <span className={`text-[10px] tracking-wide uppercase transition-colors ${i === index ? 'text-neutral-700' : 'text-neutral-400'
                }`}>
                {label}
              </span> */}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative w-full flex items-center px-">
          <div className="absolute inset-x-0 h-px bg-neutral-300" />
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

      </div>
    </div >
  )
}