import { PieChartComp } from "../components";
import { Data } from "../types/data";

type Props = {
  data: Data;
};

const PieChart = (props: Props) => {
  const { data } = props;
  return (
    <>
      <div className="componentWrapper">
        <div className="componentSubWrapper">
          <PieChartComp data={data} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
