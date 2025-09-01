import { FiHome } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import "./footer.scss";


export default function Footer() {

    return(
        <footer className="footer">
        <div className="iconWrapper">
            <div className="iconCircle">
                <FiHome size={20}/>
            </div>
             <div className="iconCircle">
                <IoIosSearch  size={20}/>
            </div>
             <div className="iconCircle">
                <CiCalendar  size={20}/>
            </div>
        </div>

        </footer>
    );

}