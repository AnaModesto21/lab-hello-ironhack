import React from "react";

const Header = () => {

    return (
    <div className="header">
        <nav className="navbar navbar-expand-lg">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/ironhack-logo.svg" alt="ironhack-logo" width="30" height="24"/>
                </a>
                <a class="navbar-menu" href="#">
                    <img src="./menu-top.svg" alt="menu" className="img-menu"/>
                </a>
                </div>
            
        </nav>
            <div className="main-section">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
    </div>
    )
}

export default Header;