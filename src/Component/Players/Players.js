import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Players() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('/greeting/add/teamobj/heloo')
            .then((result) => {
                console.log(result)
                setPlayers(result.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            <ul>
                {players.map(player => (
                    <li key={player.playername} className="row ">
                        <li className="col-sm-8 bg-success btn btn-outline-light text-left">{player.playername}</li>
                        <li className="col-sm-1 bg-success btn btn-outline-light">{player.goals}</li>
                        <li className="col-sm-1 bg-success btn btn-outline-light">{player.assist}</li>
                    </li>))}
            </ul>
        </div>
    )
}