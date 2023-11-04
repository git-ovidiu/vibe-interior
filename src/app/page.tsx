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

export default function Home() {
	return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<TeamCard imageSrc={'https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png'} title={'Lydia Passaquindici'} divider description={'owner'} />

						</div>
						<div className="col-12 col-md-4">
							<TeamCard imageSrc={'https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png'} title={'Lydia Passaquindici'} divider description={'owner'} />

						</div>
						<div className="col-12 col-md-4">
							<TeamCard imageSrc={'https://res.cloudinary.com/dfddk8jjr/image/upload/v1699140368/Photo_ceztnt.png'} title={'Lydia Passaquindici'} divider description={'owner'} />

						</div>
					</div>
				</div>
				<Label text={'Specialists'} icon={<CustomIcon name={'circle'} color={'#FFA500'}/> }/>
				<Homepage></Homepage>
				<TitleBehind>
					haida
				</TitleBehind>
			</>

		// <main className={styles.main}>
		//   <div className={styles.description}>
		//     <p>
		//       Get started by editing&nbsp;
		//       <code className={styles.code}>src/app/page.tsx</code>
		//     </p>
		//     <div>
		//       <a
		//         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         By{' '}
		//         <Image
		//           src="/vercel.svg"
		//           alt="Vercel Logo"
		//           className={styles.vercelLogo}
		//           width={100}
		//           height={24}
		//           priority
		//         />
		//       </a>
		//     </div>
		//   </div>
		//
		//   <div className={styles.center}>
		//     <Image
		//       className={styles.logo}
		//       src="/next.svg"
		//       alt="Next.js Logo"
		//       width={180}
		//       height={37}
		//       priority
		//     />
		//   </div>
		//
		//   <div className={styles.grid}>
		//     <a
		//       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className={styles.card}
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2>
		//         Docs <span>-&gt;</span>
		//       </h2>
		//       <p>Find in-depth information about Next.js features and API.</p>
		//     </a>
		//
		//     <a
		//       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className={styles.card}
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2>
		//         Learn <span>-&gt;</span>
		//       </h2>
		//       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
		//     </a>
		//
		//     <a
		//       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className={styles.card}
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2>
		//         Templates <span>-&gt;</span>
		//       </h2>
		//       <p>Explore the Next.js 13 playground.</p>
		//     </a>
		//
		//     <a
		//       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		//       className={styles.card}
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       <h2>
		//         Deploy <span>-&gt;</span>
		//       </h2>
		//       <p>
		//         Instantly deploy your Next.js site to a shareable URL with Vercel.
		//       </p>
		//     </a>
		//   </div>
		// </main>
	)
}
