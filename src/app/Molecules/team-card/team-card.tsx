import React from "react"
import styles from "./team-card.module.scss";
import Image from "next/image"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"

interface TeamCardOptions {
	imageSrc: string;
	title: string;
	divider: boolean;
	description: string;
}

export default function TeamCard({imageSrc, title, divider, description}: TeamCardOptions) {
	return (
		<div className={styles["m-team-card"]}>
			<picture>
				<Image src={imageSrc} alt={title} fill objectFit={"cover"}/>
			</picture>

			<div className={styles["content"]}>
				<h3>{title}</h3>
				{divider &&
					<CustomIcon name={"divider_small"}/>
				}
				<p>{description}</p>
			</div>
		</div>
	)
}
