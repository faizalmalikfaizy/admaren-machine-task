import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStoryComponent } from './create-story/create-story.component';
import { StoryListingComponent } from './story-listing/story-listing.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { SprintListingComponent } from './sprint-listing/sprint-listing.component';

const routes: Routes = [
  { path: 'add-story', component: CreateStoryComponent },
  { path: 'story-list', component: StoryListingComponent },
  { path: 'sprint-form', component: CreateSprintComponent },
  { path: 'generated-sprint', component: SprintListingComponent },
  { path: '', redirectTo: '/add-story', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
