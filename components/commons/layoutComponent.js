import React from "react";

export default function LayoutComponent({ children }) {
	return (
		<>
			<header className={"o-header"}>GraphiLi</header>
			<main className={"o-main"}>{children}</main>
		</>
	);
}
