import { Component, input, inject } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  task = input.required<Task>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }

  // old way with decorators
  // @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter();
}
