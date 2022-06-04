import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, Renderer2 } from '@angular/core';

interface rowData{
  name: string
  age: number
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  click!: boolean;
  open!: boolean;
  name!: string;
  age!: number;
  message!: string;
  @ViewChild('btn') button!:ElementRef<HTMLButtonElement>;
  @Output()newData = new EventEmitter<rowData>();
  @Input('top') btnTop!:number;
  topchange!:string;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.click = false;

  }
  ngAfterViewInit(){
    console.log('bt',this.btnTop)
    var elt = this.btnTop*48+205+'px'
    this.button.nativeElement.style.top = elt
    console.log('init',this.button.nativeElement.style.top,elt)
    console.log('event px value',this.button.nativeElement.style.top)
  }
  openDialogue(){
    this.open = true;
    this.click = true;
  }

  getData(rowData: rowData){
    this.newData.emit(rowData)
    this.open = false;
    this.click = false;
  }
  closeDialogue(value:string){
    if(value){
      this.open = false;
      this.click = false;
    }
  }

}
