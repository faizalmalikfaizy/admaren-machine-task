import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStoryComponent } from './create-story/create-story.component';
import { StoryListingComponent } from './story-listing/story-listing.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { SprintListingComponent } from './sprint-listing/sprint-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    StoryListingComponent,
    CreateSprintComponent,
    SprintListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
