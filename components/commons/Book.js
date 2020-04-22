import React from "react";

export default function Book({ id, title, thumbnail }) {
	function navigateToDetail(e, id) {
		e.preventDefault();
		console.log(`navigateToDetail -> id`, id);
	}
	return (
		<>
			<div className={"c-book"}>
				<div className={"c-book__thumbnail"}>
					<a onClick={(e) => navigateToDetail(e, id)} href="#">
						<img
							src={thumbnail}
							alt={title}
							className={"img-fluid c-book__thumbnail--image"}
						/>
					</a>
				</div>
				<h4 className={"c-book__title"}>{title}</h4>
				{/* <DeleteBook id={book.id}>x</DeleteBook> */}
			</div>
		</>
	);
}
