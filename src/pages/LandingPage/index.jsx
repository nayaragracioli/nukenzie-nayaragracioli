import { useState } from "react";
import { Header } from "../../components/Header";
import { FinanceForm } from "../../components/section/FinanceFormSection";
import { FinanceList } from "../../components/section/FinanceListSection";
import { TotalSection } from "../../components/section/TotalSection";
import Styles from "./style.module.scss";

export const LandingPage = () => {
    const [listFinance, setListFinance] = useState([]);

    const addFinance = (description, value, typeValue) => {
        const id = crypto.randomUUID();
        const newFinance = { description, value, typeValue, id };

        setListFinance([...listFinance, newFinance]);
    }

    const removeFinance = (id) => {
        const listFiltered = listFinance.filter((note) => {
            if (note.id !== id) {
                return note;
            }
        })

        setListFinance(listFiltered);
    }

    return (
        <>
            <Header />
            <main className={Styles.container}>
                <div>
                    <FinanceForm addFinance={addFinance} />
                    <TotalSection listFinance={listFinance} />
                </div>
                <div>
                    <FinanceList listFinance={listFinance} removeFinance={removeFinance} />
                </div>

            </main>
        </>
    )
}


