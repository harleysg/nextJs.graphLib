import React from "react";

const imgDefault =
	"https://a5e8126a499f8a963166-f72e9078d72b8c998606fd6e0319b679.ssl.cf5.rackcdn.com/images/preloaded_product_box.gif";

export default function Book({ id, title, thumbnail, image, loading }) {
	if (loading) {
		return (
			<div className={"c-book is-loading"}>
				<img
					src={imgDefault}
					alt={"lading"}
					className={"img-fluid c-book__thumbnail--image"}
				/>
			</div>
		);
	} else {
		return (
			<div className={"c-book"}>
				<div className={"c-book__thumbnail"}>
					<img
						src={image || thumbnail || imgDefault}
						alt={title}
						className={"img-fluid c-book__thumbnail--image"}
					/>
				</div>
				<h4 className={"c-book__title"}>{title}</h4>
			</div>
		);
	}
}
