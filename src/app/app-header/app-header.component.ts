import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  text : string ='{ Dani Castilho - Web Developer }'
  el : any = document.getElementsByClassName('app-header__title');
  
  char : any ='';
  writer : any ='';
  next : any ='';
  constructor() { }

  typeWriter(text, el){
    this.char = text.split('').reverse();
    this.writer = setInterval(() => {
      if (!this.char.length) return clearInterval(this.writer);
      this.next = this.char.pop();
      el[0].innerHTML += '<span>' + this.next + '</span>';
    }, 120)
  }
   

  ngOnInit() {
     this.typeWriter(this.text, this.el)
  }

} 
