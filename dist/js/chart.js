// Sample data for the chart
const salesData = {
  labels: [
    "2024-04-01",
    "2024-04-02",
    "2024-04-03",
    "2024-04-04",
    "2024-04-05",
    "2024-04-06",
    "2024-04-07",
    "2024-04-08",
    "2024-04-09",
    "2024-04-10",
    "2024-04-11",
    "2024-04-12",
    "2024-04-13",
    "2024-04-14",
    "2024-04-15",
    "2024-04-16",
    "2024-04-17",
    "2024-04-18",
    "2024-04-19",
    "2024-04-20",
    "2024-04-21",
    "2024-04-22",
    "2024-04-23",
    "2024-04-24",
    "2024-04-25",
    "2024-04-26",
    "2024-04-27",
    "2024-04-28",
    "2024-04-29",
    "2024-04-30",
  ],
  datasets: [
    {
      label: "Waiting for payment",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#9CA3AF",
      backgroundColor: "rgba(156, 163, 175, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Payment confirmed",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#4ADE80",
      backgroundColor: "rgba(74, 222, 128, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Order processed",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#60A5FA",
      backgroundColor: "rgba(96, 165, 250, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Delivery process",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#4DD0E1",
      backgroundColor: "rgba(77, 208, 225, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Completed",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.3)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Refund",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#F87171",
      backgroundColor: "rgba(248, 113, 113, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Cancelled",
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
      borderColor: "#FB923C",
      backgroundColor: "rgba(251, 146, 60, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};


salesData.datasets[4].data = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0,
];

salesData.datasets[5].data = [0, 0.05, 0, 0.1, 0.2, 0.1, 0.05];

for (let i = 8; i <= 12; i++) {
  salesData.datasets[4].data[i] = Math.sin(((i - 8) * Math.PI) / 4) * 0.8 + 0.1;
}

for (let i = 25; i <= 29; i++) {
  salesData.datasets[4].data[i] =
    Math.sin(((i - 25) * Math.PI) / 4) * 0.9 + 0.1;
}

// Initialize the chart
const ctx = document.getElementById("salesChart").getContext("2d");
const chartContainer = document.querySelector('.chart-container');

// Buat elemen tooltip custom
const customTooltip = document.createElement('div');
customTooltip.className = 'custom-tooltip';
chartContainer.appendChild(customTooltip);

// Variabel untuk melacak status hover
let isHoveringCompleted = false;
let lastHoveredIndex = -1;

const salesChart = new Chart(ctx, {
  type: "line",
  data: salesData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        caretPadding: 5,
        padding: 10,
        position: "nearest",
        intersect: false,
        caretSize: 5,
        bodySpacing: 5,
        titleSpacing: 3,
        xPadding: 8,
        yPadding: 6,
        callbacks: {
          title: function (tooltipItems) {
            return tooltipItems[0].label; // Pengambilan judul tooltip
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
          color: "#F3F4F6",
        },
        ticks: {
          maxTicksLimit: 10,
          color: "#6B7280",
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        max: 1,
        grid: {
          display: true,
          color: "#F3F4F6",
        },
        ticks: {
          color: "#6B7280",
          callback: function (value) {
            return value * 100 + "%";
          },
        },
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    elements: {
      point: {
        radius: function (context) {
          const idx = context.datasetIndex;
          const value = context.parsed.y;
          // Hanya jika datasetIndex = 4 (Completed) ATAU 5 (Refund)
          // DAN value > 0, maka gambar titik dengan radius 4.
          if ((idx === 4 || idx === 5) && value > 0) {
            return 4;
          }
          return 0; // selain itu: tidak tampilkan titik sama sekali
        },
        hoverRadius: function (context) {
          const idx = context.datasetIndex;
          const value = context.parsed.y;
          if ((idx === 4 || idx === 5) && value > 0) {
            return 7; // misalnya kalau di-hover bulatannya jadi lebih besar
          }
          return 0;
        },
        hitRadius: function (context) {
          const idx = context.datasetIndex;
          const value = context.parsed.y;
          if ((idx === 4 || idx === 5) && value > 0) {
            return 10; // area sensitif klik/hover
          }
          return 0;
        },
      },
      line: {
        borderWidth: function (context) {
          // Buat “Completed” (index 4) garis lebih tebal 3,
          // “Refund” (index 5) 2, sisanya 1
          if (context.datasetIndex === 4) return 3;
          if (context.datasetIndex === 5) return 2;
          return 1;
        },
      },
    },
  },
});

// Fungsi untuk menampilkan tooltip 
function showCustomTooltip(x, y, content) {
  customTooltip.innerHTML = content;
  customTooltip.style.display = 'block';
  customTooltip.style.left = `${x}px`;
  customTooltip.style.top = `${y}px`;
}

// Fungsi untuk menyembunyikan tooltip
function hideCustomTooltip() {
  customTooltip.style.display = 'none';
}

// tooltip buat sendiri
// ctx.canvas.addEventListener('mousemove', (e) => {
//   const canvasPosition = ctx.canvas.getBoundingClientRect();
//   const mouseX = e.clientX - canvasPosition.left;
//   const mouseY = e.clientY - canvasPosition.top;
  
//   // Dapatkan elemen di bawah kursor
//   const elements = salesChart.getElementsAtEventForMode(
//     e, 
//     'index', 
//     { intersect: true },
//     true
//   );
  
//   if (elements.length > 0) {
//     const firstElement = elements[0];
//     const index = firstElement.index;
//     const datasetIndex = firstElement.datasetIndex;
    
//     isHoveringCompleted = (datasetIndex === 4);
//     lastHoveredIndex = index;
    
//     // Format tanggal
//     const date = salesData.labels[index];
    
//     if (isHoveringCompleted) {
//       const completedValue = salesData.datasets[4].data[index] * 100;
      
//       showCustomTooltip(
//         e.clientX + 10,
//         e.clientY - 20,
//         `<div class="tooltip-header">${date}</div>
//          <div class="tooltip-content">
//            <div class="tooltip-item">
//              <span class="tooltip-label" style="color: #10B981">Completed:</span>
//              <span class="tooltip-value">${completedValue.toFixed(1)}%</span>
//            </div>
//          </div>`
//       );
//       for (let i = 0; i < salesData.datasets.length; i++) {
//         if (i !== 4) {
//           hideCustomTooltip();
//         }
//       }
//     } else {
//       // Tampilan warna
//       let content = `<div class="tooltip-header">${date}</div>`;
      
//       salesData.datasets.forEach((dataset, idx) => {
//         const value = dataset.data[index];
//         if (value || value === 0) {
//           let color = '#6b7280'; // Default
//           if (dataset.label === "Waiting for payment") color = "#9CA3AF";
//           else if (dataset.label === "Payment confirmed") color = "#4ADE80";
//           else if (dataset.label === "Order processed") color = "#60A5FA";
//           else if (dataset.label === "Delivery process") color = "#4DD0E1";
//           else if (dataset.label === "Refund") color = "#F87171";
//           else if (dataset.label === "Cancelled") color = "#FB923C";
          
//           const displayValue = idx === 4 ? (value * 100).toFixed(1) + '%' : value;
//           content += `
//             <div class="tooltip-item">
//               <span class="tooltip-label" style="color: ${color}">${dataset.label}:</span>
//               <span class="tooltip-value">${displayValue}</span>
//             </div>`;
//         }
//       });
      
//       showCustomTooltip(
//         e.clientX + 10,
//         e.clientY - 20,
//         content
//       );
//     }
//   } else {
//     hideCustomTooltip();
//   }
// });

// ketika mouse keluar
ctx.canvas.addEventListener('mouseout', () => {
  hideCustomTooltip();
  isHoveringCompleted = false;
  lastHoveredIndex = -1;
});


document.querySelectorAll(".pagination-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // belum
  });
});