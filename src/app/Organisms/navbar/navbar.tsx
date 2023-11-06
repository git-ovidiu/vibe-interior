"use client"

import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link"
import DarkModeButton from "@/app/utils/Dark-Mode/dark-mode"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"
import {motion} from "framer-motion";

export default function Navbar() {
	return (
		<div className="container">
			<section className={styles["navbar"]}
			>
				<motion.div className="logo"
					 initial={{x: '-100%', opacity: 0}}
					 animate={{x: 0, opacity: 1}}
					 transition={{duration: 0.5, delay: 0.1}}
				>
					<CustomIcon name={"logo"} color={"white"}/>
				</motion.div>

				<motion.div className={styles["links"]}
							initial={{y: '-100%', opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{duration: 0.5, delay: 0.1}}
				>
					<Link href={"/"}>Portofoliu</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Procesul Nostru</Link>
					<Link href={"/"}>Apariții Media</Link>
					<Link href={"/contact"}>Contact</Link>
					<DarkModeButton/>

				</motion.div>
			</section>
		</div>
	)
}
