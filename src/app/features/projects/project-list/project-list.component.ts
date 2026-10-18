import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../core/services/project.service';
import { ProjectCategoryService } from '../../../core/services/project-category.service';

import { ProjectRequest } from '../../../core/models/project-request.model';
import { ProjectResponse } from '../../../core/models/project-response.model';
import { ProjectCategoryRequest } from '../../../core/models/project-category-request.model';
import { ProjectCategoryResponse } from '../../../core/models/project-category-response.model';

interface ProjectCategory {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  /* =====================================================
     DATA
  ====================================================== */

  projects: ProjectResponse[] = [];

  categories: ProjectCategory[] = [];

  selectedCategoryId: number | null = null;


  /* =====================================================
     LOADING / ERROR
  ====================================================== */

  isLoadingProjects: boolean = false;

  isLoadingCategories: boolean = false;

  errorMessage: string = '';


  /* =====================================================
     ADD CATEGORY MODAL
  ====================================================== */

  showCategoryModal: boolean = false;

  categoryName: string = '';

  isAddingCategory: boolean = false;

  categoryError: string = '';

  categorySuccess: string = '';


  /* =====================================================
     ADD PROJECT MODAL
  ====================================================== */

  showProjectModal: boolean = false;

  isAddingProject: boolean = false;

  projectError: string = '';

  projectSuccess: string = '';

  projectName: string = '';

  projectDescription: string = '';

  liveLink: string = '';

  frontendGithubLink: string = '';

  backendGithubLink: string = '';

  demoVideoUrl: string = '';

  documentationUrl: string = '';

  projectImages: string = '';

  projectTechnologies: string = '';

  projectCategoryId: number | null = null;


  /* =====================================================
     CONSTRUCTOR
  ====================================================== */

  constructor(
    private projectService: ProjectService,
    private projectCategoryService: ProjectCategoryService
  ) {}


  /* =====================================================
     INIT
  ====================================================== */

  ngOnInit(): void {

    this.loadCategories();

    this.loadProjects();

  }


  /* =====================================================
     LOAD PROJECTS
  ====================================================== */

  loadProjects(): void {

    this.isLoadingProjects = true;

    this.errorMessage = '';

    this.projectService.getAllProjects().subscribe({

      next: (response: ProjectResponse[]) => {

        this.projects = response;

        this.isLoadingProjects = false;

      },

      error: () => {

        this.isLoadingProjects = false;

        this.errorMessage =
          'Unable to load projects. Please try again.';

      }

    });

  }


  /* =====================================================
     LOAD CATEGORIES
  ====================================================== */

  loadCategories(): void {

    this.isLoadingCategories = true;

    this.projectCategoryService.getAllCategories().subscribe({

      next: (response: ProjectCategoryResponse[]) => {

        this.categories = response.map(category => ({

          id: category.id,

          name: category.categoryName,

          description: 'Project category'

        }));

        this.isLoadingCategories = false;

      },

      error: () => {

        this.categories = [];

        this.isLoadingCategories = false;

      }

    });

  }


  /* =====================================================
     FILTERED PROJECTS
  ====================================================== */

  get filteredProjects(): ProjectResponse[] {

    if (this.selectedCategoryId === null) {

      return this.projects;

    }

    return this.projects.filter(
      project =>
        project.categoryId === this.selectedCategoryId
    );

  }


  /* =====================================================
     SELECT CATEGORY
  ====================================================== */

  selectCategory(categoryId: number): void {

    this.selectedCategoryId = categoryId;

  }


  /* =====================================================
     CATEGORY TITLE
  ====================================================== */

  getCategoryTitle(): string {

    if (this.selectedCategoryId === null) {

      return 'All Projects';

    }

    const category = this.categories.find(
      item => item.id === this.selectedCategoryId
    );

    return category
      ? category.name
      : 'Projects';

  }


  /* =====================================================
     PROJECT COUNT
  ====================================================== */

  getProjectCount(categoryId: number): number {

    return this.projects.filter(
      project => project.categoryId === categoryId
    ).length;

  }


  /* =====================================================
     OPEN CATEGORY MODAL
  ====================================================== */

  openCategoryModal(): void {

    this.categoryName = '';

    this.categoryError = '';

    this.categorySuccess = '';

    this.showCategoryModal = true;

  }


  /* =====================================================
     CLOSE CATEGORY MODAL
  ====================================================== */

  closeCategoryModal(): void {

    if (this.isAddingCategory) {

      return;

    }

    this.showCategoryModal = false;

    this.categoryName = '';

    this.categoryError = '';

    this.categorySuccess = '';

  }


  /* =====================================================
     PREVENT CATEGORY MODAL CLOSE
  ====================================================== */

  preventModalClose(event: MouseEvent): void {

    event.stopPropagation();

  }


  /* =====================================================
     ADD CATEGORY
  ====================================================== */

