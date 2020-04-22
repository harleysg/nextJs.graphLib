import React from "react";
import Header from "./Header";

export default function LayoutComponent({ children }) {
	return (
		<>
			<Header></Header>
			<main className={"o-main"}>{children}</main>
		</>
	);
}
