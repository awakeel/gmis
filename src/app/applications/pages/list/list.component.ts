import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { jsonData } from '../../../core/json/applicationForm';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListApplicationComponent implements OnInit {
  applications:any[];
  listMetadata ;
  constructor(private serve: ApplicationService) {
    this.listMetadata = jsonData[1].data;
    console.log(this.listMetadata)
  }

  ngOnInit(): void {
    this.applications = this.serve.get();
    console.log(this.applications);
  }

}
