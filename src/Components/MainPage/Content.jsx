import React from 'react'
import './Content.css'

export default function Content() {
  const numberOfIssues = 10;
  const numberOfIssuesSolved = 5;
  return (
    <div className='container'>
      <div className='map'>The map comes here</div>
      <div className='issue_report'>
      <div className='issue1'><h1>ISSUES REPORTED</h1>
      <br />
      <h2>{numberOfIssues}</h2></div>
      <div className='issue2'><h1> ISSUES SOLVED </h1>
      <br />
      <h2>{numberOfIssuesSolved}</h2></div>
      </div>
    </div>
  )
}

