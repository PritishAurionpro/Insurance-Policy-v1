import { Component } from '@angular/core';
import { InsurancePolicyService } from '../services/insurance-policy.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddInsurancePolicyComponent } from '../add-insurance-policy/add-insurance-policy.component';
import { UpdateInsurancePolicyComponent } from '../update-insurance-policy/update-insurance-policy.component';
import { DeleteInsurancePolicyComponent } from '../delete-insurance-policy/delete-insurance-policy.component';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent {
  insurancePolicyData:any
  constructor(private insurancePolicy:InsurancePolicyService,private router:Router,private dialog:MatDialog){
    this.insurancePolicy.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
      console.log(this.insurancePolicyData)
    })
  }

  getAllInsurancePolicy(){
    this.insurancePolicy.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
      next:(res:any)=>{       
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    }) 
  }
  openAddInsurancePolicyDialog(){
    const dialogRef=this.dialog.open(AddInsurancePolicyComponent);
    console.log("DaailogRef:",dialogRef)
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);

    // }); 
  }

  // openAddInsurancePlanDialog() {
  //   try {
  //     const dialogRef = this.dialog.open(AddInsurancePlanComponent);
  //     console.log("DialogRef:", dialogRef);
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(`Dialog result: ${result}`);
  //     });
  //   } catch (error) {
  //     console.error("Error opening dialog:", error);
  //   }
  // }

  openUpdateInsurancePolicyDialog(){
    this.dialog.open(UpdateInsurancePolicyComponent)
  }
  openDeleteInsurancePolicyDialog(){
    this.dialog.open(DeleteInsurancePolicyComponent)
  }




}
