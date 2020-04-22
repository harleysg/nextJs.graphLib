import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Book from "../../components/commons/Book";

// No se pueden usar string para las queries, se necesita graphql-tag
const ALL_BOOKS_QUERY = gql`
	query ALL_BOOKS_QUERY {
		books {
			title
			createdAt
			id
		}
	}
`;

export default function Books() {
	return (
		<div className={"container"}>
			<Query query={ALL_BOOKS_QUERY}>
				{({ loading, error, data }) => {
					if (error) return <>{error.message}</>;
					if (loading) {
						return <>loading...</>;
					} else {
						{
							return (
								<div className={"row"}>
									{data.books.map(
										({ title, id, thumbnail }) => (
											<div
												className={
													"col-12 col-sm-4 col-md-3 col-lg-2"
												}
												key={id}
											>
												<Book
													title={title}
													id={id}
													thumbnail={thumbnail}
												/>
											</div>
										)
									)}
								</div>
							);
						}
					}
				}}
			</Query>
		</div>
	);
}
