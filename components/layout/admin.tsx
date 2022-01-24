import { LayoutProps } from "@/models/index";
import * as React from "react";
import Link from "next/link";
import { Auth } from "../common";
import { useAuth } from "@/hooks/useAuth";
export interface IAminLayoutProps {}

export function AminLayout({ children }: LayoutProps) {
	const { profile, logout } = useAuth({
		revalidateOnMount: false,
	});
	const handleLogoutClick = async () => {
		try {
			logout();
			console.log("redirect to login page");
		} catch (error) {
			console.log("Fail to logout");
		}
	};
	return (
		<Auth>
			<h1>Amin Layout</h1>
			<div>Sidebar</div>
			<p>Profile:{JSON.stringify(profile)}</p>
			<Link href="/">
				<a>Home</a>
			</Link>
			<br />

			<Link href="/about">
				<a>About</a>
			</Link>
			<br />
			<button onClick={handleLogoutClick}>Logout</button>
			<div>{children}</div>
		</Auth>
	);
}
