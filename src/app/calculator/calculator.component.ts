import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inpt1:FormControl =  new FormControl<Number|undefined>(undefined,{validators:[Validators.required]}) ;
  inpt2: FormControl = new FormControl<Number|undefined>(undefined,{validators:[Validators.required]});
  result?: number;
  symbol?: string;
  count: number = 0;
  calculations: string[] = [];

  ngOnInit(): void {

  }

  onCalculate(symbol:string){
    this.symbol = symbol;
    // console.log(this.inpt1.value, this.inpt2.value)
    if(this.inpt1.invalid || this.inpt2.invalid) return;
    else if(this.inpt1.value === 0  || this.inpt2.value === 0) return;

    switch(symbol){
      case '+':
        this.result = this.inpt1.value + this.inpt2.value
        break;
      case '-':
        this.result = this.inpt1.value - this.inpt2.value
        break;
      case '*':
        this.result = this.inpt1.value * this.inpt2.value
        break;
      case '/':
        if(this.inpt2.value === 0) return alert("Can't divide by 0");
        this.result = this.inpt1.value / this.inpt2.value
        break;
      default:
        this.result = 0;
        break;
    }
    this.calculations.push(`${this.inpt1.value} ${this.symbol} ${this.inpt2.value} = ${this.result}`)
    //clear inputs
    this.clearInputs();
    this.count += 1
  }

  clearInputs(){
    this.inpt1.reset();
    this.inpt2.reset();

  }

  onReset(){
    this.clearInputs();
    this.result = undefined;
    this.symbol = undefined;
  }
}
