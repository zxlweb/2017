import {combineReducers} from 'redux';
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from './action.js';
const {SHOW_ALL}=VisibilityFilters;
// 处理visibility状态的reducers
function VisibilityFilter(state=SHOW_ALL,action){
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            
           return action.filter;
    
        default:
           state;
    }
}
// 处理todos的reducers
function todos(state=[],action){
    switch (action.type) {
        case ADD_TODO:
            
            // 将action中的数据和之前的state做一个‘运算’，返回一个新的state
           return [
               ...state,
               {
                    text:action.text,
                    completed:false
               }
           ];
            case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(todo==action.index){
                    return object.assign({},todo,{
                        completed:!todo.completed
                    })
                }
                return todo;
            })
    
        default:
            return state;
    }
}

const todoApp = combineReducers({
  VisibilityFilter,
  todos
})

export default todoApp