window.onload = function() {
    // Retrieve the arrays from the local storage
    let xArray = JSON.parse(localStorage.getItem('xArray'));
    let yArray = JSON.parse(localStorage.getItem('yArray'));
    let staticYArray = JSON.parse(localStorage.getItem('staticYArray'));
    console.log(yArray)
    console.log(staticYArray);


    
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xArray,
        datasets: [{
            label: 'Regenerated Naira equivalent of Pound',
            data: staticYArray,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }, {
            label: 'Naira equivalent of Pound Sterling',
            data: yArray,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'days of consideration'
                },
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' 
                },
                ticks: {
                    color: 'white' 
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' 
                },
                ticks: {
                    color: 'white' 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgb(255, 99, 132)',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});

};



