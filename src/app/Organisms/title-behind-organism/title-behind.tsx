import React, {ReactNode} from "react";
import styles from './title-behind.module.scss';

interface TitleBehindOptions{
	children: ReactNode;
}
export default function TitleBehind({children}: TitleBehindOptions){
	return(
		<section className={styles["o-title-behind"]}>
			<div className="title">
				<span>ABOUT</span>
			</div>
			{children}
		</section>
	)
}
