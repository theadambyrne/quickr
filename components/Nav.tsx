import React, { useState } from "react";
import Link from "next/link";

import { firebaseAuth, githubProvider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [user, loading] = useAuthState(firebaseAuth);

	const handleLogin = async () => {
		await signInWithPopup(firebaseAuth, githubProvider).catch(console.error);
	};

	const handleLogout = async () => {
		await firebaseAuth.signOut();
	};
	return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 mb-3">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href="/" passHref>
						<a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
							QUICKR
						</a>
					</Link>

					<button
						className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						{navbarOpen ? <span>&uarr;</span> : <span>&darr;</span>}
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow items-center" +
						(navbarOpen ? " flex" : " hidden")
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						{user && (
							<>
								<li className="nav-item">
									<Link href="/studio" passHref>
										<a className="px-3 py-2 flex items-center text-sm uppercase  leading-snug text-white hover:opacity-75">
											Studio
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/profile" passHref>
										<a className="px-3 py-2 flex items-center text-sm uppercase  leading-snug text-white hover:opacity-75">
											Profile
										</a>
									</Link>
								</li>
							</>
						)}

						<li className="nav-item">
							{user ? (
								<Link href="/login" passHref>
									<a
										onClick={handleLogout}
										className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75"
									>
										Logout
									</a>
								</Link>
							) : (
								<a
									onClick={handleLogin}
									className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75"
								>
									Login with GitHub
								</a>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
