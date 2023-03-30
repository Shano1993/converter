import '../../index.css';
import {useState} from "react";

export const CapacityConverter = function () {
    const [valueUser, setValueUser] = useState("");
    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");

    function convertCapacity(value, fromUnit, toUnit) {
        const capacity = {l: 1, dl: 10, cl: 100, ml: 1000};
        const valueInMeter = parseFloat(value) / capacity[fromUnit];
        const convertedValue = valueInMeter * capacity[toUnit];
        return isNaN(convertedValue) ? "" : convertedValue.toFixed(2);
    }

    return (
        <div className="Measure">
            <h1>Capacity Converter</h1>
            <div className="Display">
                <label htmlFor="inputUser">Your Value</label>
                <input type="number" value={valueUser} onChange={e => setValueUser(e.target.value)}/>
            </div>
            <div className="Display">
                <label htmlFor="fromUnit">From</label>
                <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
                    <option value="l">Liter</option>
                    <option value="dl">Deciliter</option>
                    <option value="cl">Centiliter</option>
                    <option value="ml">Milliliter</option>
                </select>
            </div>
            <div className="Display">
                <label htmlFor="toUnit">To</label>
                <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
                    <option value="l">Liter</option>
                    <option value="dl">Deciliter</option>
                    <option value="cl">Centiliter</option>
                    <option value="ml">Milliliter</option>
                </select>
            </div>
            <div className="Display">
                <label htmlFor="result">Result</label>
                <input type="number" value={convertCapacity(valueUser, fromUnit, toUnit)} disabled={true}/>
                <p>{valueUser + fromUnit} = {convertCapacity(valueUser, fromUnit, toUnit) + toUnit}</p>
            </div>
        </div>
    )
}