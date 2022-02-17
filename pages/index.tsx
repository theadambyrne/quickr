import type { NextPage } from "next";

import Nav from "../components/Nav";

import { firebaseAuth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";

const Home: NextPage = () => {
	const [user, loading] = useAuthState(firebaseAuth);

	return (
		<>
			{" "}
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
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="author" content="Adam Byrne" />
			</Head>
			<Nav />
			<div className="mx-auto text-center">
				<p>Home page</p>
			</div>
		</>
	);
};

export default Home;
