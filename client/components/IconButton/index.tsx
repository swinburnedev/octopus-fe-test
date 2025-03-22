import Image from "next/image"

import basket from "/public/basket.svg"
import styles from "./iconButton.module.scss"

const IconButton = ({alt, children, title}: {alt: string; children: React.ReactNode; title?: string}) => {
    return (
        <button className={styles["icon-button"]} title={title}>
            <Image height={44} width={44} src={basket} alt={alt} />
            {children}
        </button>
    )
}

export default IconButton