import { pageTree } from "@/app/source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={pageTree}
			nav={{
				title: "tnum",
				githubUrl: "https://github.com/hota1024/tnum",
			}}
		>
			{children}
		</DocsLayout>
	);
}
