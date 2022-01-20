import { LayoutProps } from "@/models/index"
import * as React from "react"
import Link from "next/link"
import { Auth } from "../common"
export interface IAminLayoutProps {}

export function AminLayout({ children }: LayoutProps) {
	return (
		<Auth>
			<h1>Amin Layout</h1>
			<div>Sidebar</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>{children}</div>
		</Auth>
	)
}
