import { useState } from "react"
import { Input } from "./Input";
import { Select } from "./Select";
import Styles from "./style.module.scss";


export const FinanceForm = ({addFinance}) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [typeValue, setTypeValue] = useState("Entrada");

    const submit = (e) => {
        e.preventDefault();

        if(description.trim() !== "" && value.trim() !== ""){
            addFinance(description, value, typeValue);
        }else{
           alert("Preencha todos os campos!") 
        }

        setDescription("");
        setValue("");
        setTypeValue("Entrada");
    }

    return (
        <section className={Styles.flexbox}>
            <form onSubmit={submit}>
                <div className={Styles.descriptionBox}>
                    <Input
                        label="Descrição"
                        placeholder="Digite aqui sua descrição"
                        type="text"
                        id="description"
                        value={description}
                        setValue={setDescription}
                    />
                    <p className={`title4`}>Ex: Compra de roupas</p>
                </div>
                <div className={Styles.valueBox}>
                    <Input
                        label="Valor (R$)"
                        placeholder="1"
                        type="number"
                        id="value"
                        value={value}
                        setValue={setValue}
                    />
                </div>
                <div className={Styles.typeValueBox}>
                    <p className={`title4`}>Tipo de Valor</p>
                    <Select name="typeValue" id="typeValue" value={typeValue} setValue={setTypeValue}>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                    </Select>
                </div>
                <button type="submit" className="btn">Inserir valor</button>
            </form>
        </section>
    )
}