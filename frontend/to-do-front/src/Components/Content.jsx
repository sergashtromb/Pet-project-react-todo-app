import React from "react";
import { TypeTask, Comparisons, Selection } from "../Tools/types";
import Task from "./Task";
import { TaskList } from "./TaskList";
import { array_selection } from "../Tools/comparisons";

import "../styles/Content.css";

function Content() {

    let task_list: TypeTask[] = [
        {author_id: 1, id: 0, text: 'Погулять', is_done: true, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 1, text: 'Почитать', is_done: true, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 1, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 1, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 1, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 0, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 3, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
        {author_id: 2, id: 2, text: 'Сходить в магазин', is_done: false, start_date: new Date(), end_date: new Date("0001-01-01"), notify_date: new Date("0001-01-01")},
    ];
    let running_select: Selection[] = [
        {variable_name: "author_id", comparison_type: Comparisons.EQUALS, right_value: 1},
        {variable_name: "is_done", comparison_type: Comparisons.EQUALS, right_value: true}
    ];
    let running_task: TypeTask[] = array_selection(task_list, running_select);

    return (
        <div id="content">

            <div id="task_list">

                <div className="task_column">

                   <TaskList list={running_task} />

                </div>

                <div className="task_column">
                    
                </div>
                
            </div>

        </div>
    );
}

export default Content;