import Image from "next/image"
import styles from "./page.module.scss"
import HeaderCard from "@/app/Molecules/header-card/header-card"
import OrganismHeaderCards from "@/app/Organisms/o-header-cards/o-header-cards"
import Navbar from "@/app/Organisms/navbar/navbar"
import Homepage from "@/app/Templates/Homepage/homepage"
import DarkModeButton from "@/app/utils/Dark-Mode/dark-mode"
import TitleBehind from "@/app/Organisms/title-behind-organism/title-behind"
import Label from "@/app/Atoms/label/label"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"
import TeamCard from "@/app/Molecules/team-card/team-card"
import OrganismTeamCards from "@/app/Organisms/o-team-cards/o-team-cards"

export default function Home() {
	return (
		<>
			<Homepage></Homepage>
			<TitleBehind behindTitle={"ABOUT"}>
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
		</>
	)
}
