import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Form from "./Form";
import Chat from "./Chat";

const App = () => {
  const [userName, setUsername] = useState("");
  const [mySocket, setMysocket] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const socket = io();

    setMysocket(socket);
    setUsername(prompt("What is your name?", "Anonymous"));
    setIsloading(true);
  }, []);
  return (
    <>
      {isLoading && (
        <>
          <Chat socket={mySocket} />
          <Form socket={mySocket} userName={userName} />
        </>
      )}
    </>
  );
};

export default App;
