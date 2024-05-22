import React, { useEffect } from "react";
import CIcon from "@coreui/icons-react";
import { useState } from "react";
import axios from "axios";
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import DemoChart from "./DemoChart";
import "./Dashboard.css";
import SideComp from "./SideComp";

function Dashboard() {
  const [projectdata, setProjectData] = useState([]);

  async function fetchData() {
    const response = await axios.get("http://localhost:4500/projectdata/");
    console.log(response.data);
    setProjectData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let closedCount = 0;

  projectdata.forEach((item) => {
    if (item.status == "Closed") {
      closedCount++;
    }
  });

  console.log("Closedcount", closedCount);

  let runningCount = 0;

  projectdata.forEach((item) => {
    if (item.status == "running") {
      runningCount++;
    }
  });

  console.log("RunningCount", runningCount);

  let cancelledCount = 0;

  projectdata.forEach((item) => {
    if (item.status == "Cancelled") {
      cancelledCount++;
    }
  });

  console.log("CancelledCount", cancelledCount);

  return (
    <div style={{ display: "flex" }} className="dashboard">
      <SideComp />

      <div style={{ width: "100%" }}>
        <div className="dashboardName">
          <p>Dashboard</p>
        </div>

        <div className="section1">
          <div className="cards">
            <div className="card">
              <label>Total Project</label>
               <br></br>
              {projectdata ? (
                <label style={{ fontSize: "25px", fontWeight:"700"}}>{projectdata.length}</label>
              ) : null}
            </div>
            <div className="card">
              <label>Closed</label>
              <br></br>
              {<label style={{ fontSize: "25px", fontWeight:"700", }}>{closedCount}</label>}
            </div>

            <div className="card">
              <label>Running</label>
              <br></br>

              {<label style={{ fontSize: "25px",fontWeight:"700" }}>{runningCount}</label>}
            </div>
            <div className="card">
              <label>Closure Delay</label>
              <br></br>
              {<label style={{ fontSize: "25px",fontWeight:"700" }}>{3}</label>}
            </div>

            <div className="card">
              <label>Cancelled</label>
              <br></br>
              {<label style={{ fontSize: "25px",fontWeight:"700" }}>{cancelledCount}</label>}
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "grey",
            marginTop: "20px",
            marginLeft: "30px",
          }}
        >
          Dipartment wise-Total Vs Closed
        </p>

        <div className="section2">
          <DemoChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
