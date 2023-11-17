import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
ChartData
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Data } from "../../types/data";
import convertToTitleCase from "../../utils/convertToTitleCase";

type Props = {
  data: Data;
};

const RadarChartComp = (props: Props) => {
  const { data } = props;
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const [chartData, setChartData] = useState<{
    options: ChartOptions<"radar">;
    data: ChartData<"radar">;
  } | null>(null);

  useEffect(() => {
    if (data) {
      const options: ChartOptions<'radar'> = {
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
            text: "Category Distribution Radar Chart",
          },
        },
        maintainAspectRatio: false,
      };

      const labels = Object.keys(data.category_distribution).map(
        convertToTitleCase
      );
      const categoryData = Object.values(data.category_distribution);

      const chartData: ChartData<"radar"> = {
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
        <Radar options={chartData.options} data={chartData.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RadarChartComp;
