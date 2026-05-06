import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="text-2xl mb-3">Here goes the title</h1>
          <div className="flex items-start flex-col gap-y-3 md:gap-y-0 md:gap-x-3 md:flex-row">
            <Image
              src="/android-chrome-512x512.png"
              alt="Avatar"
              width={512} // intrinsic width
              height={512} // intrinsic height
              priority // preload (for above-the-fold)
              className="aspect-square w-100 shrink-0"
            />
            <div className="flex flex-col gap-y-3 max-w-100">
              <h2 className="font-bold text-xl ">I am first title</h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                a condimentum metus. Vestibulum viverra condimentum lectus.
                Nullam non libero at sem gravida auctor. Orci varius natoque
                penatibus et magnis dis parturient montes.
              </p>
              <h2 className="font-bold text-xl">I am second title</h2>
              <p className="text-justify">
                Nullam consectetur diam urna, sed accumsan odio facilisis ac.
                Donec lacinia mauris sit amet bibendum varius. Sed mattis
                volutpat bibendum. In at commodo tellus, nec consequat diam.
                Maecenas finibus fringilla arcu a suscipit. Phasellus non massa
                dignissim, semper magna id, blandit nulla. Maecenas eu erat sed
                nisl pulvinar maximus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
