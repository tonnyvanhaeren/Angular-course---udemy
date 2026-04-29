import { Component, computed, input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected users = DUMMY_USERS;
  selectedUserId = signal<string | undefined>(undefined);

  selectedUser = computed(() =>
    this.users.find((user) => user.id === this.selectedUserId()),
  );

  onSelectUser(id: string) {
    this.selectedUserId.update(() => id);
    console.log('Selected user : ' + this.selectedUser()?.name);
  }
}
