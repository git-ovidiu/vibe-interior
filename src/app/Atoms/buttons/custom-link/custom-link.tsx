import React, {ReactNode} from "react"
import styles from "./custom-link.module.scss"
import Link from "next/link"
import CustomIcon from "@/app/Atoms/custom-icon/custom-icon"

export interface CustomLinkOptions {
	text: string;
	extraText?: string;
	url: string;
	underline?: boolean;
	complex?: boolean;
}

export default function CustomLink({text, url, extraText, underline, complex}: CustomLinkOptions) {

	const linkStyle = underline ? { textDecoration: 'underline' } : {};


	return (
		<div className={styles["a-custom-link"]}>
			{!complex &&
				<Link href={url}>
					<h3 style={linkStyle} className={styles["regular"]}>{text}</h3>
				</Link>
			}

			{complex &&
				<Link href={url} className={styles["complex-link"]}>
					<h3 style={linkStyle} className={styles["regular"]}>{text}</h3>
					<div className={styles["extra-text"]}>
						<p>{extraText}</p>
						<CustomIcon name={"arrow_right"} color={"rgba(255, 165, 0, 1)"}/></div>
				</Link>
			}
		</div>
	)
}
