import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MessageService} from "../message/message.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  displayedColumns: string[] = ['idTopic','titreTopic','nbPosts','dateDernierMessage','idCours'];
  dataSource = new MatTableDataSource<topic>();
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;


  constructor(private service: MessageService, private router: Router,private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //Envoie le bon format de donnée dans le message, on peut mettre n'importe quoi dedans
    const formdata = new FormData();
    const idCours = this.activatedRoute.snapshot.paramMap.get('idCours');
    formdata.append('idCours', idCours);

    this.service.sendMessage("getTopics", formdata).subscribe(
      message => {
        console.log(message);
        if (message.status === 'error') {
          this.router.navigateByUrl('/cours');
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
  titreTopic: any;
  idTopic: any;
  nbPosts: any;
  idCours: any;
  dateDernierMessage: any;
}


