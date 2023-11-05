import React, {ReactNode} from "react"
import SmallContactCard from "@/app/Molecules/small-contact-card/small-contact-card"
import CustomLink from "@/app/Atoms/buttons/custom-link/custom-link"
import styles from "./o-contact-banner.module.scss";

export interface OrganismContactBannerOptions {
	label?: ReactNode;
	title?: string;
	description?: ReactNode;
	contactCard?: ReactNode;
}

export default function OrganismContactBanner({label, title, description, contactCard}: OrganismContactBannerOptions) {
	return (
		<section className={styles["o-contact-banner"]}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7">
						{label &&
							<div className={styles["label"]}>
								{label}
							</div>
						}
						<div className={styles["content"]}>
							{title &&
								<div className={styles["title"]}>
									<h2>{title}</h2>
								</div>
							}
							{description &&
								<div className={styles["description"]}>
									{description}
								</div>
							}
						</div>
					</div>
				</div>
			</div>
			{contactCard &&
				<div className="container">
					<div className="row">
							{contactCard}
					</div>
				</div>
			}
		</section>
	)
}
