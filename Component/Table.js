import React, { useEffect, useState } from 'react';
import TableSeason from './TableSeason';
import axios from "axios";

export default function Table() {


    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('/greeting/add/teamobj')
            .then(response => {
                console.log(response.data);
                setTeams(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <TableSeason />
            <table style={{ width: "100%" }}>
                <ul>
                    {teams.map(user => (
                        <tr key={user.teamname} className="row ">
                            <td className="col-sm-8 bg-success btn btn-outline-light text-left">{user.teamname}</td>
                            <td className="col-sm-1 bg-success btn btn-outline-light">{user.points}</td>
                            <td className="col-sm-1 bg-success btn btn-outline-light">{user.win}</td>
                            <td className="col-sm-1 bg-success btn btn-outline-light">{user.loss}</td>
                            <td className="col-sm-1 bg-success btn btn-outline-light">{user.totalgame}</td>
                        </tr>))}
                </ul>
                <tr>
                    <td style={{ textAlign: "Right" }}>Feedback </td>
                </tr>
            </table>
        </div>
    )
}