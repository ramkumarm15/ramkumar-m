import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from 'src/app/Model/navigation';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent implements OnInit {
  @Input() navigations!: Navigation;

  ngOnInit(): void {
    console.log(this.navigations);
  }
}
