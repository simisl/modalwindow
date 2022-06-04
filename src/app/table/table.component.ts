import { Component, OnInit } from '@angular/core';

interface Data{
  name: string
  age: number
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData!: Data[];
  btnTop!: number;
  newRecord!: Data;

  constructor() { }

  ngOnInit(): void {
    this.tableData = [
      {name:'XYZ', age:20.1},
      {name:'EDF', age:15.4},
      {name:'ABC', age:10.5},
    ]
    this.btnTop = this.tableData.length;
    this.newRecord = this.tableData[this.tableData.length-1];
  }
  updateTable(rowData: Data){
    this.newRecord = rowData;
    this.tableData = this.tableData.concat(rowData);
    this.btnTop = this.tableData.length;
  }

}
