import App from "next/app";
import LayoutComponent from "../components/commons/layoutComponent";
import "../styles/index.scss";

import withApolloConfig from "../components/apollo/withApolloConfig";

import { ApolloProvider } from "react-apollo";

function LibraryApp({ Component, apollo, pageProps }) {
	return (
		<ApolloProvider client={apollo}>
			<LayoutComponent>
				<Component {...pageProps} />
			</LayoutComponent>
		</ApolloProvider>
	);
}

export default withApolloConfig(LibraryApp);
