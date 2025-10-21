import { Component } from '@angular/core';

import { AppHeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent, UserInputComponent],
})
export class AppComponent {}
