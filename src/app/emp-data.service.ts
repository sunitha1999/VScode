import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  emp1: string[]=["MSD",'E10','msd@sbc.net']
  emp2: string[]=["VK",'E11','vk@abc.net']
  emp3: string[]=["ST",'E13','st@abc.net']

  getEmp1(){
    return this.emp1
  }
  getEmp2(){
    return this.emp2
  }
  getEmp3(){
    return this.emp3
  }

  addInfo(info: any)
  {
    this.emp1.push(info)
    this.emp2.push(info)
    this.emp3.push(info)

    return this.emp1
  }
  constructor() { }
}
