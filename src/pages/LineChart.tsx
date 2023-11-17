import { LineChartComp } from "../components";
import { Data } from "../types/data";

type Props = {
  data: Data;
};

const LineChart = (props: Props) => {
  const { data } = props;

  return (
    <>
      <div className="componentWrapper">
        <div className="componentSubWrapper">
          <LineChartComp data={data} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
