import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Shared Components */
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

/* Portfolio */
import { PortfolioComponent } from './features/portfolio/portfolio.component';

/* Feature Components */
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { EducationComponent } from './features/education/education.component';
import { ServicesComponent } from './features/services/services.component';
import { ContactComponent } from './features/contact/contact.component';

/* Project Components */
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { ProjectCardComponent } from './features/projects/project-card/project-card.component';
import { ProjectDetailsComponent } from './features/projects/project-details/project-details.component';

@NgModule({
  declarations: [

    AppComponent,

    /* Shared */
    NavbarComponent,
    FooterComponent,

    /* Portfolio */
    PortfolioComponent,

    /* Sections */
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ServicesComponent,
    ContactComponent,

    /* Projects */
    ProjectListComponent,
    ProjectCardComponent,
    ProjectDetailsComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}