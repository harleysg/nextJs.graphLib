import Head from "next/head";
import React from "react";
import { Query } from "react-apollo";
import Router from "next/router";

import Book from "../../components/commons/Book";
import { ALL_BOOKS_QUERY } from "../../queries/books.queries.js";

export default function Books() {
	function navigateToDetailPage(e, id) {
		e.preventDefault();
		Router.push(`/books/detail?id=${id}`);
	}
	return (
		<div className={"container"}>
			<Query query={ALL_BOOKS_QUERY}>
				{({ loading, error, data }) => {
					if (error) return <>{error.message}</>;
					if (loading) {
						return (
							<div className={"c-grid-book"}>
								{"abcdefghij".split("").map((demo) => (
									<Book key={demo} loading={true} />
								))}
							</div>
						);
					} else {
						return (
							<>
								<Head>
									<title>GraphiLi | Lista de libros</title>
								</Head>
								<div className={"c-grid-book"}>
									{data.books.map(
										({ title, id, thumbnail }) => (
											<a
												onClick={(e) =>
													navigateToDetailPage(e, id)
												}
												href={`#`}
												key={id}
											>
												<Book
													title={title}
													id={id}
													thumbnail={thumbnail}
													loading={false}
												/>
											</a>
										)
									)}
								</div>
							</>
						);
					}
				}}
			</Query>
		</div>
	);
}
