import { Component } from '@angular/core';

interface ServiceFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  description: string;
}

interface Service {
  id: string;
  badge: string;
  badgeClass: string;
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
  pricingTitle: string;
  pricing: PricingPlan[];
  contactClass: string;
  illustration: string;
  illustrationAlt: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services: Service[] = [

    {
      id: 'frontend',
      badge: 'POPULAR',
      badgeClass: 'orange-badge',
      icon: 'bi-code-slash',

      title: 'Front-End Development',

      description:
        'Modern, responsive and user-friendly websites that make your brand stand out.',

      features: [
        { text: 'Portfolio Websites' },
        { text: 'Landing Pages' },
        { text: 'Static & Dynamic Websites (5–6 pages)' },
        { text: 'Responsive Design (Mobile + Desktop)' },
        { text: 'Clean & Optimized Code' }
      ],

      pricingTitle: 'Pricing',

      pricing: [
        {
          name: 'Starter Pack',
          subtitle: 'One Page Application',
          price: '₹4,000 – ₹5,000',
          description: 'Single page website (Portfolio / Landing Page)'
        },
        {
          name: 'Standard Pack',
          subtitle: '5–6 Pages Website',
          price: '₹8,000 – ₹10,000',
          description: 'Multi-page website (5 to 6 pages)'
        }
      ],

      contactClass: 'orange-contact',

      illustration: 'assets/images/services/frontend-service.png',
      illustrationAlt: 'Front-end website development illustration'
    },


    {
      id: 'fullstack',
      badge: 'BEST VALUE',
      badgeClass: 'blue-badge',
      icon: 'bi-stack',

      title: 'Full-Stack Development',

      description:
        'Complete web applications with backend, database and deployment support.',

      features: [
        { text: 'Database Integration' },
        { text: 'Authentication & Authorization' },
        { text: 'Admin Panel / User Dashboard' },
        { text: 'Third-Party API Integration' },
        { text: 'Deployment (Live Hosting)' },
        { text: 'Ongoing Support (Limited Time)' }
      ],

      pricingTitle: 'Pricing',

      pricing: [
        {
          name: 'Starter Pack',
          subtitle: 'With Database (Limited Features)',
          price: '₹12,000 – ₹15,000',
          description: 'Core features with database integration'
        },
        {
          name: 'Advanced Pack',
          subtitle: 'Well-Established App',
          price: '₹20,000',
          description: 'Full features, complex logic (1 month)'
        }
      ],

      contactClass: 'blue-contact',

      illustration: 'assets/images/services/fullstack-service.png',
      illustrationAlt: 'Full-stack web application illustration'
    },


    {
      id: 'resume',
      badge: 'MOST AFFORDABLE',
      badgeClass: 'violet-badge',
      icon: 'bi-file-earmark-text',

      title: 'Resume Writing',

      description:
        'Professional, ATS-friendly resumes that help you stand out and get noticed.',

      features: [
        { text: 'Custom Resume Design' },
        { text: 'ATS Optimization' },
        { text: 'Cover Letter (Optional)' },
        { text: 'LinkedIn Profile Optimization' },
        { text: 'Multiple Formats (PDF / Word)' }
      ],

      pricingTitle: 'Pricing',

      pricing: [
        {
          name: 'Per Resume',
          subtitle: '',
          price: '₹200 – ₹300',
          description: 'Professional & ATS-friendly resume design'
        }
      ],

      contactClass: 'violet-contact',

      illustration: 'assets/images/services/resume-service.png',
      illustrationAlt: 'Professional resume writing illustration'
    }

  ];


  contactMe(serviceName: string): void {

    // Scroll to the contact section
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // You can later connect this with your contact form
    // and automatically select the requested service.
    console.log('Service selected:', serviceName);
  }

}