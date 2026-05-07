import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTaskData, type Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string | undefined>();
  name = input.required<string | undefined>();

  isAddingTask = signal(false);
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

  onStartAddTask() {
    this.isAddingTask.set(true);
    // const newTask: Task = {
    //   id: 't' + Math.random().toString(),
    //   userId: this.userId()!,
    //   title: 'New Task',
    //   summary: 'summary of the new task',
    //   dueDate: '2024-12-31',
    // };

    // this.tasks.update((tasks) => [...tasks, newTask]);
    // console.log('add task : ', this.tasks);
  }

  onCreateTask(taskData: NewTaskData) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId()!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
    console.log('add task : ', this.tasks);
    this.isAddingTask.set(false);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}
