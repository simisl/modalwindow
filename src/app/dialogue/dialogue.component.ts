import { Component, ElementRef, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

interface rowData{
  name: string
  age: number
}

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  detailsForm!: FormGroup;
  validationMsg: any;
  @Input('display')display!:boolean;
  @Output()data =new EventEmitter<rowData>()
  @Output()close = new EventEmitter<string>()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+")])

    })
    this.validationMsg = {
      'name': [{
        type:'required', message:'Name is required'
      }],
      'age': [
        { type:'required', message:'Age is required'},
        { type:'pattern', message:'Only numbers are allowed' }]
    }

  }

  submit(data: any){
    this.detailsForm.markAllAsTouched()
    if(this.detailsForm.valid){
      this.data.emit(data);
    }

  }
  closeDialogue(){
    this.close.emit('close');
  }

}
