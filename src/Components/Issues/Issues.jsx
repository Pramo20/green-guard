import React, { useEffect, useState } from "react";
import "./Issues.css";
import NavBar from "../MainPage/NavBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import axios from "axios";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const buttonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    outline: "none",
    fontSize: "16px",
  };

  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  };

  return (
    <div className="pagination">
      {" "}
      {Array.from({
        length: totalPages,
      }).map((_, index) => (
        <button
          style={
            currentPage === index + 1
              ? {
                  ...buttonStyle,
                  ...activeStyle,
                }
              : buttonStyle
          }
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
          {" "}
          {index + 1}
        </button>
      ))}
    </div>
  );
}
function handleCopy() {
  console.log("copied");
}

function Image({ issues }) {
  return (
    <img
      src={issues.IssueImage}
      alt="issue"
      className="issue-img"
      style={{
        width: "330px",
        height: "170px",
        borderRadius: "10px",
        border: "3px solid rgba(57, 91, 100, 1)",
      }}
    />
  );
}

function Issue({ issue }) {
  return (
    <div className="issue">
      <div className="image-box">
        <Image issues={issue} />
      </div>
      <div className="issue-elements">
        <div className="line-onee">
          <span>ISSUE TYPE : {issue.IssueType}</span>
          <button onClick={handleCopy}>COPY</button>
        </div>
        <div className="line-twoo">
          <span>ISSUE FROM : {issue._id}</span>
          <span className="date"> DATE OF ISSUE : {issue.createdAt}</span>
        </div>
        <div className="line-three">
          <span className="location"> LOCATION : {issue.IssueLocation}</span>
          <div className="buttons">
            <button className="spam-button">Mark as Spam</button>
            <button className="resolve-button">Issue Resolved</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IssueList({ issues }) {
  if (issues.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "rgba(57, 91, 100, 1)", // Your desired color
          fontSize: "18px",
          margin: "20px 0",
        }}
      >
        No issues found based on the filter criteria.
      </div>
    ); // D
  }
  return (
    <div>
      <section className="issue-list">
        {issues.map((issue) => (
          <li className="issue-item" key={issue.id}>
            <Issue issue={issue} />
          </li>
        ))}
      </section>
    </div>
  );
}

function Issues() {
  const [currentPage, setCurrentPage] = useState(1);
  const [Data, setData] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null); // State to track selected filter option
  const [filter, setFilter] = useState({ location: "", date: "" });
  const issuesPerPage = 5;
  const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);
  const currentIssues = filteredIssues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const applyFilter = () => {
    const { location, date } = filter;

    const filtered = issues.filter((issue) => {
      return (
        (location === "" ||
          issue.location.toLowerCase().includes(location.toLowerCase())) &&
        (date === "" || issue.date.includes(date))
      );
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks

    setFilteredIssues(filtered);
    setCurrentPage(1);
  };
  const apicall = async () => {
    const BASE_URL = "https://greenguard.onrender.com";
    console.log(localStorage.getItem("authToken"));
    const token = localStorage.getItem("authToken");
    const tokenWithoutQuotes = token.replace(/^"|"$/g, "");
    console.log(tokenWithoutQuotes);
    try {
      const response = await axios.get(BASE_URL + "/issues/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      window.alert("Error in fetching issues. Please try again later.");
    }
  };

  useEffect(() => {
    apicall();
  }, []);
  const options = [
    { value: "location", label: "Search by Location" },
    { value: "date", label: "Search by Date" },
  ];

  return (
    <div className="issue-container">
      <div className="nav">
        <NavBar />
      </div>

      <div className="filter-section">
        <Dropdown
          options={options}
          onChange={(option) => {
            setSelectedFilter(option);
            setFilter({ location: "", date: "" }); // Reset filters when changing the dropdown
          }}
          placeholder="Select a filter"
        />

        {selectedFilter && (
          <div className="filter-inputs">
            {selectedFilter.value === "location" && (
              <>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  value={filter.location}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </>
            )}
            {selectedFilter.value === "date" && (
              <>
                <input
                  type="text"
                  name="date"
                  placeholder="Enter Date (e.g., 2 October 2024)"
                  value={filter.date}
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </>
            )}
            <button className="apply-filter-button" onClick={applyFilter}>
              Apply Filter
            </button>
          </div>
        )}
      </div>

      <div className="content">
        <IssueList issues={Data} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Issues;
