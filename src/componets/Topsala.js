import React, { Component } from 'react';
import axios from 'axios';
import './css/topsala.scss'
class Topsala extends Component {
    state = {
        player: []
      }
    componentDidMount() {
        axios.get(`https://mls-salaries.herokuapp.com/topsalaries`)
          .then(res => {
            const player = res.data;
            this.setState({ player})})
      }
    render() {
        const player = this.state.player
        return (
            <div className='table-wrapper'>
            <h3>Top Earners in The MLS </h3>
            <table className='fl-table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Club</th>
                    <th>Salary</th>
                </tr>
             </thead>
               {
                player.map((player =>
                <tr key={player.last_name}>
                    <td>{player.first_name}</td>
                    <td>{player.last_name}</td>
                    <td>{player.club}</td>
                    <td>${player.base_salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                </tr>  
                ))
            } 
            </table>
                    
                
            </div>
        );
    }
}

export default Topsala;