import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-story-listing',
  templateUrl: './story-listing.component.html',
  styleUrls: ['./story-listing.component.css']
})
export class StoryListingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  Data_ArrayArray = Array();
  Stoires_Array = Array();

  ngOnInit() {
    const storedData = localStorage.getItem('Stories');
    if (storedData) {
      this.Stoires_Array = JSON.parse(storedData);
      this.Data_ArrayArray = this.Stoires_Array
    }
  }

}
