import React from "react";
import styles from "./header-card.module.scss";
import Image from "next/image";
import Icon from "@/app/Atoms/icon/icon"


interface HeaderCardProps {
	icon?: string;
	iconName: string;
	iconColor: string;
	title?: string;
	divider?: boolean;
	description?: string;
	dividerName: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({dividerName, iconColor, iconName, icon, title, divider, description}) => {
	return (
		<div className={styles["m-header-card"]}>
				<div className={styles["icon"]}>
					<Icon color={iconColor} name={iconName} />
				</div>
			{title &&
			<div className={styles["title"]}>
				<h1>{title}</h1>
			</div>
			}
			{divider && (
				<div className={styles["divider"]}>
					<Icon name={dividerName} />
				</div>
			)}
			<div className={styles["description"]}>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default HeaderCard;
