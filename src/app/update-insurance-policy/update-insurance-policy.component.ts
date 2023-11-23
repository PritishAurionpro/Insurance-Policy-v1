import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePolicyService } from '../services/insurance-policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-insurance-policy',
  templateUrl: './update-insurance-policy.component.html',
  styleUrls: ['./update-insurance-policy.component.css']
})
export class UpdateInsurancePolicyComponent {
  updateInsurancePolicy= new FormGroup({
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

  updateInsurancePolicyData(data: any) {
    this.insuranceService.updateInsurancePolicy(data).subscribe({
      next: (result) => {
        alert("Insurance policy updated Successfully");
        console.log(result);
        this.updateInsurancePolicy.reset();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
      },
    });
  }
}
