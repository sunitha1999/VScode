import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../emp-data.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers: [EmpDataService]
})
export class EmpDetailsComponent implements OnInit {

  EmpInfoReceived1: string[]=[]
  EmpInfoReceived2: string[]=[]
  EmpInfoReceived3: string[]=[]

  getEmpInfoFromService1(){
    this.EmpInfoReceived1=this.edservice.getEmp1();
  }
  getEmpInfoFromService2(){
    this.EmpInfoReceived2=this.edservice.getEmp2();
  }
  getEmpInfoFromService3(){
    this.EmpInfoReceived3=this.edservice.getEmp3();
  }
  
  constructor(private edservice: EmpDataService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any)
  {
    this.edservice.addInfo(frm.value.location)
  }

}
