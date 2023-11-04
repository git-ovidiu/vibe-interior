import React from "react";
import styles from "./navbar.module.scss";
import Icon from "@/app/Atoms/icon/icon"
import Link from "next/link"

export default function Navbar() {
	return (
		<div className="container">
			<section className={styles["navbar"]}>
				<div className={styles["logo"]}>
					<Icon name={"logo"} color={"white"}/>
				</div>

				<div className={styles["links"]}>
					<Link href={"/"}>Portofoliu</Link>
					<Link href={"/"}>About</Link>
					<Link href={"/"}>Procesul Nostru</Link>
					<Link href={"/"}>Apariții Media</Link>
					<Link href={"/"}>Contact</Link>
				</div>
			</section>
		</div>
	)
}
