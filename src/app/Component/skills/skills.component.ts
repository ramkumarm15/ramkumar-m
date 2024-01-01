import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Navigation } from 'src/app/Model/navigation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  loading: boolean = true;
  pageLoad: any;

  skillsPageNavigation!: Navigation;

  pageTitle: string = 'About Me';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`Ramkumar M | ${this.pageTitle}`);
    this.pageLoad = setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.skillsPageNavigation = {
      prevPage: {
        name: 'About',
        url: '/about',
      },
      nextpage: {
        name: 'Portfolio',
        url: '/portfolio',
      },
    };
  }
}
