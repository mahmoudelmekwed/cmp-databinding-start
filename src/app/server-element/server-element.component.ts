import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
    OnInit ,
    OnChanges ,
    DoCheck ,
    AfterContentInit ,
    AfterContentChecked ,
    AfterViewInit,
    OnDestroy{
  @Input('srvElement') element :  {type:string, name :string , content : string};
  @Input() name: string;
  @ViewChild('heading',{static:true}) header :ElementRef;

  constructor() {
    console.log('constructor called!');
   }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnchanges called!');
    console.log(changes);
  }
  

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content : ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text content : ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
