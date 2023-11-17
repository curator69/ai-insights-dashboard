import { BarChartComp, LineChartComp, PieChartComp, RadarChartComp } from "."
import { Data } from "../types/data";
import styles from "./Main.module.scss"

type Props = {
  data: Data;
};

const Main = (props: Props) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionWrapper}>
        <BarChartComp data={data} />
        <LineChartComp data={data} />
        <PieChartComp data={data} />
        <RadarChartComp data={data} />
      </div>
    </div>
  );
};

export default Main