import { useState } from "react";
import Chat from "./Components/Chat/Chat";
import Setting from "./Components/Setting/Setting";
import User from "./Components/UserInfo/User";
import Login from './Components/Login/Login'






function App() {
 
 const [show, setShow] = useState(false)
  const [showChat, setShowCaht] = useState(false);
  return (
    <>
      <div className={` ${show ? "bg" : "container"}`}>
        {showChat ? (
          <>
            <Login/>
            {/* <Notify /> */}
          </>
        ) : (
          <div className="body-lists">
            <User />
            <Chat />
            <Setting show={show} setShow={setShow} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
