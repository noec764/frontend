import {Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CreateTopicDialogComponent} from "../create-topic-dialog/create-topic-dialog.component";

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})

export class CreateTopicComponent implements OnInit {
  @Input() idCours: string;
  topic: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTopicDialogComponent, {
      width: '250px',
      data: {
        topic: this.topic,
        idCours: this.idCours
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
    });




  }


}


export interface DialogData {
  topic: any;
  idCours: string;
}




