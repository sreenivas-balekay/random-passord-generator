import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers = false;
  includesSymbols = false;
  password = '';
  length = 0;

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  };

  onChangeUseNumbers(){
    this.includeNumbers = true;
  };

  onChangeSymbols(){
    this.includesSymbols = true;
  };

  onChangeLength(value: string){
   const parsedValue = parseInt(value);
   
   if(!isNaN(parsedValue)){
    this.length = parsedValue;
   }
  }


  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includesSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
