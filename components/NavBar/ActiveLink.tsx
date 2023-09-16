import { CSSProperties, FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const estilos: CSSProperties = {
	color: "#ffff",
	textDecoration: "underline",
	fontWeight: "bold",
};

interface Props {
	text: string;
	href: string;
}
export const ActiveLink: FC<Props> = ({ text, href }) => {
	const { asPath } = useRouter();

	return (
		<Link href={href}>
			<span style={asPath === href ? estilos : undefined}>{text}</span>
		</Link>
	);
};
