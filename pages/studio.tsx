import type { NextPage } from "next";

import Nav from "../components/Nav";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../lib/firebase";

const Studio: NextPage = (ctx: any) => {
	const [user, loading] = useAuthState(firebaseAuth);

	return (
		<>
			<Nav />
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">
						{loading ? "loading..." : user?.displayName}'s Studio
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
	);
};

export default Studio;

Studio.getInitialProps = async (ctx: any) => {
	const { req } = ctx;
	if (!firebaseAuth.currentUser) {
		ctx.res.writeHead(302, {
			Location: "/",
		});
		ctx.res.end();
	}
	return firebaseAuth.currentUser;
};
