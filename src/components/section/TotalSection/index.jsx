import Styles from "./style.module.scss";

export const TotalSection = ({ listFinance }) => {

    const total = () => {
        return listFinance.reduce((acc, cur) => 
            cur.typeValue === "Entrada" ? acc + +cur.value : acc + -cur.value, 0
        )
    }

    return (
        <section className={Styles.flexbox}>
            <div>
                <h3 className={`title3 ${Styles.textValue}`}>Valor total:</h3>
                <h3 className={`title3 ${Styles.numValue}`}>R$ {total()}</h3>
            </div>
            <p className={`title4`}>O valor se refere ao saldo</p>
        </section>
    )
}


