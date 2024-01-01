import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  pageLoad:any;
  ngOnInit(): void {
    this.pageLoad = setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.pageLoad)
  }
}
