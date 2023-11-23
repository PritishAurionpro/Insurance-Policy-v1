import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClaimComponent } from './claim/claim.component';
import { DocumentComponent } from './document/document.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsuranceSchemeComponent } from './insurance-scheme/insurance-scheme.component';
import { PaymentComponent } from './payment/payment.component';
import { SchemeDetailComponent } from './scheme-detail/scheme-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component'; 
import { ContactUsComponent } from './contact-us/contact-us.component'; 
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AgentComponent } from './agent/agent.component';
import { CustomerComponent } from './customer/customer.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from './delete-insurance-scheme/delete-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from './delete-insurance-plan/delete-insurance-plan.component';
import { AddInsurancePolicyComponent } from './add-insurance-policy/add-insurance-policy.component';
import { UpdateInsurancePolicyComponent } from './update-insurance-policy/update-insurance-policy.component';
import { DeleteInsurancePolicyComponent } from './delete-insurance-policy/delete-insurance-policy.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'insurance-plan', component: InsurancePlanComponent },
  { path: 'insurance-policy', component: InsurancePolicyComponent },
  { path: 'insurance-scheme', component: InsuranceSchemeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'scheme-detail', component: SchemeDetailComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin' , component: AdminComponent},
  { path: 'employee', component:EmployeeComponent},
  { path: 'agent', component:AgentComponent},
  { path: 'customer', component:CustomerComponent},
  { path: 'addInsuranceScheme', component:AddInsuranceSchemeComponent},
  { path: 'updateInsuranceScheme', component:UpdateInsuranceSchemeComponent},
  { path: 'deleteInsuranceScheme', component:DeleteInsuranceSchemeComponent},
  { path: 'addInsurancePlan',component:AddInsurancePlanComponent},
  { path: 'updateInsurancePlan', component:UpdateInsurancePlanComponent},
  { path: 'deleteInsuranceplan',component:DeleteInsurancePlanComponent},
  { path: 'addInsurancePolicy', component:AddInsurancePolicyComponent},
  { path: 'updateInsurancePolicy', component:UpdateInsurancePolicyComponent},
  { path: 'deleteInsuranePolicy', component:DeleteInsurancePolicyComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
