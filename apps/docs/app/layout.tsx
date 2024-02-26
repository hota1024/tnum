import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "tnum",
		template: "%s - tnum",
	},
	description:
		"enum class, match expression and Rust-like standard enums for TypeScript.",
	openGraph: {
		title: {
			default: "tnum",
			template: "%s - tnum",
		},
		description:
			"enum class, match expression and Rust-like standard enums for TypeScript.",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
