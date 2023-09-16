import { ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.css";

type NexPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => JSX.Element;
};

type appPropsWithLayout = AppProps & {
	Component: NexPageWithLayout;
};

export default function App({ Component, pageProps }: appPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);
	return getLayout(<Component {...pageProps} />);
}
