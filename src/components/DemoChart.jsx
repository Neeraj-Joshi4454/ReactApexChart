
// bar chart

// import { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
// import axios from "axios";

// const DemoChart = () => {
//   const [chartData, setChartData] = useState({
//     options: {
//       chart: {
//         id: "basic-bar"
//       },
//       xaxis: {
//         categories: []
//       }
//     },
//     series: [
//       {
//         name: "Number of Products",
//         data: []
//       }
//     ]
//   });

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then(response => {
//         const products = response.data;
//         const categories = [...new Set(products.map(product => product.category))];
//         const categoryCounts = categories.map(category =>
//           products.filter(product => product.category === category).length
//         );

//         setChartData({
//           options: {
//             chart: {
//               id: "basic-bar"
//             },
//             xaxis: {
//               categories: categories
//             }
//           },
//           series: [
//             {
//               name: "Number of Products",
//               data: categoryCounts
//             }
//           ]
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="app">
//       <div className="row">
//         <div className="mixed-chart">
//           <Chart
//             options={chartData.options}
//             series={chartData.series}
//             type="bar"
//             width="500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemoChart;



// pie chart


import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const DemoChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      labels: []
    },
    series: []
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        const products = response.data;
        const categories = [...new Set(products.map(product => product.category))];
        const categoryCounts = categories.map(category =>
          products.filter(product => product.category === category).length
        );

        setChartData({
          options: {
            labels: categories,
          },
          series: categoryCounts
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoChart;
