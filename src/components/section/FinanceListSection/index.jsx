import { FinanceCard } from "./FinanceCard";
import Styles from "./style.module.scss";

export const FinanceList = ({ listFinance, removeFinance }) => {

    return (
        <section className={Styles.flexbox}>
            <h3 className={`title3`}>Resumo financeiro</h3>
            {listFinance.length > 0 ?
                <ul>
                    {listFinance.map((note) => {
                        const { description, value, typeValue, id } = note;

                        return (
                            <FinanceCard key={id} id={id} description={description} value={value} typeValue={typeValue} removeFinance={removeFinance} />
                        )
                    })}

                </ul> : <p className="title2">Você ainda não possui nenhum lançamento</p>
            }
        </section>
    )
}