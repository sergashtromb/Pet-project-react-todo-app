import React from "react";
import { TypeTask } from "../Tools/types";

import "../styles/Task.css";

function Task({ data }: TypeTask) {
    
    return (
        <div className="task">
            <h3>{data.text}</h3>
            <p>Start date: {data.start_date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
            <p>End date: {data.end_date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
            <input type="checkbox" name="" id="" checked={data.is_done}/>
        </div>
    );
}

export default Task;