import { Fragment, useEffect, useState } from 'react'
import './App.css'



function App() {
  const[Notifications, setNotifications] = useState(0);
  useEffect(() => {
    if(Notifications>0){
    document.title = "You have " + Notifications + " notifications"
    }

  })
  function sendNotification(){
    setNotifications(Notifications + 1);
  }

  return (
    <div className="App">
      <button onClick={sendNotification}> Send Notification</button>
    </div>

  )
}

export default App
