import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activity from "./pages/activity";
import MessagePanel from "./pages/messagePanel";
import Nav from "react-bootstrap/Nav";
import ChatSession from "./pages/chatSession";

function App() {
  return (
    <Router>
      <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/activity">Acitivity</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/chatSession">ScottishGPT</Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<MessagePanel />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chatSession" element={<ChatSession />} />
      </Routes>
    </Router>
  );
}

export default App;
