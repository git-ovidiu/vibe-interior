import Image from "next/image"
import styles from "./page.module.scss"
import HeaderCard from "@/app/Molecules/header-card/header-card"
import OrganismHeaderCards from "@/app/Organisms/o-header-cards/o-header-cards"
import Navbar from "@/app/Organisms/navbar/navbar"
import DarkModeButton from "@/app/utils/Dark-Mode/dark-mode"
import TitleBehind from "@/app/Organisms/title-behind-organism/title-behind"
import Label from "@/app/Atoms/label/label"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"
import TeamCard from "@/app/Molecules/team-card/team-card"
import OrganismTeamCards from "@/app/Organisms/o-team-cards/o-team-cards"
import OrganismMediaAndParagraph from "@/app/Organisms/o-media-and-paragraph/o-media-and-paragraph"
import Homepage from "@/app/pages/homepage"

export default function Home() {
	return (
		<>
			<Homepage></Homepage>
		</>
	)
}
