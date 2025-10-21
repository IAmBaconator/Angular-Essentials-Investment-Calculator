import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

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

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredAnnualInvestiment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestiment
    });

    this.enteredInitialInvestment = '0';//reset form to default values.
    this.enteredAnnualInvestiment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
