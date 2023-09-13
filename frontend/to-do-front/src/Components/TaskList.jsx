import Reac from "react";
import { TypeTask } from "../Tools/types";
import Task from "./Task";


export function TaskList({list}: TypeTask[]) {

    return (

        <div className="task_column">
            {list.map((task) => (
                <Task data={task}/>
            ))}                    
        </div>

    );
}