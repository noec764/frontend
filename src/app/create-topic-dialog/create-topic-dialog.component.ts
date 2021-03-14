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

  // Hide(): boolean {
  //   if (this.data.topic != '') {
  //     return true;
  //   }
  //   return false;
  // }

  onClick() {

    const formdata = new FormData();
    console.log("idCours :", this.data.idCours);
    console.log('newTopic', this.data.topic);
    formdata.append('idCours', this.data.idCours);
    formdata.append('newTopic', this.data.topic)
    this.messageService.sendMessage('saveNewTopic', formdata).subscribe(
      message => {
        console.log(message);
        if (message.status === 'error') {
          this.errormessage = 'Une erreur est apparue';
        }
        this.dialogRef.close();
      });

  }

  // isHidden(): boolean {
  //   return this.errormessage.length < 2;
  // }

}


