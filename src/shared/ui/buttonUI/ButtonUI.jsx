import styles from "./ButtonUI.module.sass";
import cls from "classnames";

export const ButtonUI = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={cls(styles.buttonUI, className)}>
			{children}
		</button>
	);
};
