import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsurancePolicyService } from '../services/insurance-policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-insurance-policy',
  templateUrl: './add-insurance-policy.component.html',
  styleUrls: ['./add-insurance-policy.component.css']
})
export class AddInsurancePolicyComponent {
  addInsurancePolicy = new FormGroup({
    issueData:new FormControl(''),
    maturityDate:new FormControl(''),
    premiumType:new FormControl(''),
    premiumAmount:new FormControl(''),
    sumAssured:new FormControl(''),
    status:new FormControl(''),
    isActive:new FormControl(''),
    schemeId:new FormControl(''),
    claimId:new FormControl(''),
    paymentId:new FormControl('')
  })
  constructor(private insuranceService:InsurancePolicyService,private router:Router){}
  addNewInsurancePolicy(data:any){
    console.log("DAta : ",data)
    this.insuranceService.addNewInsurancePolicy(data).subscribe({
      next:(result)=>{
        alert("New Insurance Policy Added Successfully!")
        console.log("REsult",result)
        this.addInsurancePolicy.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }


}
