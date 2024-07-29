import "./Navigation.css"
import { Router, Routes, Route } from "react"

export function Navigation() {
    return (
        <>
            <div className="nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>
        </>
    );
}

export default Navigation;