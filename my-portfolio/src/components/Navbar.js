// components/Nasvbar.js

// import Link from "next/link";

const Navbar = () => {
    return(
        <div className="nav-container flex justify-between px-4">
            <div className="logo">
                <a href="/">Ricardo Reyes Jr.</a>
            </div>
            <div className="resume">
                <a href="" className="ctb-btn">Resume</a>
            </div>
        </div>
    )
}

export default Navbar;