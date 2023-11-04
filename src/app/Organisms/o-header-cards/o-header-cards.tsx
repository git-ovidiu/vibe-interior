import React, {ReactNode} from "react";
import HeaderCard from "@/app/Molecules/header-card/header-card"
import styles from './o-header-cards.module.scss';

export interface OrganismsHeaderCardsOptions{
	children?: ReactNode;
}
export default function OrganismHeaderCards({children}: OrganismsHeaderCardsOptions) {
	return (

		<section className={styles["o-header-cards"]}>
			<div className={"container"}>
				<div className={`${styles["main-title"]} ${styles["row"]}`}>
					<h1>Modelăm vise <br/> în spații reale</h1>
				</div>
				{children}
			</div>
		</section>
	)
};
