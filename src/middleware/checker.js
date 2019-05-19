import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

const checker = (store) => (next) => (action) => {

    if (
        action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, That's bad idea");
    }

    // if (
    //     action.type === ADD_TODO
    // ) {
    //     alert("Don't forget to ", action.todo.name);
    //     return next(action);
    // }

    if (
        action.type === ADD_GOAL
    ) {
        alert("That's a great goal");
        return next(action);
    }
    if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, That's bad idea");
    }

    return next(action);
}

export default checker;