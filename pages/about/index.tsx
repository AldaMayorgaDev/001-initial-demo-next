import { ReactNode } from "react";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

const AboutPage = () => {
	return (
		<>
			<h1 className={"title"}>
				Ir a <Link href="/">Home</Link>
			</h1>

			<p className={"description"}>
				Usted esta aqui 🗺 [About Page]
				<code className={"code"}>About /</code>
			</p>
		</>
	);
};

AboutPage.getLayout = function getLayout(page: ReactNode) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
export default AboutPage;