  addCategory(): void {

    const trimmedName =
      this.categoryName.trim();


    if (!trimmedName) {

      this.categoryError =
        'Please enter a category name.';

      return;

    }


    const request: ProjectCategoryRequest = {

      categoryName: trimmedName

    };


    this.isAddingCategory = true;

    this.categoryError = '';

    this.categorySuccess = '';


    this.projectCategoryService
      .addCategory(request)
      .subscribe({

        next: (response: ProjectCategoryResponse) => {

          this.isAddingCategory = false;


          /*
           * Add the new category immediately
           * without waiting for page refresh.
           */

          this.categories.push({

            id: response.id,

            name: response.categoryName,

            description: 'Project category'

          });


          /*
           * Select newly created category.
           */

          this.selectedCategoryId =
            response.id;


          this.categorySuccess =
            'Project category added successfully.';


          this.categoryName = '';


          /*
           * Close modal after success message.
           */

          setTimeout(() => {

            this.closeCategoryModal();

          }, 1000);

        },


        error: (error) => {

          this.isAddingCategory = false;


          if (error.status === 409) {

            this.categoryError =
              'This category already exists.';

          } else {

            this.categoryError =
              'Unable to add category. Please try again.';

          }

        }

      });

  }


  /* =====================================================
     OPEN ADD PROJECT MODAL
  ====================================================== */

  addProject(): void {

    this.projectError = '';

    this.projectSuccess = '';

    this.projectName = '';

    this.projectDescription = '';

    this.liveLink = '';

    this.frontendGithubLink = '';

    this.backendGithubLink = '';

    this.demoVideoUrl = '';

    this.documentationUrl = '';

    this.projectImages = '';

    this.projectTechnologies = '';

    this.projectCategoryId = null;

    this.showProjectModal = true;

  }


  /* =====================================================
     CLOSE PROJECT MODAL
  ====================================================== */

  closeProjectModal(): void {

    if (this.isAddingProject) {

      return;

    }

    this.showProjectModal = false;

    this.projectError = '';

    this.projectSuccess = '';

  }


  /* =====================================================
     PREVENT PROJECT MODAL CLOSE
  ====================================================== */

  preventProjectModalClose(event: MouseEvent): void {

    event.stopPropagation();

  }


  /* =====================================================
     SAVE PROJECT
  ====================================================== */

  saveProject(): void {

    const trimmedName =
      this.projectName.trim();

    const trimmedDescription =
      this.projectDescription.trim();


    /* -------------------------
       VALIDATION
    ------------------------- */

    if (!trimmedName) {

      this.projectError =
        'Please enter the project name.';

      return;

    }


    if (!trimmedDescription) {

      this.projectError =
        'Please enter the project description.';

      return;

    }


    if (this.projectCategoryId === null) {

      this.projectError =
        'Please select a project category.';

      return;

    }


    /* -------------------------
       IMAGE URLS
    ------------------------- */

    const imageUrls: string[] =
      this.projectImages
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);


    /* -------------------------
       TECHNOLOGIES
    ------------------------- */

    const technologies: string[] =
      this.projectTechnologies
        .split(',')
        .map(technology => technology.trim())
        .filter(technology => technology.length > 0);


    /* -------------------------
       REQUEST
    ------------------------- */

    const request: ProjectRequest = {

      projectName: trimmedName,

      projectDescription: trimmedDescription,

      liveLink:
        this.liveLink.trim() || undefined,

      frontendGithubLink:
        this.frontendGithubLink.trim() || undefined,

      backendGithubLink:
        this.backendGithubLink.trim() || undefined,

      imageUrls: imageUrls,

      demoVideoUrl:
        this.demoVideoUrl.trim() || undefined,

      documentationUrl:
        this.documentationUrl.trim() || undefined,

      technologies: technologies,

      categoryId: this.projectCategoryId

    };


    /* -------------------------
       API CALL
    ------------------------- */

    this.isAddingProject = true;

    this.projectError = '';

    this.projectSuccess = '';


    this.projectService
      .addProject(request)
      .subscribe({

        next: () => {

          this.isAddingProject = false;

          this.projectSuccess =
            'Project added successfully.';


          /*
           * Refresh project list.
           */

          this.loadProjects();


          /*
           * Close modal after showing success.
           */

          setTimeout(() => {

            this.closeProjectModal();

          }, 1000);

        },


        error: (error) => {

          this.isAddingProject = false;

          console.error(
            'Add project error:',
            error
          );


          if (error.status === 400) {

            this.projectError =
              'Invalid project details. Please check your information.';

          } else {

            this.projectError =
              'Unable to add project. Please try again.';

          }

        }

      });

  }


  /* =====================================================
     TRACK PROJECT
  ====================================================== */

  trackProject(
    index: number,
    project: ProjectResponse
  ): number {

    return project.id;

  }

}