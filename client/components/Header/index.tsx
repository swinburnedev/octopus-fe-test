import Image from "next/image"

import {useBasketContext} from "../../contexts/basket"
import logo from "/public/octopus-logo.svg"
import IconButton from "../IconButton"
import styles from "./header.module.scss"

const Header = () => {
    const {basket} = useBasketContext()
    const basketItemsCount = basket.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <header className={styles.header}>
            <Image height={30} width={225} src={logo} alt="Octopus Energy logo" />
            <IconButton alt="Basket icon" title="Basket items" ariaLabel={`${basketItemsCount} basket items`}>
                <span aria-hidden="true" className="visually-hidden">
                    {basketItemsCount}
                </span>
            </IconButton>
        </header>
    )
}
export default Header
