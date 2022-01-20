import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "../api-client";

export const useAuth = (options?: Partial<PublicConfiguration>) => {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR("/profile", {
		dedupingInterval: 60 * 60 * 1000, //1hour
		revalidateOnFocus: false,
		...options,
	});

	const firstLoading = profile === undefined && error === undefined;
	console.log(firstLoading);
	const login = async () => {
		await authApi.login({ username: "sang", password: "123123" });
		await mutate();
	};
	const logout = async () => {
		await authApi.logout();
		mutate({}, false);
	};
	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	};
};
