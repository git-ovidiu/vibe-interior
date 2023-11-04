import React from "react";
import HeaderCard from "@/app/Molecules/header-card/header-card"
import styles from './o-header-cards.module.scss';


export default function OrganismHeaderCards() {
	return (

		<section className={styles["o-header-cards"]}>
			<div className={"container"}>
				<div className="row">
					<div className="col-12 col-md-3">
						<HeaderCard title={"Visionary Designs"}
									description={"We envision spaces that inspire, blending imagination with functionality to create interiors that stand the test of time."}
									iconColor={"red"}
									iconName={"letter_v"}
									divider
									dividerName={"divider_large"}
						/>
					</div>
					<div className="col-12 col-md-3">
						<HeaderCard title={"Innovative Solutions"}
									description={"Our creative problem-solving and innovative design solutions transform your spaces into remarkable environments that exceed your expectations."}
									iconColor={"red"}
									iconName={"letter_i"}
									divider
									dividerName={"divider_large"}
						/>
					</div>
					<div className="col-12 col-md-3">
						<HeaderCard title={"Bold Creations"}
									description={"With an unapologetically daring approach, we craft unique and striking designs that make a statement and elevate your living spaces."}
									iconColor={"red"}
									iconName={"letter_b"}
									divider
									dividerName={"divider_large"}
						/>
					</div>
					<div className="col-12 col-md-3">
						<HeaderCard title={"Endless Possibilities"}
									description={"Your vision is our canvas. We turn dreams into reality by offering a wide range of design possibilities tailored to your taste and lifestyle."}
									iconColor={"red"}
									iconName={"letter_e"}
									divider
									dividerName={"divider_large"}
						/>
					</div>
				</div>
			</div>
		</section>
	)
};
