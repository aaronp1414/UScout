import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileStatsPaneComponent } from './profile-page/profile-stats-pane/profile-stats-pane.component';
import { ProfileVideoCarouselComponent } from './profile-page/profile-video-carousel/profile-video-carousel.component';
import { ProfileHeaderComponent } from './profile-page/profile-header/profile-header.component';
import { StatDisplayComponent } from './profile-page/profile-stats-pane/stat-display/stat-display.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    ProfilePageComponent,
    ProfileStatsPaneComponent,
    ProfileVideoCarouselComponent,
    ProfileHeaderComponent,
    StatDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
