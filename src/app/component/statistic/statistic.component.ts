import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic/statistic.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent implements OnInit{

  totalWorkHour: string = '';

  constructor(private statisticService: StatisticService, private router: Router) {}

  ngOnInit() {
    this.statisticService.getTotalWorkHour().subscribe(
      (data) => {
        this.totalWorkHour = data.totalWorkHour;
      },
      (error) => {
        console.error('Error fetching total work hour:', error);
      }
    );
  }

  back(){
    this.router.navigate(["/add-work-hour"])
  }
}
