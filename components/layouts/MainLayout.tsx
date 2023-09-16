import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { NavBar } from "../NavBar/Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Home- Aldahir</title>
				<meta
					name="description"
					content="Home page appnext-Aldahir"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<NavBar />
			<main className={`${styles.main}`}>{children}</main>

			<footer className={`${styles.footer}`}>
				<p>{new Date().getFullYear()}</p>
			</footer>
		</>
	);
};
