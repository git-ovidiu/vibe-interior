import React, {ReactNode} from "react";
import styles from "./small-contact-card.module.scss";
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"


interface HeaderCardProps {
	title?: string;
	divider?: boolean;
	description?: string;
	action?: ReactNode;
}

const SmallContactCard: React.FC<HeaderCardProps> = ({title, divider, description, action}) => {
	return (
		<div className={styles["m-header-card"]}>
			{title &&
			<div className={styles["title"]}>
				<h3>{title}</h3>
			</div>
			}
			{divider && (
				<div className={styles["divider"]}>
					<CustomIcon name={"divider_small"} />
				</div>
			)}
			<div className={styles["description"]}>
				<p>{description}</p>
			</div>
			<div className={styles["action"]}>
				{action}
			</div>
		</div>
	);
}

export default SmallContactCard;
