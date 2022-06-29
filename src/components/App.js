import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Form from "./Form";
import Chat from "./Chat";

const App = () => {
  const [mySocket, setMysocket] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    const socket = io();

    setMysocket(socket);

    setIsloading(true);
    return () => socket.disconnect();
  }, []);
  return (
    <>
      {isLoading && (
        <>
          <Chat socket={mySocket} />
          <Form socket={mySocket} />
        </>
      )}
    </>
  );
};

export default App;
