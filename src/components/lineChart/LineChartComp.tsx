import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Data } from "../../types/data";
import convertToTitleCase from "../../utils/convertToTitleCase";

type Props = {
  data: Data;
};

const LineChartComp = (props: Props) => {
  const { data } = props;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );

  const [chartData, setChartData] = useState<{
    options: ChartOptions<"line">;
    data: ChartData<"line">;
  } | null>(null);

  useEffect(() => {
    if (data) {
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Insight Summary Line Chart",
          },
        },
        maintainAspectRatio: false,
      };

      const labels = Object.keys(data.insight_summary).map(convertToTitleCase);
      const insightData = Object.values(data.insight_summary);

      const chartData: ChartData<"line"> = {
        labels,
        datasets: [
          {
            label: "Insight Summary",
            data: insightData,
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
        <Line options={chartData.options} data={chartData.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LineChartComp;
