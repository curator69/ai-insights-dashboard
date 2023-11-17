import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { fetchData } from "./hooks/fetchData";
import { Data } from "./types/data";
import { ErrorResponse } from "react-router-dom";
import { Main } from "./components";
import BarChart from "./pages/BarChart";
import LineChart from "./pages/LineChart";
import PieChart from "./pages/PieChart";
import RadarChart from "./pages/RadarChart";

function App() {
  const [toggled, setToggled] = useState(false);
  const [data, setdata] = useState<Data | null>(null);

  useEffect(() => {
    fetchData()
      .then((res: Data) => setdata(res))
      .catch((err: ErrorResponse) => console.log(err));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <main className={styles.mainWrapper}>
        {toggled && (
          <div className={styles.sidebarWrapper}>
            <Sidebar toggled={toggled} className={styles.sidebar}>
              <Menu>
                <Router>
                  <MenuItem href="/">Home</MenuItem>
                  <MenuItem href="/bar-chart">Bar Chart</MenuItem>
                  <MenuItem href="/line-chart"> Line Chart </MenuItem>
                  <MenuItem href="/pie-chart"> Pie Chart </MenuItem>
                  <MenuItem href="/radar-chart"> Radar Chart </MenuItem>
                </Router>
              </Menu>
            </Sidebar>
          </div>
        )}
        <button
          className={`${styles.navBtn} ${
            toggled ? styles.toggled : styles.unToggled
          }`}
          onClick={() => setToggled(!toggled)}
        >
          <img
            width="100%"
            height="100%"
            src={`/${!toggled ? "hamburger" : "close"}-icon.svg`}
            alt={`${!toggled ? "hamburger" : "close"}-icon`}
          />
        </button>
      </main>

      <Router>
        {data && (
          <Routes>
            <Route path="/" element={<Main data={data} />} />
            <Route path="/bar-chart" element={<BarChart data={data} />} />
            <Route path="/line-chart" element={<LineChart data={data} />} />
            <Route path="/pie-chart" element={<PieChart data={data} />} />
            <Route path="/radar-chart" element={<RadarChart data={data} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
