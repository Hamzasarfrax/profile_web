import React from "react";

const Projects = () => {
    return (
        <div>
            <div className="project_block">
                <div class="heading">
                    <h1>Projects</h1>
                </div>
                <div className="project_details_profile">
                    <div className="profile_project_list">
                        <div className="company_details">
                            <div className="company_logo">
                                <img
                                    src="https://media.licdn.com/dms/image/C4D0BAQHqX9zo5hxz0A/company-logo_200_200/0/1672306665948?e=1725494400&v=beta&t=Y8j_5UBmx0202NW75Bb8J2OARh8PVs5arj_7lF5ZnDs"
                                    alt=""
                                />
                            </div>
                            <div className="company_title">Super sol</div>
                        </div>
                        <div className="dates_start_end">
                            12-05-2022 to 19-09-2024
                        </div>
                        <div className="project_details_url">
                            http://127.0.0.1:8000
                        </div>
                        <div className="project_tech">
                            <ul>
                                <li>Reactjs</li>
                                <li>laravel</li>
                                <li>node</li>
                                <li>jquery</li>
                            </ul>
                        </div>
                        <div className="project_description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dolorem maiores impedit sapiente quam,
                            doloremque esse sit consequuntur dicta dolorum
                            aperiam harum facere repellat labore rerum
                            laudantium illo aliquam voluptatem reprehenderit
                            nam. Eaque odit architecto incidunt laudantium?
                            Necessitatibus repudiandae tempora omnis, earum,
                            ipsa nihil reprehenderit neque aliquid aperiam
                            debitis ratione vitae?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
