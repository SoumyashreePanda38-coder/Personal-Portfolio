import { Component, Input } from '@angular/core';
import { ProjectResponse } from '../../../core/models/project-response.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() project!: ProjectResponse;

  @Input() index: number = 0;

}