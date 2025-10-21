import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class AppHeaderComponent {
  headerLogo = computed(() => {
    return 'investment-calculator-logo.png';
  });
}
