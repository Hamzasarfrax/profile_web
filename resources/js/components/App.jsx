import React from "react";
import { createRoot } from "react-dom/client";
import "../components/Style/Style.css";
import Profile from "./Profile/Profile";
import Header from "./Header/Header.jsx";

function App() {
    return (
        <>
            <Header/>
            <Profile />

        </>
    );
}

export default App;
const appRootElement = document.getElementById("app");

if (appRootElement) {
    createRoot(appRootElement).render(<App />);
}
