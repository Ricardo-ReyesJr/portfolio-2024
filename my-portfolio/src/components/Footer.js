//components/Footer.js

const Footer = () => {
    return (
        <>
            <hr/>
            <div className="footer-container">
                <p>© {new Date().getFullYear()} Build and designed with &#9829; by Ricardo Reyes Jr.</p>
                <div className="social_icons">
                    <a 
                    href="https://twitter.com/RickReyesDev"
                    aria-label="twitter"
                    target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a 
                    href="https://github.com/Ricardo-ReyesJr"
                    aria-aria-label="GitHub"
                    target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a
                    href="https://www.linkedin.com/in/ricardo-reyes-dev/"
                    aria-label="LinkedIn"
                    target="_blank"><i className="fa-brands fa=linkedin"></i></a>
                </div>
            </div>
        </>
    )
}

export default Footer;