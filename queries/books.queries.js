import gql from "graphql-tag";

// No se pueden usar string para las queries, se necesita graphql-tag
export const ALL_BOOKS_QUERY = gql`
	query ALL_BOOKS_QUERY {
		books {
			title
			createdAt
			id
			thumbnail
		}
	}
`;

export const DETAIL_BOOK_QUERY = gql`
	query DETAIL_BOOK_QUERY($id: ID!) {
		book(where: { id: $id }) {
			title
			description
			image
			id
			createdAt
			updatedAt
		}
	}
`;
