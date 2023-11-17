import BarChartComp from "../components/barChart/BarChartComp";
import { Data } from "../types/data";

type Props = {
  data: Data;
};

const BarChart = (props: Props) => {
  const { data } = props;

  return (
    <>
      <div className="componentWrapper">
        <div className="componentSubWrapper">
          <BarChartComp data={data} />
        </div>
      </div>
    </>
  );
};

export default BarChart;
