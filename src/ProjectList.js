import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./ProjectList.css";
import SideComp from './SideComp';

function ProjectList() {
  const [projectdata, setProjectData] = useState([]);
  const [error, setError] = useState(null);
  const [tableName, setTableName] = useState('');

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:4500/projectdata/");
      setProjectData(response.data);
    } catch (err) {
      console.error("Error fetching project data:", err);
      setError("Failed to fetch project data");
    }
  }

  async function updateStatus(e, id, status) {
    e.preventDefault();
    const data = { id, status };

    try {
      const response = await axios.post("http://localhost:4500/updatestatus/", data);
      console.log("Update status response:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Error updating status:", err);
      setError("Failed to update status");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Pagination code
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 7;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = projectdata.slice(firstIndex, lastIndex);
  const npage = Math.ceil(projectdata.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(event, id) {
    event.preventDefault();
    setCurrentPage(id);
  }

  return (
    <div style={{ display: "flex" }} className='projectList'>
      <SideComp />
      <div className='listheader'>
        <p>Project Listing</p>
        {error && <div className="error">{error}</div>}
        <div>
          <input 
            type="text" 
            placeholder="Enter Project Name" 
            value={tableName} 
            onChange={(e) => setTableName(e.target.value)} 
          />
          {tableName && <h2>{tableName}</h2>}
        </div>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <td>Enter Project Name</td>
                <th>Project Name</th>
                <th>Reason</th>
                <th>Type</th>
                <th>Division</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Dept</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectdata ? records.map((item) => (
                <tr key={item.id}>
                  <td>{item.projectName}<br /><label className='dates'>{item.startDate} to {item.endDate}</label></td>
                  <td>{item.reason}</td>
                  <td>{item.type}</td>
                  <td>{item.division}</td>
                  <td>{item.category}</td>
                  <td>{item.priority}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={(e) => updateStatus(e, item.id, "running")}>Start</button>
                    <button onClick={(e) => updateStatus(e, item.id, "Closed")}>Close</button>
                    <button onClick={(e) => updateStatus(e, item.id, "Cancelled")}>Cancel</button>
                  </td>
                </tr>
              )) : null}
            </tbody>
          </table>
          <nav id='pagination'>
            <ul>
              <li>
                <a href="#" onClick={prePage}>
                  Prev
                </a>
              </li>
              {numbers.map((n) => (
                <li key={n} id="changePage">
                  <a href="#" onClick={(event) => changeCPage(event, n)}>{n}</a>
                </li>
              ))}
              &nbsp;.&nbsp;.&nbsp;.&nbsp;
              <li>
                <a href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
