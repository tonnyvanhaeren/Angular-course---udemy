import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string | undefined>();
  name = input.required<string | undefined>();

  tasks = signal<Task[]>([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  selectedUserTasks = computed(() => {
    if (!this.userId()) {
      return [];
    }

    return this.tasks().filter((task) => task.userId === this.userId());
  });

  onCompleteTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
    console.log('delete task : ', this.tasks);
  }
}
