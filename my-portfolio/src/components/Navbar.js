// components/Nasvbar.js

// import Link from "next/link";

const Navbar = () => {
    return(
        <div className="nav-container w-screen items-center text-center flex justify-between px-4">
            <div className="logo">
            </div>
            <div className="nav">
                <ul className="flex align-text-top gap-8">
                    <li><a href="/" className="ctb-btn">Home</a></li>
                    <li><a href="" className="ctb-btn">Skills</a></li>
                    <li><a href="" className="ctb-btn">Projects</a></li>
                    <li><a href="" className="ctb-btn">Contact Me</a></li>
                    <li><a href="" className="ctb-btn">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;