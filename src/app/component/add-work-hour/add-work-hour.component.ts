import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddWorkHourService } from '../../services/add-work-hour/add-work-hour.service';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-work-hour',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, ButtonModule],
  templateUrl: './add-work-hour.component.html',
  styleUrl: './add-work-hour.component.scss'
})
export class AddWorkHourComponent {

  constructor(
    private addWorkHourService: AddWorkHourService,
    private loginService: LoginService, 
    private toastr: ToastrService,
    private router: Router
  ){}
    
  workHourForm!: FormGroup;

  ngOnInit() {
    this.workHourForm = new FormGroup({
      starterTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
    });
  }


  saveWorkHour(){
    if (this.workHourForm.valid) {
      const starterTime = this.formatTime(this.workHourForm.get('starterTime')?.value);
      const endTime = this.formatTime(this.workHourForm.get('endTime')?.value);

      const workHourData = {
        starterTime: starterTime,
        endTime: endTime
      };
      this.addWorkHourService.addWorkHour(workHourData).subscribe(
        response => {
          this.toastr.success('Work hours added successfully');
          this.workHourForm.reset();
        },
        error => {
          this.toastr.error('Failed to add work hours');
        }
      );
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(["/"]);
  }

  navigateStatistic(){
    this.router.navigate(["/statistic"])
  }

  private formatTime(time: string): string {
    return time + ':00';
  }

}
