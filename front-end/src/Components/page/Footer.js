import { Link } from "react-router-dom"


const Footer = () => {
    return(
        <div>
            <div className="Navigation">
                <h2>NAVIGATION</h2>
                <Link>HOME</Link>
                <Link>ABOUT US</Link>
            </div>
            <div className="FOLLOW">
                <h2>FOLLOW US</h2>
                {/* <Link>icon</Link> */}
                {/* <Link>icon</Link> */}
            </div>
        </div>
    )
}

export default Footer