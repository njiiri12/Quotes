import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Njiiri yvonne", "Mahatma Gandhi", "live as if you were to die tomorrow.learn as if you were to live forever"),
    new Quote("njiiri yvonne", "Albert einstein", "If you want to live a happy life tie it to a goal.Not to people or things "),
    new Quote("Njiiri yvonne", "Maya Angeloa", " success is liking yourself liking wat you do and liking how you do it")
 
  ]
    

  addQuote(chosenQuote:any) {
    this.quotes.push(chosenQuote)
  }

  upvote(i:any) {
    this.quotes[i].upvotes ++;
  }
  downvote(i:any) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i:any) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}
