import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  teste = ">";

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildOne', 'Child One');
  }

  title = 'desafio-alliedbr';
}
