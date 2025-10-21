import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //Properties
  enteredInitialInvestment = '0';//setup without using signals.
  enteredAnnualInvestiment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log('Submitted!!'); //Verify function is working properly.
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestiment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
  }
}
