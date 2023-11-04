import React from "react";
import styles from "./header-card.module.scss";
import Image from "next/image";
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"


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
					<CustomIcon color={iconColor} name={iconName} />
				</div>
			{title &&
			<div className={styles["title"]}>
				<h3>{title}</h3>
			</div>
			}
			{divider && (
				<div className={styles["divider"]}>
					<CustomIcon name={dividerName} />
				</div>
			)}
			<div className={styles["description"]}>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default HeaderCard;
