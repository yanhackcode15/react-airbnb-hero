import React from "react"
import ReactDOM from "react-dom"
import Bio from "./components/bio"
import Footer from "./components/footer"
import Main from "./components/main"


export default function App() {
    return (
        <div className="card">
            <Bio />
            <Main />
            <Footer />
        </div>
    )
}