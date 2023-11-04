import React from "react";
import styles from "./navbar.module.scss";
import Icon from "@/app/Atoms/icon/icon"
import Link from "next/link"
import DarkModeButton from "@/app/utils/Dark-Mode/dark-mode"

export default function Navbar() {
	return (
		<div className="container-fluid"	>
			<section className={styles["navbar"]}>
				<div className="logo">
					<Icon name={"logo"} color={"white"}/>
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
