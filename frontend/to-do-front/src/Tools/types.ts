import { type } from "os"

export type TypeTask = {
    author_id: number,
    id: number,
    text: string,
    is_done: boolean,
    start_date: Date,
    end_date: Date,
    notify_date: Date,
}

export type Selection = {
    variable_name: string | undefined,
    right_value: any,
    comparison_type: Comparisons
}

export enum Comparisons {
    GREATER_THEN,
    LESS_THEN,
    EQUALS,
    GREATER_THEN_OR_EQUALS,
    LESS_THEN_OR_EQUALS,
    NO_EQUALS
}