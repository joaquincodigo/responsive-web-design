import Link from "next/link";

export default function OtherPage() {

	return (
		<main>
			<h1 className="text-lg">
				I am the other page contents
			</h1>

			<Link href="/" className="text-blue-800 underline">
				Back to home
			</Link>
		</main>
	);

}