import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent {

  constructor(private router: Router) { }

  targetPoints: number = 0;
  selectedStories: Story[] = [];

  autoSelectStories() {
    if (this.targetPoints <= 0) {
      alert('Please Set a Valid Target Sprint Points');
      return;
    }

    const storedData = localStorage.getItem('Stories');
    if (!storedData) {
      alert('No stories available.');
      return;
    }

    const availableStories: Story[] = JSON.parse(storedData);
    availableStories.sort((a, b) => a.story_point - b.story_point);

    const selectedStories: Story[] = [];
    let totalPoints = 0;

    for (const story of availableStories) {
      if (totalPoints + story.story_point <= this.targetPoints) {
        selectedStories.push(story);
        totalPoints += story.story_point;
      } else {
        break;
      }
    }

    const generatedSprintsData = localStorage.getItem('GeneratedSprints');
    const generatedSprints = generatedSprintsData ? JSON.parse(generatedSprintsData) : [];
    generatedSprints.push(...selectedStories);
    localStorage.setItem('GeneratedSprints', JSON.stringify(generatedSprints));

    for (const selectedStory of selectedStories) {
      const index = availableStories.findIndex(story => story.id === selectedStory.id);
      if (index !== -1) {
        availableStories.splice(index, 1);
      }
    }
    if(selectedStories.length == 0){
      alert('No stories available.');
      return
    }
    localStorage.setItem('Stories', JSON.stringify(availableStories));
    this.selectedStories = selectedStories;
    this.router.navigate(['generated-sprint']);
  }

  clearSelectedStories() {
    this.selectedStories = [];
    localStorage.removeItem('Stories');
    alert('Cleared Succussfully')
  }

  clearSelectedSprints() {
    this.targetPoints = 0;
    localStorage.removeItem('GeneratedSprints');
    alert('Cleared Succussfully')
  }
  
}

interface Story {
  id: number;
  story_name: string;
  story_point: number;
}
