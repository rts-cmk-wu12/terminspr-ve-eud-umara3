import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import "./footer.scss";
import Link from "next/link";


export default function Footer() {

    return(
        <footer className="footer">
        <div className="iconWrapper">
            <Link href="/activities">
            <div className="iconCircle">
                <FiHome size={20}/>
            </div>
            </Link>
            
            <Link href="/search">
             <div className="iconCircle">
                <IoIosSearch  size={20}/>
            </div>
            </Link>
             <div className="iconCircle">
                <CiCalendar  size={20}/>
            </div>
        </div>

        </footer>
    );

}