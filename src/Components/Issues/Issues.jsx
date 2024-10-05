import React, { useState } from "react";
import "./Issues.css";
import NavBar from "../MainPage/NavBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
      "https://cdn.pixabay.com/photo/2016/11/29/05/10/lights-1867740__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/03/27/14/23/flood-1281385__480.jpg",
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
      "https://cdn.pixabay.com/photo/2017/03/21/15/27/potholes-2150426__480.jpg",
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
      "https://cdn.pixabay.com/photo/2018/01/14/14/30/dump-3087763__480.jpg",
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
      "https://cdn.pixabay.com/photo/2015/09/21/15/53/path-557679__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/10/20/19/31/park-985422__480.jpg",
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
      "https://cdn.pixabay.com/photo/2015/09/04/20/28/traffic-952870__480.jpg",
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
      "https://cdn.pixabay.com/photo/2017/11/18/09/45/dog-2959928__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/01/19/17/34/graffiti-1149993__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/12/27/10/02/street-lights-1944710__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/03/27/14/21/bus-1281382__480.jpg",
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
      "https://cdn.pixabay.com/photo/2016/08/23/19/54/under-construction-1613930__480.jpg",
  },
];

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
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          style={
            currentPage === index + 1
              ? { ...buttonStyle, ...activeStyle }
              : buttonStyle
          }
          key={index}
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => onPageChange(index + 1)}
        >
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
      src={issues.img_src}
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
          <span>ISSUE TYPE : {issue.type}</span>
          <button onClick={handleCopy}>COPY</button>
        </div>
        <div className="line-twoo">
          <span>ISSUE FROM : {issue.from}</span>
          <span className="date"> DATE OF ISSUE : {issue.date}</span>
        </div>
        <div className="line-three">
          <span className="location"> LOCATION : {issue.location}</span>
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
  const issuesPerPage = 5;
  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const currentIssues = issues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

  return (
    <div className="issue-container">
      <div className="nav">
        <NavBar />
      </div>
      {/* <div className="filter-option">
        <Dropdown
          options={[
            "Date",
            "Location",
          ]}
          value="All"
          placeholder="Filter by"
        />
      </div> */}
      <div className="content">
        <IssueList issues={currentIssues} />
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
