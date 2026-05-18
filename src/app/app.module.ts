import localeNlBe from '@angular/common/locales/nl-BE';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

registerLocaleData(localeNlBe);

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
