import Image from "next/image"

import logo from "/public/octopus-logo.svg"
import IconButton from "../IconButton"
import styles from "./header.module.scss"

const Header = () => (
    <header className={styles.header}>
        <Image height={30} width={225} src={logo} alt="Octopus Energy logo" />
        <IconButton alt="Basket icon" title="Basket items">
            {""}
            {/* TODO get basket count from context */}
        </IconButton>
    </header>
)

export default Header
