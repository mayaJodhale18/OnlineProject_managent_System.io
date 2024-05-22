import React from "react";

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
import { useState, useEffect } from "react";
import axios from "axios";

function DemoChart() {
  const [projectdata, setProjectData] = useState([]);

  async function fetchData() {
    const response = await axios.get("http://localhost:4500/projectdata/");
    console.log("drmochart", response.data);
    setProjectData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let totalStartegyProject = 0;
  let totalStartegyClosed = 0;

  projectdata.forEach((item) => {
    if (item.department == "Startegy") {
      totalStartegyProject++;
    }

    if (item.department == "Startegy" && item.status == "Closed") {
      totalStartegyClosed++;
    }
  });

  console.log("totalStartegyProject", totalStartegyProject);
  console.log("totalStartegyClosed", totalStartegyClosed);

  let totalFinanceProject = 0;
  let totalFinanceClosed = 0;
  projectdata.forEach((item) => {
    if (item.department == "Finince") {
      totalFinanceProject++;
    }

    if (item.department == "Finince" && item.status == "Closed") {
      totalFinanceClosed++;
    }
  });

  console.log("totalFinanceProject", totalFinanceProject);
  console.log("totalFinanceClosed", totalFinanceClosed);

  let totalQualityProject = 0;
  let totalQualityClosed = 0;

  projectdata.forEach((item) => {
    if (item.department == "Quality") {
      totalQualityProject++;
    }

    if (item.department == "Quality" && item.status == "Closed") {
      totalQualityClosed++;
    }
  });
  console.log("totalQualityClosed", totalQualityClosed);
  console.log("totalQualityProject", totalQualityProject);

  let totalMaintanceProject = 0;
  let totalMaintanceClosed = 0;

  projectdata.forEach((item) => {
    if (item.department == "Maintance") {
      totalMaintanceProject++;
    }

    if (item.department == "Maintance" && item.status == "Closed") {
      totalMaintanceClosed++;
    }
  });

  console.log("Maintance", totalMaintanceProject);
  console.log("totalMaintanceClosed", totalMaintanceClosed);

  let totalStoresProject = 0;
  let totalStoresClosed = 0;

  projectdata.forEach((item) => {
    if (item.department == "Stores") {
      totalStoresProject++;
    }

    if (item.department == "Stores" && item.status == "Closed") {
      totalStoresClosed++;
    }
  });

  console.log("totalStoresProject", totalStoresProject);
  console.log("totalStoresClosed", totalStoresClosed);

  let totalHRProject = 0;
  let totalHRClosed = 0;

  projectdata.forEach((item) => {
    if (item.department == "HR") {
      totalHRProject++;
    }
    if (item.department == "HR" && item.status == "Closed") {
      totalHRClosed++;
    }
  });

  console.log("totalHRProject", totalHRProject);
  console.log("totalHRClosed", totalHRClosed);

  const data = [
    {
      name: "STR",
      uv: totalStartegyProject,
      pv: totalStartegyClosed,
    },
    {
      name: "FIN",
      uv: totalFinanceProject,
      pv: totalFinanceClosed,
    },
    {
      name: "QLT",
      uv: totalQualityProject,
      pv: totalQualityClosed,
    },
    {
      name: "MAN",
      uv: totalMaintanceProject,
      pv: totalMaintanceClosed,
    },
    {
      name: "STO",
      uv: totalStoresProject,
      pv: totalStartegyClosed,
    },
    {
      name: "HR",
      uv: totalHRProject,
      pv: totalHRClosed,
    },
  ];

  return (
    <div style={{paddingTop:"30px"}}>
     

      <div style={{ width: 500, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="rgb(12, 12, 97)">
              <LabelList dataKey="uv" position="top" />
            </Bar>
            <Bar dataKey="pv" fill="rgb(59, 180, 59)">
              <LabelList dataKey="pv" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div
          style={{
            display: "flex",
            width: "200px",
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: "150px",
            marginTop:"50px"
          }}
        >
          <div
            style={{
              height: "15px",
              width: "15px",
              background: "blue",
              borderRadius: "50%",
            }}
          ></div>
          <label>Total</label>

          <div
            style={{
              height: "15px",
              width: "15px",
              background: "green",
              borderRadius: "50%",
            }}
          ></div>
          <label>Closed</label>
        </div>
      </div>
    </div>
  );
}

export default DemoChart;
