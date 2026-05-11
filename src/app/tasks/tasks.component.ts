import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTaskData, type Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private tasksService: TasksService;
  userId = input.required<string | undefined>();
  name = input.required<string | undefined>();

  isAddingTask = signal(false);

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  selectedUserTasks = computed(() => {
    if (!this.userId()) {
      return [];
    }
    return this.tasksService.getUserTasks(this.userId()!);
  });

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
