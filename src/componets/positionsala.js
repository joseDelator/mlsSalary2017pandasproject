import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import axios from 'axios'

export default function Positionsala() {
    const [clubs, setclubs] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://mls-salaries.herokuapp.com/position`)
    .then(res => {
        const clubs = res.data;
        setclubs(clubs)
        console.log(clubs)    
    })
    }, [])

  useEffect(() => {

 
    const ctx = document.getElementById("MyChart2");
   
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: clubs.index,
        
        datasets: [
          {
            label: "Paid in Salaries",
            data: clubs.data,
            backgroundColor:[
              "Blue",
              "AntiqueWhite",
              "Darkgreen",
              "pink",
              "red",
              "grey",
              'Aqua', 
              'gold',
              "yellow",
              'pruple',   
            ]
        }
        ]
    }
});
    
    });
           

  return (
      
    <div className="Pie">
    <h3>Number of players by position</h3>
      <canvas id="MyChart2"  />
    </div>
  );
  }