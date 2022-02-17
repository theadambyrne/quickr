import type { NextPage } from "next";

import Nav from "../components/Nav";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../lib/firebase";

const Studio: NextPage = (ctx: any) => {
	const [user, loading] = useAuthState(firebaseAuth);

	return (
		<>
			<Nav />
			{user ? (
				<>
					<header className="bg-white shadow">
						<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold text-gray-900">
								{loading ? "loading..." : user?.displayName}&apos;s Studio
							</h1>
						</div>
					</header>
					<main>
						<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
							<div className="px-4 py-6 sm:px-0">
								<div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
							</div>
						</div>
					</main>
				</>
			) : (
				<p>Login please</p>
			)}
		</>
	);
};

export default Studio;
