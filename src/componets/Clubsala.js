import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import axios from 'axios'

export default function Clubsala() {
    const [clubs, setclubs] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://mls-salaries.herokuapp.com/clubsalaries`)
    .then(res => {
        const clubs = res.data;
        setclubs(clubs)
        console.log(clubs)    
    })
    }, [])

  useEffect(() => {

 
    const ctx = document.getElementById("myChart");
    Chart.defaults.global.defaultFontColor = 'black';
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: clubs.index,
        datasets: [
          {
           label: "Salaries payed by clubs",
            data: clubs.data,
            backgroundColor: "#4FC3A1",
            hoverBackgroundColor:"#324960"
          }]
      },
      options: {
        //Customize chart options
        tooltips: {
            displayColors: false,
            titleFontSize: 16,
            bodyFontSize: 14,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
                label: (tooltipItem) => {
                    return'$' + tooltipItem.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
                }
            }
        }
      }
    });
  });

  return (
    <div className="Bar">
      <canvas id="myChart"  />
    </div>
  );
}
