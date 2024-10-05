import React, { useEffect, useState } from "react";
import "./Issues.css";
import NavBar from "../MainPage/NavBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import axios from "axios";

const issues = [
  {
    id: 1,
    title: "Issue 1",
    description: "This is the first issue",
    type: "Garbage",
    from: "Pramodini P",
    location: "Gandhipuram",
    date: "29 September 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 2,
    title: "Issue 2",
    description: "This is the second issue",
    type: "Garbage",
    from: "Abinav P",
    location: "Peelamedu",
    date: "2 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 3,
    title: "Issue 3",
    description: "This is the third issue",
    type: "Garbage",
    from: "Manoranjan",
    location: "RS Puram",
    date: "24 August 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 4,
    title: "Issue 4",
    description: "Broken streetlight reported in the area.",
    type: "Infrastructure",
    from: "Kavya S",
    location: "Thudiyalur",
    date: "5 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 5,
    title: "Issue 5",
    description: "Water logging due to heavy rain.",
    type: "Flooding",
    from: "Ravi K",
    location: "Tidel Park",
    date: "3 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 6,
    title: "Issue 6",
    description: "Potholes on the main road causing inconvenience.",
    type: "Road",
    from: "Neha R",
    location: "Singanallur",
    date: "1 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 7,
    title: "Issue 7",
    description: "Illegal dumping of waste at the corner.",
    type: "Garbage",
    from: "Ravi G",
    location: "Peelamedu",
    date: "25 September 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 8,
    title: "Issue 8",
    description: "Damaged footpath posing risk to pedestrians.",
    type: "Infrastructure",
    from: "Arjun V",
    location: "Coimbatore Main Road",
    date: "28 September 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 9,
    title: "Issue 9",
    description: "Unhygienic conditions near the park.",
    type: "Health",
    from: "Sanjana M",
    location: "Kumarasamy Layout",
    date: "2 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 10,
    title: "Issue 10",
    description: "Traffic congestion during peak hours.",
    type: "Traffic",
    from: "Vikram S",
    location: "Nehru Stadium",
    date: "1 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 11,
    title: "Issue 11",
    description: "Street dogs causing disturbance at night.",
    type: "Animals",
    from: "Sneha P",
    location: "Ram Nagar",
    date: "3 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 12,
    title: "Issue 12",
    description: "Graffiti and vandalism in public areas.",
    type: "Vandalism",
    from: "Rahul T",
    location: "Chettipalayam",
    date: "29 September 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 13,
    title: "Issue 13",
    description: "Need for more streetlights in dark areas.",
    type: "Infrastructure",
    from: "Priya N",
    location: "Kalapatti",
    date: "30 September 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 14,
    title: "Issue 14",
    description: "Issues with public transportation timings.",
    type: "Transport",
    from: "Karthik J",
    location: "Town Hall",
    date: "4 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  {
    id: 15,
    title: "Issue 15",
    description: "Excessive noise from construction sites.",
    type: "Noise",
    from: "Ananya R",
    location: "Race Course",
    date: "5 October 2024",
    img_src:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
];

function Pagination({ totalPages, currentPage, onPageChange }) {
  // ... (your existing Pagination component code)
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
