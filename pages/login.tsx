import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import * as React from "react";
import { authApi } from "../api-client";
import { useAuth } from "../hooks";

export default function LoginPage() {
	const router = useRouter();
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	});
	const handleLoginClick = async () => {
		try {
			await login();
			router.push("/about");
		} catch (error) {
			console.log("Fail to login");
			console.log(error);
		}
	};
	const handleGetProfileClick = async () => {
		try {
			router.push("/about");
		} catch (error) {
			console.log("Fail to getProfile");
		}
	};
	const handleLogoutClick = async () => {
		try {
			logout();
			console.log("redirect to login page");
		} catch (error) {
			console.log("Fail to logout");
		}
	};
	return (
		<div>
			<h1>Login Page</h1>
			<p>Profile:{JSON.stringify(profile || {}, null, 4)}</p>
			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleGetProfileClick}>Go to About</button>
			<button onClick={handleLogoutClick}>Logout</button>
		</div>
	);
}
