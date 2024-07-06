import { FakeProducts } from "../../Util/FakeProducts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    }
  },
};

const labels = await FakeProducts.map(products => "category " + products.id);

    const data = {
  labels,
  datasets: [
    {
      label: 'Average Amazon price',
      data: FakeProducts.map(products => products.price -100),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Our Average price',
      data: FakeProducts.map(products => products.price),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart(){
    return (
        <Bar options={options} data={data} />
        )
}