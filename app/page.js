import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      {/* col 1: max 25rem (tailwind's w-100) | col 2: fills remaining space */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-sm sm:max-w-lg md:max-w-4xl gap-x-6 gap-y-6">
        <h1 className="order-1 md:col-start-1 mb-3 text-4xl text-center lg:text-left">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          condimentum metus. Vestibulum viverra condimentum lectus. Nullam non
          libero at sem gravida auctor. Orci varius natoque penatibus et magnis
          dis parturient montes.
        </p>

        <div className="order-4 md:col-start-1">
          <h2>Trusted by teams at:</h2>
          <div className="flex gap-x-3">
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
