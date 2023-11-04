import React, {ReactNode} from "react";
import styles from './label.module.scss';

interface LabelOptions{
	icon?: ReactNode;
	text: string;
}

export default function Label({icon, text}: LabelOptions){
	return(
		<div className={styles["a-label"]}>
			{icon &&
			<div className={styles["icon"]}>
				{icon}
			</div>
			}
			<p className={`${styles["text"]}`}>
				{text}
			</p>
		</div>
	)
}
