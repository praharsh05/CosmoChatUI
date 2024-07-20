import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activity from "./pages/activity";
import MessagePanel from "./pages/messagePanel";
import ChatSession from "./pages/chatSession";
import Button from "./component/button";

function App() {
  return (
    <Router>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px"
      }}>
      <Button url= "/" label="Home"/>
      <Button url= "/activity" label="Activity"/>
      <Button url= "/chatSession" label="ScottishGPT"/>
      </div>
      <Routes>
        <Route path="/" element={<MessagePanel />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chatSession" element={<ChatSession />} />
      </Routes>
    </Router>
  );
}

export default App;
