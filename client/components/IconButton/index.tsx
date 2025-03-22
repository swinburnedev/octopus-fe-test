import Image from "next/image"

import basket from "/public/basket.svg"
import styles from "./iconButton.module.scss"

const IconButton = () => {
    return (
        <button className={styles["icon-button"]}>
            <Image height={44} width={44} src={basket} alt="Basket icon" />
        </button>
    )
}

export default IconButton