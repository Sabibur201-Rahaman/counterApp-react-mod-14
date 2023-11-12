import Swal from "sweetalert2";
import { RemoveTodo } from "../../redux/state/todo/TodoSlice";
import Store from "../../redux/store/Store";

export  function TodoDeleteAlert(i){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Store.dispatch(RemoveTodo(i))
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}