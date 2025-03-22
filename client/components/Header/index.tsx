import Image from "next/image"

import logo from "/public/octopus-logo.svg"
import IconButton from "../IconButton"
import styles from "./header.module.scss"

const Header = () => (
    <header className={styles.header}>
        <Image height={36} width={270} src={logo} alt="Octopus Energy logo" />
        <IconButton />
    </header>
)

export default Header
