import {
  Chart, 
  BarController, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Legend, 
  Tooltip
} from 'chart.js';
  
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);

export function buildChart (element, dataset) {
  return new Chart(element, generateConfig(dataset));
}

export function addChartData(chart, newData) {
  newData.map((row) => {
    chart.data.labels.push(row.day);
    chart.data.datasets[0].data.push(row.amount);
  });
  chart.update();
}

export function removeExistingChartData(chart) {
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
}

function generateConfig (dataset) {
  return {
    type: 'bar',
    data: {
      labels: dataset.map((row) => row.day),
      datasets: [
      {
        label: 'Amount',
        data: dataset.map((row) => row.amount),
        backgroundColor: [
          'rgba(236, 119, 95)',
          'rgba(236, 119, 95)',
          'rgba(118, 181, 188)',
          'rgba(236, 119, 95)',
          'rgba(236, 119, 95)',
          'rgba(236, 119, 95)',
          'rgba(236, 119, 95)'
        ],
        hoverBackgroundColor: [
          'rgba(255, 155, 135, 255)',
          'rgba(255, 155, 135, 255)',
          'rgba(180, 223, 229, 255)',
          'rgba(255, 155, 135, 255)',
          'rgba(255, 155, 135, 255)',
          'rgba(255, 155, 135, 255)',
          'rgba(255, 155, 135, 255)'
         ],
         borderRadius: 4,
         borderSkipped: false
        }
      ],
    },
    options: {
      layout: {
        padding: {
          top: 32,
          bottom: 10
        }
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            drawTicks: false,
            display: false
          },
          border: {
            display: false
          },
          ticks: {
            font: {
              family: 'DM Sans'
            },
            color: '#b5b1a8',
            padding: 6
          }
        },
        y: {
          grid: {
            drawTicks: false,
            drawBorder: false,
            display: false,
          },
          display: false,
          beginAtZero: true
        },
      },
      plugins: {
        tooltip: {
          yAlign: 'bottom',
          displayColors: false,
          caretSize: 0,
          caretPadding: 6,
          bodyFont: {
            family: 'DM Sans',
            size: 14,
            weight: 700
          },
          callbacks: {
            title: () => '',
            label: (context) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y)
          }
        },
        legend: {
          display: false
        }
      }
    }
  };
}
