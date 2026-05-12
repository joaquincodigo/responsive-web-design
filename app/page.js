import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center gap-x-3 ">
        <div className=" max-w-100 ">
          <h1 className="mb-3 text-4xl">
            We help you make the{" "}
            <span className="font-bold">decisions that deliver</span>
          </h1>

          <p className="text-justify mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
            condimentum metus. Vestibulum viverra condimentum lectus. Nullam non
            libero at sem gravida auctor. Orci varius natoque penatibus et
            magnis dis parturient montes.
          </p>

          <h2>Trusted by teams at:</h2>
          <div className="flex gap-x-3">
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
            <div className="bg-slate-500 w-10 h-10"></div>
          </div>
        </div>

        <Image
          src="/hero.jpg"
          alt="Two man talking at NorthBridge headquartrs."
          width={800} // intrinsic width
          height={800} // intrinsic height
          priority // preload (for above-the-fold)
          className="aspect-square w-100 shrink-0"
        />
      </div>
    </>
  );
}
