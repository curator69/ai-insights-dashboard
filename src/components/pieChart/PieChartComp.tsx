import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Data } from "../../types/data";

type Props = {
  data: Data;
};

const PieChartComp = (props: Props) => {
  const { data } = props;

  ChartJS.register(ArcElement, Tooltip, Legend);

  const [chartData, setChartData] = useState<{
    options: ChartOptions<"pie">;
    data: ChartData<"pie">;
  } | null>(null);

  useEffect(() => {
    if (data) {
      const options: ChartOptions<"pie"> = {
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

      const labels = Object.keys(data.usage_statistics.by_country);
      const categoryData = Object.values(data.usage_statistics.by_country);

      const chartData: ChartData<"pie"> = {
        labels,
        datasets: [
          {
            label: "Statistics",
            data: categoryData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      setChartData({ options, data: chartData });
    }
  }, [data]);

  return (
    <div style={{ flex: 1 }}>
      {chartData ? (
        <Pie options={chartData.options} data={chartData.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PieChartComp;
