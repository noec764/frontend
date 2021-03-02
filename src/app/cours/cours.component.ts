import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MessageService} from "../message/message.service";


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})

export class CoursComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'idCours', 'nbTopic', 'nbPost', 'dateDernierMessage'];
  dataSource = new MatTableDataSource<cours>();
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;


  constructor(private service: MessageService, private router: Router) {
  }


  ngOnInit() {
    //Envoie le bon format de donnée dans le message, on peut mettre n'importe quoi dedans
    const formdata = new FormData();
    this.service.sendMessage("getCours", formdata).subscribe(
      message => {
        console.log(message);
        if (message.status === 'error') {
          this.router.navigateByUrl('/login');
        } else {
          this.dataSource.data = message.data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    );
  }
}


export class cours {
  nom: any;
  idCours: any;
  nbTopic: any;
  nbPost: any;
  dateDernierMessage: any;
}


