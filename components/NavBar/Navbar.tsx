import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
	{
		text: "Contact",
		href: "/contact",
	},
	{
		text: "Pricing",
		href: "/pricing",
	},
];

export const NavBar = () => {
	return (
		<nav className={styles["menu-container"]}>
			{menuItems.map(({ text, href }, index) => {
				return (
					<ActiveLink
						key={index}
						text={text}
						href={href}
					></ActiveLink>
				);
			})}
		</nav>
	);
};
