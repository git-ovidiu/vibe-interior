import React, { ReactNode } from "react";
import styles from "./o-media-with-filter.module.scss";

export interface OrganismMediaWithFilterOptions {
	image1?: ReactNode;
	image2?: ReactNode;
	descriptionBigger: string;
	description: string;
}

export default function OrganismMediaWithFilter({
													image1,
													image2,
													descriptionBigger,
													description,
												}: OrganismMediaWithFilterOptions) {
	return (
		<section className={styles["o-media-with-filter"]}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-7">
						<div className={styles["descriptions"]}>
							<div className={styles["description-bigger"]}>
								<p>{descriptionBigger}</p>
							</div>
							<div className={styles["description"]}>
								<p>{description}</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-5">
						<div className={styles["media"]}>
							<div className={styles["image"]}>
								{image1}
								{image2 && <div className={styles["hover-image"]}>{image2}</div>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
