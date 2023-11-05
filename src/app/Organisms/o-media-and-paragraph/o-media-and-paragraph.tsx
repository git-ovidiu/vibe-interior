import React, {ReactNode} from "react";
import styles from "./o-media-and-paragraph.module.scss";

export interface OrganismMediaAndParagraphOptions {
	label?: ReactNode;
	image?: ReactNode;
	behindTitle?: string;
	title: string;
	descriptionBigger: string;
	description: string;
	actions: ReactNode;
}

export default function OrganismMediaAndParagraph({
													  label,
													  image,
													  behindTitle,
													  title,
													  descriptionBigger,
													  description,
													  actions
												  }: OrganismMediaAndParagraphOptions) {
	return (
		<section className={styles["o-media-and-paragraph"]}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className={styles["label"]}>{label}</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-5">
						<div className={styles["media"]}>
							<div className={styles["image"]}>
								{image}
							</div>
						</div>
					</div>
					<div className="col-12 col-md-7">
						<div className={styles["title"]}>
							<h2>{title}</h2>
						</div>
						<div className={styles['descriptions']}>
							<div className={styles["description-bigger"]}>
								<p>{descriptionBigger}</p>
							</div>
							<div className={styles["description"]}>
								<p>{description}</p>
							</div>
						</div>
						<div className={styles["actions"]}>
							{actions}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
