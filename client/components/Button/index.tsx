import classNames from "classnames";
import styles from "./button.module.scss";

type ButtonProps = {
    children: React.ReactNode
	disabled?: boolean
    fullWidth?: boolean
    onClick?: () => void
}
const Button = ({children, disabled, fullWidth, onClick}: ButtonProps) => {
    const classes = classNames(styles.button, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
    })

    return (
        <button className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;