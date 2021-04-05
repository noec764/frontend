import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MessageService} from "../message/message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BreadcrumbData} from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  breadcrumb: BreadcrumbData[];
  displayedColumns: string[] = ['titreTopic', 'nbPosts', 'dateDernierMessage'];
  dataSource = new MatTableDataSource<topic>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  idCours = '';

  constructor(private service: MessageService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumb = [
      {nom: 'Tous les cours', route: '/cours'},
      {nom: 'Cours actuel', route: ''}
    ];
  }

  ngOnInit(): void {

    this.idCours = this.activatedRoute.snapshot.paramMap.get('idCours');

    this.service.sendMessage('getTopics', {idCours:this.idCours}).subscribe(
      message => {
        console.log(message);
        if (message.status === 'error') {
          this.router.navigateByUrl('login');
        } else {
          this.dataSource.data = message.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }
}

export class topic {
  idTopic: any;
  titreTopic: any;
  nbPosts: any;
  idCours: any;
  dateDernierMessage: any;
}


