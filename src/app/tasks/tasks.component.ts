import { Component, computed, input, signal } from '@angular/core';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
