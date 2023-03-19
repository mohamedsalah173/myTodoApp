import { Component, OnInit } from '@angular/core';
import { Todo } from './todoList';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(){

  }
todos:Todo []=[];

newTodo:string='';

addTodo():void{
  if(this.newTodo){
    let entredTodo = new Todo();
    if(this.todos.length === 0) {
      entredTodo.id = 1
    }
    entredTodo.id = this.todos.length +1;
    entredTodo.title = this.newTodo;
    entredTodo.status = false;
    this.todos.push(entredTodo);
    this.newTodo='';
  }
}
completed(id:number){
  this.todos[id].status = !this.todos[id].status
}

remove(id:number){
  this.todos.splice(id,1);
}

}
