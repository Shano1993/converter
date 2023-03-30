import '../../index.css';
import {useState} from "react";

export const MeasureConverter = function () {
    const [valueUser, setValueUser] = useState("");
    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");

    function convertMeasurement(value, fromUnit, toUnit) {
        const measure = {m: 1, dm: 10, cm: 100, mm: 1000};
        const valueInMeter = parseFloat(value) / measure[fromUnit];
        const convertedValue = valueInMeter * measure[toUnit];
        return isNaN(convertedValue) ? "" : convertedValue.toFixed(2);
    }

    return (
        <div className="Measure">
            <h1>Measurement Converter</h1>
            <div className="Display">
                <label htmlFor="inputUser">Your Value</label>
                <input type="number" value={valueUser} onChange={e => setValueUser(e.target.value)}/>
            </div>
            <div className="Display">
                <label htmlFor="fromUnit">From</label>
                <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
                    <option value="m">Meter</option>
                    <option value="dm">Decimeter</option>
                    <option value="cm">Centimeter</option>
                    <option value="mm">Millimeter</option>
                </select>
            </div>
            <div className="Display">
                <label htmlFor="toUnit">To</label>
                <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
                    <option value="m">Meter</option>
                    <option value="dm">Decimeter</option>
                    <option value="cm">Centimeter</option>
                    <option value="mm">Millimeter</option>
                </select>
            </div>
            <div className="Display">
                <label htmlFor="result">Result</label>
                <input type="number" value={convertMeasurement(valueUser, fromUnit, toUnit)} disabled={true}/>
                <p>{valueUser + fromUnit} = {convertMeasurement(valueUser, fromUnit, toUnit) + toUnit}</p>
            </div>
        </div>
    )
}