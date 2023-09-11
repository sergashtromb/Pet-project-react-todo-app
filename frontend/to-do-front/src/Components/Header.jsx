import React from "react";

import notify from '../img/notify.png';
import profile from '../img/profile.png';
import burger from '../img/burger.png';
import search from '../img/search.png';

import '../styles/Header.css';

function Header() {

    return (
        <div id="header">
            <button id="burger">

                <img src={burger} alt="" />

            </button>

            <div id="search_group">

                <input type="text" name="" id="search_task" placeholder="write you project name"/>
                <button id="image_search"><img src={search} alt="" /></button>
            </div>
            
            <div id="user_button_group">

                <button id="button_notification">
                    <img src={notify} alt="notify" />
                </button>
                <button id="user_profile">
                    <img src={profile} alt="profile" />
                </button>

            </div>

        </div>
    );

}

export default Header;