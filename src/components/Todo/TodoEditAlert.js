import Swal from "sweetalert2"
import Store from "../../redux/store/Store"
import Todo from './../../pages/TodoPage';
import { EditTodo } from "../../redux/state/todo/TodoSlice";
export function TodoEditAlert(i,item){
   Swal.fire({
    title:"update task",
    input:"text",
    inputValue:item,
    inputValidator:(value)=>{
        if(value){
            Store.dispatch(EditTodo({index:i,task:value}))
        }
    }
   })
}