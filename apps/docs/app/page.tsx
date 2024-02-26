import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "./source";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Github, Home, List } from "lucide-react";

export default function HomePage() {
	return (
		<DocsLayout
			tree={pageTree}
			nav={{ title: "tnum", githubUrl: "https://github.com/hota1024/tnum" }}
			sidebar={{ enabled: false }}
		>
			<main className="max-w-7xl flex flex-col px-4 mx-auto items-center">
				<section
					className="grid place-items-center"
					style={{ height: "calc(100dvh - 64px)" }}
				>
					<div>
						<h1 className="text-8xl text-center">tnum</h1>
						<div className="my-4">
							<p className="text-gray-400">
								enum class, match expression and Rust-like standard enums for{" "}
								<span className="text-[#3075c1]">TypeScript</span>.
							</p>
						</div>
						<Cards>
							<Card
								icon={<Home />}
								title="Document Top"
								description="Introduction, Installation"
								href="/docs"
							/>
							<Card
								icon={<List />}
								title="Core API"
								description="Learn How to create your own enums."
								href="/docs/core"
							/>
							<Card
								icon={<List />}
								title="Standard Enums"
								description="Learn Standard enums."
								href="/docs/std"
							/>
							<Card
								icon={<Github />}
								title="GitHub"
								description="View tnum source code."
								href="https://github.com/hota1024/tnum"
								external
							/>
						</Cards>
					</div>
				</section>
			</main>
		</DocsLayout>
	);
}
