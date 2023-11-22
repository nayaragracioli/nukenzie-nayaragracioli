import Styles from "./style.module.scss";

export const Input = ({ label, id, type, placeholder, value, setValue }) => {

    return (
        <div className={Styles.inputBox}>
            <label className={`title4`} htmlFor={id}>{label}</label>
            <input
                className={Styles.headline}
                name={id}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}