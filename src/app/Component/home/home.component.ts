import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  pageLoad: any;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`Ramkumar M`);
    this.pageLoad = setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  homeDescription: string = `Full Stack Developer who focus on user interface,developing 
  microservices and build business requirement into software solutions.`;

  ngOnDestroy(): void {
    clearTimeout(this.pageLoad);
  }
}
