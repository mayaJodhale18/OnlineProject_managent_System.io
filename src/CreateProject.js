import axios from "axios";
import React, { useEffect, useState } from "react";
import SideComp from "./SideComp";
import "./CreateProject.css";

function CreateProject() {
  const [reason, setReason] = useState("");
  const [type, setType] = useState("");
  const [division, setDivsion] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPrority] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [projectName, setProjectName] = useState("");

  async function save() {
    const data = {
      reason: reason,
      type: type,
      division: division,
      category: category,
      priority: priority,
      department: department,
      startDate: startDate,
      endDate: endDate,
      location: location,
      projectName: projectName,
      status: "Registered",
    };

    const response = await axios.post("http://localhost:4500/savedata/", data);

    console.log(response.data);

    if (response.data == "sucess") {
      alert("project data saved sucessfully");
      window.location.reload();
    }
  }

  const [id, setId] = useState();
  const [status, setStatus] = useState("");

  async function updateStatus() {
    const data = {
      id: id,
      status: status,
    };

    console.log(data);
  }

  console.log(reason);
  console.log(type);
  console.log(division);
  console.log(category);
  console.log(startDate);
  console.log(endDate);
  console.log(department);
  console.log(location);
  console.log(priority);
  console.log(category);

  return (
    <div className="create-project" style={{ display: "flex" }}>
      <SideComp />

      <div className="part2">
        <div className="header">
          
         <p>Create Project</p>
        </div>

        <div className="projectInfo">
          <div className="projectName">
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="tex"
                  placeholder="Enter your project Theme"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <button onClick={save}>Save project</button>
            </div>
          </div>
          {/* 
      <div>
        <button onClick={save}>Save project</button>
      </div> */}

          <div className="selecttags1">
            {/* <label>reason</label>
            <label>type</label>
            <label>division</label> */}

            <select
              onChange={(e) => setReason(e.target.value)}
              className="reason"
            >
              <option>select reason</option>
              <option>Business</option>
              <option>Delership</option>

              <option>Transport</option>
            </select>

            <span>
              <select onChange={(e) => setType(e.target.value)}>
                <option>select type</option>
                <option>Internal</option>
                <option>External</option>
                <option>Vender</option>
              </select>
            </span>
            <select onChange={(e) => setDivsion(e.target.value)}>
              <option>select division</option>
              <option>Compresser</option>
              <option>Filters</option>

              <option>Glass</option>
              <option>Pumps</option>
              <option>Water Heater</option>
            </select>
          </div>

          <div className="selecttags2">
            {/* <label>reason</label>
            <label>type</label>
            <label>division</label>
            <br></br> */}
            <select onChange={(e) => setCategory(e.target.value)}>
              <option>select category</option>
              <option>Ouality A</option>
              <option>Ouality B</option>

              <option>Ouality C</option>
              <option>Ouality D</option>
            </select>

            <select onChange={(e) => setPrority(e.target.value)}>
              <option>select priority</option>
              <option>High</option>
              <option>Low</option>

              <option>Medium</option>
            </select>
            <select onChange={(e) => setDepartment(e.target.value)}>
              <option>select departmentt</option>

              <option>Startegy</option>
              <option>Finince</option>

              <option>Quality</option>
              <option>Maintance</option>
              <option>Stores</option>
              <option>HR</option>
            </select>
          </div>
          {/* <select onChange={(e)=>setStartDate(e.target.value)}>
        
        </select> */}
          <div className="selecttags3">
            {/* <label>reason</label>
            <label>type</label>
            <label>division</label>
            <br></br> */}
            <input
              type="date"
              placeholder="Enter Start Date"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              placeholder="Enter End Date"
              onChange={(e) => setEndDate(e.target.value)}
            />

            <select onChange={(e) => setLocation(e.target.value)}>
              <option>select location</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
          <label style={{marginLeft:"820px"}}>Status:Registered</label>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
