import { FC, PropsWithChildren } from "react";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div
			style={{
				background: "rgba(255,0,0,0.3)",
				borderRadius: "5px",
				padding: "5px",
			}}
		>
			<h3>Dark-Layout</h3>
			<div>{children}</div>
		</div>
	);
};
