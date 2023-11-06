import React from "react";
import BackgroundTemplate from "@/app/Templates/background-template"
import OrganismHeaderCards from "@/app/Organisms/o-header-cards/o-header-cards"
import HeaderCard from "@/app/Molecules/header-card/header-card"
import TitleBehind from "@/app/Organisms/title-behind-organism/title-behind"
import OrganismMediaAndParagraph from "@/app/Organisms/o-media-and-paragraph/o-media-and-paragraph"
import Label from "@/app/Atoms/label/label"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon";
import Image from "next/image"
import OrganismTeamCards from "@/app/Organisms/o-team-cards/o-team-cards"
import TeamCard from "@/app/Molecules/team-card/team-card"
import OrganismMediaWithFilter from "@/app/Organisms/o-media-with-filter/o-media-with-filter"
import SmallContactCard from "@/app/Molecules/small-contact-card/small-contact-card"
import CustomLink from "@/app/Atoms/buttons/custom-link/custom-link"
import OrganismContactBanner from "@/app/Organisms/o-contact-banner/o-contact-banner"


export default function Homepage() {
	return (
		<>

			<BackgroundTemplate
				cornerImage={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699123391/demo_evtkkz.png"}
			>
				<OrganismHeaderCards>
					<div className="row justify-content-center">
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
				</OrganismHeaderCards>
				<TitleBehind marginTop={"-260px"} behindTitle={"ABOUT"}>
					<OrganismMediaAndParagraph
						label={<Label text={"Who we are"} icon={<CustomIcon name={"circle"} color={"#FFA500"}/>}/>}
						image={<Image
							src={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699173194/img_dxaugh.png"}
							alt={"Placeholder"} fill objectFit={"cover"}/>}
						title={"About ussum dolor sit amet consectetur"}
						descriptionBigger={"Potenti lobortis interdum vulputate facilisis tellus a faucibus quis volutpat. Morbi justo nunc mollis lacus in morbi est velit ornare. Lacus nec."}
						description={"Lorem ipsum dolor sit amet consectetur. Erat faucibus curabitur amet malesuada elit proin porta. Amet faucibus libero neque quam nisl euismod nisl viverra ut. Augue vulputate nunc ullamcorper malesuada. Fermentum accumsan odio proin nec. Proin a fames nec pharetra velit. Condimentum convallis morbi arcu sed."}
						actions={<button>urmeaza</button>}
					/>
				</TitleBehind>
				<OrganismMediaWithFilter
					image1={<Image
						src={"https://res.cloudinary.com/dfddk8jjr/image/upload/e_grayscale/v1699173194/img_dxaugh.png"}
						alt={"Placeholder"} fill objectFit={"cover"}/>}

					image2={<Image src={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699173194/img_dxaugh.png"}
								   alt={"Placeholder"} fill objectFit={"cover"}/>}
					descriptionBigger={"Potenti lobortis interdum vulputate facilisis tellus a faucibus quis volutpat. Morbi justo nunc mollis lacus in morbi est velit ornare. Lacus nec."}
					description={"Lorem ipsum dolor sit amet consectetur. Erat faucibus curabitur amet malesuada elit proin porta. Amet faucibus libero neque quam nisl euismod nisl viverra ut. Augue vulputate nunc ullamcorper malesuada. Fermentum accumsan odio proin nec. Proin a fames nec pharetra velit. Condimentum convallis morbi arcu sed."}
				/>

			</BackgroundTemplate>
			<TitleBehind marginTop={"-220px"} behindTitle={"TEAM"}>
				<OrganismTeamCards title={<h2>Behind the scenes eget<br/>natoque adipiscing</h2>}>
					<div className="col-12 col-md-4">
						<TeamCard
							imageSrc={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png"}
							title={"Lydia Passaquindici"} divider description={"owner"}/>

					</div>
					<div className="col-12 col-md-4">
						<TeamCard
							imageSrc={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png"}
							title={"Lydia Passaquindici"} divider description={"owner"}/>

					</div>
					<div className="col-12 col-md-4">
						<TeamCard
							imageSrc={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png"}
							title={"Lydia Passaquindici"} divider description={"owner"}/>

					</div>
				</OrganismTeamCards>
			</TitleBehind>

			<TitleBehind marginTop={"-370px"} behindTitle={"CONTACT"}>
				<>
					<OrganismContactBanner
						label={
							<Label text={"Contact us"} icon={<CustomIcon name={"circle"} color={"rgba(255, 165, 0, 1)"}/>}/>
						}
						title={"Haide să facem echipă spre casa visurilor tale!"}
						description={<p>Have a project or just want to say hello? We <br/> would love to hear from you</p>}
						contactCard={
							<>
								<div className={"col-12 col-md-4"}>
									<SmallContactCard
										title={"Scrie-ne despre proiectul tău"}
										divider
										description={"Iar noi iți vom răspunde cu drag"}
										action={
											<CustomLink text={"hello@vibe-interior.ro"} underline
														url={"https://www.google.com"}/>
										}
									/>
								</div>
								<div className={"col-12 col-md-4"}>
									<SmallContactCard
										title={"Ne gasesti și la telefon"}
										divider
										description={"In caz că ai întrebari sau vrei să ne cunoaștem"}
										action={
											<CustomLink text={"+40 743 043 333"} url={"https://www.google.com"}/>
										}
									/>
								</div>
								<div className={"col-12 col-md-4"}>
									<SmallContactCard
										title={"Adresa"}
										divider
										description={"De Luni pâna Vineri între 10:00 - 18:00"}
										action={
											<CustomLink text={"Strada Erou Iancu Nicolae, 122"}
														extraText={"OPEN ON GOOGLE MAPS"}
														complex
														url={"https://www.google.com"}/>
										}
									/>
								</div>
							</>
						}
					></OrganismContactBanner>
				</>
			</TitleBehind>
		</>
	)
}
