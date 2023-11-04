import Image from "next/image"
import styles from "./page.module.scss"
import HeaderCard from "@/app/Molecules/header-card/header-card"
import Icon from "@/app/Atoms/icon/icon"

export default function Home() {
	return (
		<div className={"container"}>
			<div className="row">
				<div className="col-12 col-md-3">
					<HeaderCard title={"title"} description={"We envision spaces that inspire, blending imagination with functionality to create interiors that stand the test of time."}
								iconColor={"red"}
								iconName={"letter_v"}
								divider
								dividerName={"divider_large"}
					/>
				</div>
				<div className="col-12 col-md-3">
					<HeaderCard title={"title"} description={"Our creative problem-solving and innovative design solutions transform your spaces into remarkable environments that exceed your expectations."}
								iconColor={"red"}
								iconName={"letter_i"}
								divider
								dividerName={"divider_small"}
					/>
				</div>
				<div className="col-12 col-md-3">
					<HeaderCard title={"title"} description={"With an unapologetically daring approach, we craft unique and striking designs that make a statement and elevate your living spaces."}
								iconColor={"red"}
								iconName={"letter_b"}
								divider
								dividerName={"divider_small"}
					/>
				</div>
				<div className="col-12 col-md-3">
					<HeaderCard title={"title"} description={"Your vision is our canvas. We turn dreams into reality by offering a wide range of design possibilities tailored to your taste and lifestyle."}
								iconColor={"red"}
								iconName={"letter_e"}
								divider
								dividerName={"divider_small"}
					/>
				</div>
			</div>

			<hr/>
			<Icon color="green" name="letter_v"/>
			<Icon color="pink" name="letter_i"/>
			<Icon color="red" name="letter_b"/>
			<Icon color="blue" name="letter_e"/>
			<hr/>
		</div>

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
