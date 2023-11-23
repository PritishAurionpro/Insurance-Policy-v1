import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsurancePlanComponent } from '../insurance-plan/insurance-plan.component';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { InsurancePolicyService } from '../services/insurance-policy.service';

@Component({
  selector: 'app-delete-insurance-policy',
  templateUrl: './delete-insurance-policy.component.html',
  styleUrls: ['./delete-insurance-policy.component.css']
})
export class DeleteInsurancePolicyComponent {
  deleteInsurancePolicy= new FormGroup({
    policyNo:new FormControl(''),
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
  insurancePolicyData:any
   policy:any=[{}]
  constructor(private insuranceService:InsurancePolicyService,private router:Router){
    insuranceService.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
    })
  }
  getSelectedPolicy(event:any){
    this.insuranceService.getInsurancePolicyById(event.target.value).subscribe((data)=>{
      this.policy=data
      console.log("schemeId",this.policy)
    })
  }
  deleteInsurancePolicyData(data:any){
    this.insuranceService.deleteInsurancePolicy(data.policyId).subscribe({
      next:(result)=>{
        alert("Insurance data deleted Successfully")
        console.log(result)
        this.deleteInsurancePolicy.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}


