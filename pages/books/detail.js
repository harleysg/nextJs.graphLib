import Head from "next/head";
import React from "react";
import { Query } from "react-apollo";
import Router from "next/router";

import Book from "../../components/commons/Book";

import { DETAIL_BOOK_QUERY } from "../../queries/books.queries.js";

import { dateFormate } from "../../services/index.js";

const imgDefault =
	"https://a5e8126a499f8a963166-f72e9078d72b8c998606fd6e0319b679.ssl.cf5.rackcdn.com/images/preloaded_product_box.gif";

function BookDetail({ id }) {
	function navigateToBack(e) {
		e.preventDefault();
		Router.back();
	}
	if (!id) {
		return (
			<>
				<div className={"container"}>
					<div className="alert alert-danger">
						Id de libro necesario para la consulta
					</div>
				</div>
			</>
		);
	}
	return (
		<div className={"container"}>
			<button
				onClick={navigateToBack}
				className={"btn btn-secondary mb-3"}
			>
				go back
			</button>
			<Query query={DETAIL_BOOK_QUERY} variables={{ id }}>
				{({ loading, error, data }) => {
					if (error) return <>{error.message}</>;
					if (loading) {
						return (
							<div className={"c-book-detail"}>
								{"a".split("").map((demo) => (
									<Book key={demo} loading={true} />
								))}
							</div>
						);
					} else {
						const {
							title,
							description,
							image,
							createdAt,
							updatedAt,
						} = data.book;
						return (
							<>
								<Head>
									<title>GraphiLi | {title}</title>
								</Head>
								<div className={"c-book-detail"}>
									<div className="row">
										<div className="col-4 col-sm-4 col-md-3">
											<img
												src={image || imgDefault}
												alt={title}
												className={
													"img-fluid c-book-detail__image"
												}
											/>
										</div>
										<div className="col-8 col-sm-8 col-md-9">
											<h4
												className={
													"c-book-detail__title"
												}
											>
												{title}
											</h4>
											<div>
												<ul>
													<li>
														<strong>
															Created:{" "}
														</strong>{" "}
														<span>
															{dateFormate(
																createdAt
															)}
														</span>
													</li>
													<li>
														<strong>
															Updated:{" "}
														</strong>{" "}
														<span>
															{dateFormate(
																updatedAt
															)}
														</span>
													</li>
												</ul>
											</div>
											<details open>
												<summary>Description</summary>
												<p>{description}</p>
											</details>
											<details>
												<summary>Comentarios</summary>
												<div className="c-book-detail__comments"></div>
											</details>
										</div>
									</div>
								</div>
							</>
						);
					}
				}}
			</Query>
		</div>
	);
}

BookDetail.getInitialProps = ({ query }) => {
	return {
		id: query.id,
	};
};

export default BookDetail;
