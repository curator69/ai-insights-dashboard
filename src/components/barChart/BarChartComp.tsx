import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Data } from "../../types/data";
import convertToTitleCase from "../../utils/convertToTitleCase";

type Props = {
  data: Data;
};

const BarChartComp = (props: Props) => {
  const { data } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [chartData, setChartData] = useState<{
    options: ChartOptions<"bar">;
    data: ChartData<"bar">;
  } | null>(null);

  useEffect(() => {
    if (data) {
      const options: ChartOptions = {
        indexAxis: "y" as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right" as const,
          },
          title: {
            display: true,
            text: "Category Distribution Bar Chart",
          },
        },
        maintainAspectRatio: false,
      };

      const labels = Object.keys(data.category_distribution).map(
        convertToTitleCase
      );
      const categoryData = Object.values(data.category_distribution);

      const chartData: ChartData<"bar"> = {
        labels,
        datasets: [
          {
            label: "Category Distribution",
            data: categoryData,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      };

      setChartData({ options, data: chartData });
    }
  }, [data]);

  return (
    <div style={{ flex: 1 }}>
      {chartData ? (
        <Bar options={chartData.options} data={chartData.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BarChartComp;
