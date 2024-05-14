window.onload = function() {
    // Retrieve the arrays from the local storage
    let xArray = JSON.parse(localStorage.getItem('xArray'));
    let yArray = JSON.parse(localStorage.getItem('yArray'));
    let staticYArray = JSON.parse(localStorage.getItem('staticYArray'));


    
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xArray,
        datasets: [{
            label: 'Static Y Array',
            data: staticYArray,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }, {
            label: 'Y Array',
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
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
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



