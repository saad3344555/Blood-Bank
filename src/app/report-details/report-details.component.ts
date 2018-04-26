import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  public bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O-', 'AB+', 'AB-', 'O+'];
  public isSubmitted = false;
  public isConfirmed = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    alert(this.isSubmitted);
  }

}
