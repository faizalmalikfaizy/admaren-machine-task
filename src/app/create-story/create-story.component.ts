import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent {

  constructor(private router: Router) { }
  Stories = Array();
  storedData: any
  Duplication_check: any
  New_story:any
  
  data = {
    story_name: "",
    story_point: ""
  }

  addStory() {

    this.Duplication_check = this.Stories.some(story => story.story_name === this.data.story_name);

    if (this.Duplication_check) {
      alert('This Story Name Already Exists. Please Enter a Different Story Name.');
    } else {
      this.New_story = {
        id: this.Stories.length + 1,
        story_name: this.data.story_name,
        story_point: this.data.story_point,
      };
      this.Stories.push(this.New_story);
      localStorage.setItem('Stories', JSON.stringify(this.Stories));
      this.router.navigate(['story-list']);
    }
  }

  ngOnInit(): void {
    this.storedData = localStorage.getItem('Stories');
    this.Stories = this.storedData ? JSON.parse(this.storedData) : [];
    }
}
