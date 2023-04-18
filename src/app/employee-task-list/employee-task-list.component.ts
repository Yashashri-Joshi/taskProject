import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-employee-task-list',
  templateUrl: './employee-task-list.component.html',
  styleUrls: ['./employee-task-list.component.css']
})

export class EmployeeTaskListComponent implements OnInit {
  public employeelist: any;
  public employeeData: any;
  constructor(public tasklistService: TaskListService) {
  }

  public ngOnInit() {
    this.tasklistService.getUserResponse().subscribe(resp => {
      this.employeelist = resp;
    })
  }

  public updateList(event: any, ind: any) {
    this.employeelist[ind].completed = event.checked;
  }
}