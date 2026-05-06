import { teamMembers } from "@/app/data/teamMembers";
import TeamMemberCard from "@/app/components/TeamMemberCard";

export default function TeamPage() {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-2xl mb-3">I am team page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <TeamMemberCard key={m.name} teamMember={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
