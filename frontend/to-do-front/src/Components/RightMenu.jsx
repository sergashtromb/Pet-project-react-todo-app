import React from "react";

import dashboard from '../img/dashboard.png';
import all_task from '../img/all_task.png';
import completed_task from '../img/completed_task.png';
import add_task_menu from '../img/add_task_menu.png';

import "../styles/RightMenu.css";

function RightMenu() {

    return (
        <div id="right_menu">
            <ul>
                <li><img src={dashboard} alt="" /><button>Dashboard</button></li>
                <li><img src={all_task} alt="" /><button>All tasks</button></li>
                <li><img src={completed_task} alt="" /><button>Completed tasks</button></li>
                <li><img src={add_task_menu} alt="" /><button>Add a task</button></li>
            </ul>
        </div>
    );
}

export default RightMenu;