import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link"
import DarkModeButton from "@/app/utils/Dark-Mode/dark-mode"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"

export default function Navbar() {
	return (
		<div className="container"	>
			<section className={styles["navbar"]}>
				<div className="logo">
					<CustomIcon name={"logo"} color={"white"}/>
				</div>

				<div className={styles["links"]}>
					<Link href={"/"}>Portofoliu</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Procesul Nostru</Link>
					<Link href={"/"}>Apariții Media</Link>
					<Link href={"/"}>Contact</Link>
					<DarkModeButton />

				</div>
			</section>
		</div>
	)
}
