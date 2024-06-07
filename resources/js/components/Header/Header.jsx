import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="row">
                        <div className="col-4">
                            <div className="toggle_icon">
                                <RiMenu3Fill/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="menu_list_block">
                                <div className="logo_brand">
                                    <h1>
                                        Hamza Sarfraz
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
