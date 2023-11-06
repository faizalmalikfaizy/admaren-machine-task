import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-listing',
  templateUrl: './sprint-listing.component.html',
  styleUrls: ['./sprint-listing.component.css']
})
export class SprintListingComponent implements OnInit  {

  dataArray = Array();
  generatedSprint = Array();

  ngOnInit() {
    const Sprint_Data = localStorage.getItem('GeneratedSprints');
    if (Sprint_Data) {
      this.dataArray = JSON.parse(Sprint_Data);
      this.generatedSprint = this.dataArray
    }
  }
}
