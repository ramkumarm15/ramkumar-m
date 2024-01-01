import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Navigation } from 'src/app/Model/navigation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  pageLoad: any;

  aboutPageNavigation!: Navigation;

  pageTitle: string = 'About Me';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`Ramkumar M | ${this.pageTitle}`);
    this.pageLoad = setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.aboutPageNavigation = {
      prevPage: {
        name: 'Home',
        url: '/',
      },
      nextpage: {
        name: 'Skills',
        url: '/skills',
      },
    };
  }

  imageUrl: string = 'assets/images/ramkumar.jpg';
  name: string = 'Ramkumar';
  experience: number = 2;
  description: string = `Greetings! I'm <span class='text-dark fw-bold'>${this.name}</span>, 
    a seasoned full-stack developer with over ${this.experience} years of hands-on experience at Cognizant, 
    where I've translated business requirements into robust software solutions. 
    I've developed a passion for crafting seamless, end-to-end applications that not only meet but exceed user expectations.
    In the realm of full-stack development, I specialize in creating seamless, user-centric experiences.
    My tech stack includes <span class='text-dark fw-bold'>Angular, Asp.Net Web API 6, SQL Server, and Azure.</span>`;

  ngOnDestroy(): void {
    clearTimeout(this.pageLoad);
  }
}
