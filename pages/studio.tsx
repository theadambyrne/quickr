import type { NextPage } from "next";
import Head from "next/head";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../lib/firebase";

import Nav from "../components/Nav";
import AddNewSiteButton from "../components/AddNewSiteButton";

const Studio: NextPage = () => {
	const [user, loading] = useAuthState(firebaseAuth);

	return (
		<>
			<Head>
				<title>Quickr</title>
				<meta name="title" content="Quickr" />
				<meta
					name="description"
					content="Create landing pages quickly with no code"
				/>
				<meta
					name="keywords"
					content="nocode, landing page, freelance, web design, "
				/>
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Adam Byrne" />
			</Head>
			<Nav />

			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center space-x-5">
					{user ? (
						<>
							<img
								alt={user?.displayName!}
								src={user?.photoURL!}
								width={50}
								height={50}
							/>
							<h1 className="text-3xl font-bold text-gray-900 ">Studio</h1>
						</>
					) : (
						<h1 className="text-3xl font-bold text-gray-900 ">
							Login to access your Studio
						</h1>
					)}
				</div>
			</header>
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
					<div className="px-4 py-6 sm:px-0">
						<div className="border-4 border-dashed border-gray-200 rounded-lg h-96 shadow-inner">
							<div className="flex flex-wrap">
								<AddNewSiteButton />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Studio;
