import React, {ReactNode} from "react";
import styles from "./o-team-cards.module.scss";
import Label from "@/app/Atoms/label/label"
import TeamCard from "@/app/Molecules/team-card/team-card"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"

export interface OrganismsTeamCardsOptions {
	children?: ReactNode;
	title?: ReactNode;
}

export default function OrganismTeamCards({children, title}: OrganismsTeamCardsOptions) {
	return (

		<section className={styles["o-team-cards"]}>
			<div className="container">
				<div className={`${styles["main-title"]}`}>
					<div className={styles["label"]}>
						<Label text={"Specialists"} icon={<CustomIcon name={"circle"} color={"#FFA500"}/>}/>
					</div>
					<div className={styles["title"]}>
						{title}
					</div>
				</div>
			</div>
			<div className="container">
				<div className={`row ${styles.row}`}>
					{children}
				</div>
			</div>
		</section>
	)
};
