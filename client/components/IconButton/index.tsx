import Image from "next/image"

import basket from "/public/basket.svg"
import styles from "./iconButton.module.scss"

const IconButton = ({
    alt,
    title,
    ariaLabel,
    children,
}: {
    alt: string
    title: string
    ariaLabel?: string
    children: React.ReactNode
}) => {
    return (
        <button
            type="button"
            title={title}
            aria-label={ariaLabel} // Ensure aria-label is applied here
            className={styles["icon-button"]}
        >
            <Image height={44} width={44} src={basket} alt={alt} />
            {children}
        </button>
    )
}

export default IconButton