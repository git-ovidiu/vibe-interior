import React, {ReactNode} from "react";
import styles from "./background-template.module.scss";
import Image from "next/image"

interface BackgroundOptions {
	cornerImage?: string;
	children?: ReactNode;
}

export default function BackgroundTemplate({cornerImage, children}: BackgroundOptions) {
	return (
		<section className={styles["background-template"]}>
			{cornerImage &&
				<picture>
					<Image
						src={cornerImage}
						layout={"fill"} objectFit={"cover"} alt={"Placeholder"} priority/>
				</picture>
			}
			{children}
		</section>
	);
}
