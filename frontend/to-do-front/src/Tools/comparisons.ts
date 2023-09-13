import { match } from "assert";
import { Selection } from "./types";
import { Comparisons } from "./types";

export function array_selection(arr: any[], selects: Selection[]) {

    let result_arr: any[] = arr;

    selects.forEach((select) => {
        result_arr = result_arr.filter((elem) => {

            if(select.variable_name === undefined) {
                
                if(select.comparison_type === Comparisons.EQUALS) {

                    return elem === select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.NO_EQUALS) {

                    return elem !== select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.GREATER_THEN) {

                    return elem > select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.LESS_THEN) {

                    return elem < select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.GREATER_THEN_OR_EQUALS) {

                    return elem >= select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.LESS_THEN_OR_EQUALS) {

                    return elem <= select.right_value ? true: false;

                }

            } else {

                if(select.comparison_type === Comparisons.EQUALS) {

                    return elem[select.variable_name] === select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.NO_EQUALS) {

                    return elem[select.variable_name] !== select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.GREATER_THEN) {

                    return elem[select.variable_name] > select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.LESS_THEN) {

                    return elem[select.variable_name] < select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.GREATER_THEN_OR_EQUALS) {

                    return elem[select.variable_name] >= select.right_value ? true: false;

                } else if (select.comparison_type === Comparisons.LESS_THEN_OR_EQUALS) {

                    return elem[select.variable_name] <= select.right_value ? true: false;

                }

            }
        })
    });

    return result_arr;

}