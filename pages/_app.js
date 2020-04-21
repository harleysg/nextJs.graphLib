import App, { Container } from "next/app";
import LayoutComponent from "../components/commons/layoutComponent";
import "../styles/index.scss";

export default function LibraryApp({ Component }) {
	return (
		<Container>
			<LayoutComponent>
				<Component />
			</LayoutComponent>
		</Container>
	);
}
