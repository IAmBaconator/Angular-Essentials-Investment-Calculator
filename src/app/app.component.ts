import { Component } from '@angular/core';

import { AppHeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [AppHeaderComponent],
})
export class AppComponent {}
