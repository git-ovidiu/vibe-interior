import React, {ReactNode} from "react";
import styles from "./title-behind.module.scss";
import Label from "@/app/Atoms/label/label"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"

interface TitleBehindOptions {
	children: ReactNode;
	behindTitle: string;
	marginTop: string;
}

export default function TitleBehind({children, marginTop, behindTitle}: TitleBehindOptions) {
	return (
		<section className={styles["o-title-behind"]}>
			<div className={styles['title']}>
				<span>{behindTitle}</span>
			</div>
			<div className={styles["children"]} style={{ marginTop: marginTop }}>
					{children}
			</div>
		</section>
	)
}
