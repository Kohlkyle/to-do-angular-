import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ToDo } from '../interfaces/to-do'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  toDoList: ToDo[] = [
    {
      task: 'Laundry',
      completed: true,
    },
    {
      task: 'Pay Bills',
      completed: true,
    },
    {
      task: 'Litter Box',
      completed: false,
    },
  ]
  searchTerm: string = ''

  constructor() {}

  ngOnInit(): void {}

  completeTask = (task: ToDo): void => {
    task.completed = !task.completed
  }

  deleteTask = (index: number): void => {
    this.toDoList.splice(index, 1)
  }

  addTask = (form: NgForm, anArrayOfTasks: ToDo[]): void => {
    console.log(form)

    let newTask: ToDo = {
      task: form.form.value.task,
      completed: form.form.value.completed === 'yes',
    }
    anArrayOfTasks.push(newTask)
  }

  setSearchTerm = (form: NgForm) => {
    this.searchTerm = form.form.value.term
  }

  filterTasks = (term: string): ToDo[] => {
    return this.toDoList.filter((item) => {
      let currentItem = item.task.toLowerCase().trim()
      return currentItem.includes(term.toLowerCase().trim())
    })
  }
}
