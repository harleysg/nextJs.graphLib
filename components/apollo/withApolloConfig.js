import withApollo from "next-with-apollo";
import ApolloCliente from "apollo-boost";

/**
 * Crear conexxión al endPoint {uri}
 * @param {headers} ....
 */
function CreateApolloClient({ headers }) {
	return new ApolloCliente({
		uri: `http://localhost:4000`,
		request: (operation) => {
			operation.setContext({
				fetchOptions: {
					credentials: "include",
				},
				headers,
			});
		},
	});
}

export default withApollo(CreateApolloClient);
