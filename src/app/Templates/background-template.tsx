'use client'
import React, {ReactNode} from "react";
import styles from "./background-template.module.scss";
import Image from "next/image"
import {motion} from 'framer-motion';

interface BackgroundOptions {
	cornerImage?: string;
	children?: ReactNode;
}

export default function BackgroundTemplate({cornerImage, children}: BackgroundOptions) {
	return (
		<section className={styles["background-template"]}>
			{cornerImage &&
				<motion.picture
					initial={{y: -100, x: 100, opacity: 0}}
					animate={{y: 0, x: 0, opacity: 1}}
					transition={{duration: 0.5, delay: 0.1}}
				>
					<Image
						src={cornerImage}
						layout={"fill"} objectFit={"cover"} alt={"Placeholder"} priority/>
				</motion.picture>
			}
			<motion.div
				initial={{y: -300, opacity: 0, scale: 0.7}}
				animate={{y: 0, opacity: 1, scale: 1}}
				transition={{duration: 0.5, delay: 0.1}}
			>
				{children}
			</motion.div>
		</section>
	);
}
