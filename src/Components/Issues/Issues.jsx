import React from 'react'
import './Issues.css'
import NavBar from '../MainPage/NavBar'


const issues=[
  {
    id:1,
    title:'Issue 1',
    description:'This is the first issue',
    type:'',
    from:'',
    location:'',
    date:'',
    img_src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    
  },
  {
    id:2,
    title:'Issue 2',
    description:'This is the second issue',
    type:'',
    from:'',
    location:'',
    date:'',
    img_src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  },
  {
    id:3,
    title:'Issue 3',
    description:'This is the third issue',
    type:'',
    from:'',
    location:'',
    date:'',
    img_src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    
  }

  ]

function Image({issues}){ 
  return(
    <img src={issues.img_src} alt='issue' className='issue-img' style={{'width':'330px', 'height': '170px' ,'border-radius': '10px' , 'border':' 3px solid rgba(57, 91, 100, 1)'}}/>
  )
}
function Issue({issue}){
  return(
    <div className='issue'>
      <div className='image-box'><Image issues={issue}/></div>
      <div className='issue-elements'>
        <div className='line-one'><span> ISSUE TYPE : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _  {issue.type}</span><button >COPY</ button></div>
        <div className='line-two'><span> ISSUE FROM : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _   {issue.from}</span><span className='date'>  DATE OF ISSUE : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ {issue.date}</span></div>
        <div className='line-three'><span className='location'> LOCATION : _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _   {issue.location}</span><div className='buttons'><button className='spam-button'>Mark as Spam</ button><button className='resolve-button'>Issue Resolved</ button></div></div>
        
      </div>
    </div>
  )
}

function IssueList({issues}){
  return(
    <div>
      <section  className="issue-list">
      {issues.map(issue=>(
        <li className='issue-item' key={issue.id}>
          <Issue issue={issue}/>
        </li>
      ))}
      

    </section>
    </div>

    
  )
}
function Issues() {
  return (
    <div className='issue-container'>
     <div className='nav'> <NavBar/></div>
    <div className='content'>
      <IssueList issues={issues}/>
      <IssueList issues={issues}></IssueList>
      </div>
    </div>
  )
}

export default Issues;