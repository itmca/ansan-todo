import axios from 'axios';
import { ITodoItem } from '../recoil/todoRecoil';

export class TodoListService {
  public static async getTodoListService() {
    try {

      const response = await axios.get('http://localhost:3000/todos/');
      return response.data || [];
    } catch (error) {
      console.log(error);
    }

  }

  public static async toggleTodo(id: number, todo: ITodoItem) {
    try {

      const response = await axios.put(`http://localhost:3000/todos/${id}/`, todo);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }

  public static async deleteTodo(id: number) {
    try {

      const response = await axios.delete(`http://localhost:3000/todos/${id}/`);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  }
}
