import "../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer(){

    return(

        <footer id="footer">

            <div className="footer-container">

                <h2>Soly</h2>

                <p>CODE. CREATE. IMPACT</p>

                <div className="footer-icons">

                    <a href="#">
                        <FaGithub/>
                    </a>

                    <a href="#">
                        <FaLinkedin/>
                    </a>

                    <a href="#">
                        <MdEmail/>
                    </a>

                    <a href="#">
                        <FaWhatsapp/>
                    </a>

                </div>

                <hr />

                <p className="copyright">

                    © 2026 Ngwa Solange Binui.
                    All Rights Reserved.

                </p>

            </div>

        </footer>

    );

}

export default Footer;