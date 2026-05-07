// import React from 'react'
import Card from './components/Card'

const App = () => {
  const arr = [
  {
    id: 1,
    logo: "https://m.media-amazon.com/images/I/31epF-8N9LL.png",
    name: "Amazon",
    days: "5 days ago",
    position: "Senior UI/UX Designer",
    time: "part-time",
    level: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    logo: "https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj",
    name: "Google",
    days: "5 days ago",
    position: "Senior UI/UX Designer",
    time: "part-time",
    level: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjSZcYEnndhn9RvjJusPNh1Ccyusvl77M4A&s",
    name: "Pinterest",
    days: "5 days ago",
    position: "Senior UI/UX Designer",
    time: "part-time",
    level: "Senior Level",
    rate: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    days: "2 days ago",
    position: "Frontend Developer",
    time: "Full-time",
    level: "Mid Level",
    rate: "$90/hr",
    location: "Bangalore, India"
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    name: "Instagram",
    days: "3 days ago",
    position: "UI Designer",
    time: "Part-time",
    level: "Junior Level",
    rate: "$60/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    name: "Facebook",
    days: "1 day ago",
    position: "React Developer",
    time: "Full-time",
    level: "Senior Level",
    rate: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    id: 7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    name: "WhatsApp",
    days: "4 days ago",
    position: "Backend Developer",
    time: "Full-time",
    level: "Mid Level",
    rate: "$95/hr",
    location: "Pune, India"
  },
  {
    id: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    name: "Netflix",
    days: "6 days ago",
    position: "Product Designer",
    time: "Full-time",
    level: "Senior Level",
    rate: "$130/hr",
    location: "Chennai, India"
  },
  {
    id: 9,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/LinkedIn_logo_initials.png",
    name: "LinkedIn",
    days: "2 days ago",
    position: "UI Engineer",
    time: "Part-time",
    level: "Mid Level",
    rate: "$85/hr",
    location: "Gurgaon, India"
  },
  {
    id: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    name: "Slack",
    days: "3 days ago",
    position: "UX Researcher",
    time: "Full-time",
    level: "Senior Level",
    rate: "$115/hr",
    location: "Remote"
  }
];

  return (
    <div className="parent">
      {arr.map((elem,idx)=>{
        // return <Card key={elem.id}{...elem}/>
        return <Card key={idx} {...elem}/>
      })}
      
    </div>
  )
}

export default App
