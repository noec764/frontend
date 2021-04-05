import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../create-topic/create-topic.component";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-create-topic-dialog',
  templateUrl: './create-topic-dialog.component.html',
  styleUrls: ['./create-topic-dialog.component.scss']
})
export class CreateTopicDialogComponent implements OnInit {
  errormessage: string;

  constructor(public dialogRef: MatDialogRef<CreateTopicDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              @Inject(MessageService) private messageService: MessageService) {
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



  onClick() {
    this.messageService.sendMessage('saveNewTopic', {idCours:this.data.idCours,newTopic:this.data.topic}).subscribe(
      message => {
        console.log(message);
        if (message.status === 'error') {
          this.errormessage = 'Une erreur est apparue';
        }
        this.dialogRef.close();
      });

  }

}


