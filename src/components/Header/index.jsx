import nuKenzieIcon from "../../assets/Nu Kenzie.svg";
import styles from "./style.module.scss";

export const Header = () => {

    return (
        <header className={styles.flexbox}>
            <img src={nuKenzieIcon} alt="Nu Kenzie Icon" />
        </header>
    )
}