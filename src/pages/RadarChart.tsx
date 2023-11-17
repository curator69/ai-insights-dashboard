import { RadarChartComp } from "../components";
import { Data } from "../types/data";

type Props = {
  data: Data;
};

const RadarChart = (props: Props) => {
  const { data } = props;
  return (
    <>
      <div className="componentWrapper">
        <div className="componentSubWrapper">
          <RadarChartComp data={data} />
        </div>
      </div>
    </>
  );
};

export default RadarChart;
