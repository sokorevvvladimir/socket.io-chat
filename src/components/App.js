import { useState, useEffect, lazy } from "react";
import { io } from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const Homepage = lazy(() => import("../pages/Homepage"));
const Chatpage = lazy(() => import("../pages/Chatpage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/chat" element={<Chatpage socket={mySocket} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
