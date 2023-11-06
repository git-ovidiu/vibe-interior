import React from "react";
import BackgroundTemplate from "@/app/Templates/background-template"
import Navbar from "@/app/Organisms/navbar/navbar"
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
import Footer from "@/app/Organisms/footer/footer"
import Homepage from "@/app/pages/homepage"
import "../../styles/bootstrap/css/bootstrap-grid.css";
import '../../styles/main.module.scss';
import styles from "../../styles/main.module.scss";



export default function Contact() {
	return (
		<div className={`${styles.styleguide}`}>
			{/*<Footer/>*/}
			<Homepage></Homepage>
		</div>
	)
}
