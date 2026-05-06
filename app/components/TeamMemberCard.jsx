import Image from "next/image";

export default function TeamMemberCard({ teamMember }) {
  return (
    <div className="shadow-lg shadow-brand-blue/20 max-w-80">
      <Image
        src={teamMember.imageFile}
        alt="Avatar"
        width={512} // intrinsic width
        height={512} // intrinsic height
        priority // preload (for above-the-fold)
        className="aspect-square flex"
      />
      <div className="p-1.5">
        <h2 className="font-bold text-lg">{teamMember.name}</h2>
        <p className="italic text-lg mb-1.5">{teamMember.role}</p>
        <p>{teamMember.description}</p>
      </div>
    </div>
  );
}
