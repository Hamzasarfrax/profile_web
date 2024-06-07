import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Fab from "@mui/material/Fab";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SocialLinks from "./SocialLinks";
const Profile = () => {
    const downloadPDF = () => {
        const content = document.getElementById("CV");

        html2canvas(content).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            const imgWidth = 210; // A4 size width in mm
            const pageHeight = 297; // A4 size height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("MyCV.pdf");
        });
    };
    return (
        <div>
            <main>
                <section id="CV">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile_section__block">
                                    <div className="profile_top_details">
                                        <div className="profile_pic_titles">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="profile_images">
                                                        <img
                                                            src={
                                                                "/Images/profile.png"
                                                            }
                                                            alt="profile"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="profile_title">
                                                        <div className="title_user">
                                                            MUHAMMAD HAMZA
                                                        </div>
                                                        <div className="profession_job">
                                                            <div className="desc_profile">
                                                                Full-Stack Web
                                                                Developer | |
                                                                Html | | Css | |
                                                                Javascript | |
                                                                Bootstrap "5" |
                                                                | Laravell | |
                                                                Mysql
                                                                #Full-Stack Web
                                                                Developer
                                                                #webdeveloper
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="profile_bottom_all_details">
                                        <div className="profile_bottom_bg">
                                            <div className="profile_about_details">
                                                <About />
                                            </div>
                                            <div className="experience_details">
                                                <Experience />
                                            </div>
                                            <div className="education_details">
                                                <Education />
                                            </div>
                                            <div className="skills_details">
                                                <Skills />
                                            </div>
                                            <div className="project_details">
                                                <Projects />
                                            </div>
                                        </div>
                                        <SocialLinks/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="float_icon">
                    <Fab color="secondary" aria-label="edit">
                        <CloudDownloadIcon onClick={downloadPDF} />
                    </Fab>
                </div>
            </main>
        </div>
    );
};

export default Profile;
