import React,{useState} from 'react';

export default function TableSeason() {

    const [currentValue] = useState(2);

    return (
        <div style={{ textAlign: 'left', padding: "25px" }}>
            <div>Season</div>
            <select id="dropdown" value={currentValue} defaultValue={currentValue}>
                <option value="N/A">N/A</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    )
}