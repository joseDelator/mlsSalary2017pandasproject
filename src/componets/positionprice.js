import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import axios from 'axios'

export default function Positionprice() {
    const [clubs, setclubs] = useState([]);
    
    
    
    useEffect(() =>{
        axios.get(`https://mls-salaries.herokuapp.com/positionsalariesmean`)
    .then(res => {
        const clubs = res.data;
        setclubs(clubs)
        console.log(clubs)    
    })
    }, [])

  useEffect(() => {

 
    const ctx = document.getElementById("MyChart");
    Chart.defaults.global.defaultFontColor = 'black';
    new Chart(ctx, {
      type: "bar",
    
      data: {
        labels: clubs.index,

        datasets: [
          {
           label: "Averge Salaries",
            data: clubs.data,
            backgroundColor: "#4FC3A1",
            hoverBackgroundColor:"#324960"
          }
        ]
      },

    options: {
        scales: {
            yAxes: [
              {
                
                ticks: {
                  min: 0,
                  
                }
              }
            ]
          },
 
  tooltips: {
      displayColors: false,
      titleFontSize: 16,
      bodyFontSize: 14,
      xPadding: 10,
      yPadding: 10,
      callbacks: {
          label: (tooltipItem, data) => {
              return'$' + tooltipItem.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
          }
      }
  }
}
    });
  });
  return (
    <div className="Ba2">
      <canvas id="MyChart"  />
    </div>
  );
}