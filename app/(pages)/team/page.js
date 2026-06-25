import { teamMembers } from "@/app/data/teamMembers";
import TeamMemberCard from "@/app/components/TeamMemberCard";

export default function TeamPage() {
  return (
    <div className="flex justify-center">

      <div>

        <h1 className="font-bold text-xl md:text-2xl">Our team</h1>

        <h2 className="mb-6">
          Meet the people behind our exceptional results:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6">
          {teamMembers.map((m) => (
            <div className="flex justify-center" key={m.name}>
              <TeamMemberCard key={m.name} teamMember={m} />
            </div>
          ))}




        </div>


      </div>

    </div>
  );
}
