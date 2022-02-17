import type { NextPage } from "next";
import Link from "next/link";

import Nav from "../components/Nav";

import { firebaseAuth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home: NextPage = () => {
	const [user, loading] = useAuthState(firebaseAuth);

	return (
		<>
			<Nav />
			<div className="mx-auto text-center">
				<p>Home page</p>
			</div>
		</>
	);
};

export default Home;
