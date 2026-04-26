import Link from "next/link";
import ExampleComponent from "@/app/components/ExampleComponent";

export default function Home() {
  return (
    <main>

      <h1 className="text-lg">I am the home page 🏠</h1>

      <Link href="/other-page" className="text-blue-800 underline">
        Click here to go to other page
      </Link>

      <ExampleComponent />

    </main>
  );
}
