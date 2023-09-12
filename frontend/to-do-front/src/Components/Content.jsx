import React from "react";
import { TypeTask } from "../Tools/types";
import Task from "./Task";

import "../styles/Content.css";

function Content() {

    let task_list: TypeTask[] = [
        {author_id: 0, id: 0, text: 'Погулять', is_done: true, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 1, text: 'Почитать', is_done: true, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")}
    ];

    return (
        <div id="content">
            <ul id="task_list">
                {task_list.map((task) => (
                    <li><Task data={task}/></li>
                ))}
            </ul>
        </div>
    );
}

export default Content;