import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { NavLink } from "react-router-dom";
const SocialLinks = () => {
    return (
        <div>
            <div className="social_profile_links">
                <div className="menu_links">
                    <div className="icon">

                        <a href="/" target="_blank">
                        <EmailIcon />
                     </a>
                    </div>
                    <div className="icon">
                     <a href="/" target="_blank">
                     <LinkedInIcon />
                     </a>
                    </div>
                    <div className="icon">
                     <a href="/" target="__blanck">
                     <WhatsAppIcon />
                     </a>
                    </div>
                    <div className="icon">
                   <a href="/" target="__blanck">
                   <PhoneCallbackIcon />
                   </a>
                    </div>
                    <div className="icon">
                       <a href="/" target="_blanck">
                       <GitHubIcon />
                       </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;
