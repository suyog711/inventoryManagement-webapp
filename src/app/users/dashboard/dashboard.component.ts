import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public msgService: MsgService
  ) {
    this.msgService.showInfo('you are in the dashboard');
  }

  ngOnInit() {
    console.log('dashboard')
  }

}
