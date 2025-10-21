//Data Model for Investment Calculator.

//Primary accepted method (more popular).
export interface InvestmentInput{
    initialInvestment: number;
      duration: number;
      expectedReturn: number;
      annualInvestment: number;
}

//Alternative accepted method.
// type InvestmentInput = {
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// }