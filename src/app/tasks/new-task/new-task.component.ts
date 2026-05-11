import { type NewTaskData } from './../task/task.model';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);
  userId = input.required<string>();
  close = output<void>();

  protected enteredTitle = signal('');
  protected enteredSummary = signal('');
  protected enteredDueDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDueDate(),
      },
      this.userId(),
    );
    this.close.emit();
  }
}
