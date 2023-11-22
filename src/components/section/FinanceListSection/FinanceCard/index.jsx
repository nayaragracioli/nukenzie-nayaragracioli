import Styles from "./style.module.scss";

export const FinanceCard = ({description, value, typeValue, id, removeFinance}) => {
    return (
        <>
            <li className={`${Styles.flexbox} ${typeValue === "Entrada" ? Styles.green : Styles.grey}`}>
                <div className={`${Styles.descBox}`}>
                    <h3 className={`title3`}>{description}</h3>
                    <p className={`title4 ${Styles.typeValue}`}>{typeValue}</p>
                </div>
                <div className={`${Styles.valBox}`}>
                    <p className={`title4`}>R$ {value}</p>
                    <button onClick={() => removeFinance(id)}>Excluir</button>
                </div>
               
            </li>
        </>
    )
}