import React from "react";
import styles from "./footer.module.scss";
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"
import Link from "next/link"

export default function Footer() {
	return (
		<section className={styles["footer"]}>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className={styles["description"]}>
							<p>Elementum pellentesque felis in habitasse. Sapien arcu arcu varius tempor amet hac
								tincidunt. Faucibus elementum porttitor arcu convallis pretium. At tristique et enim
								platea.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className={styles["navigation-links"]}>
							<h3>Portofoliu</h3>
							<h3>About</h3>
							<h3>Procesul Nostru</h3>
							<h3>Apariții Media</h3>
							<h3>Contact</h3>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className={styles["bottom"]}>
							<div className="logo">
								<CustomIcon name={"logo"}/>
							</div>

							<div className={styles["bottom-right"]}>
								<div className={styles["copyright"]}>
									<p>© 2022 Vibe Interior, All rights reserved.</p>
									<p>office@vibe-interior.ro</p>
								</div>
								<div className={`${styles["social-icons"]} social-icons`}>
									<Link href={"/"}><CustomIcon name={"facebook"}/></Link>
									<Link href={"/"}><CustomIcon name={"linkedin"}/></Link>
									<Link href={"/"}><CustomIcon name={"youtube"}/></Link>
									<Link href={"/"}><CustomIcon name={"instagram"}/></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
