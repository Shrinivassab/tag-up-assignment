// @ts-ignore
import {Component, Input, OnInit} from '@angular/core';
import {LogModels} from "../../core/models/log.models";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-submitted-log',
  templateUrl: './submitted-log.component.html',
  styleUrls: ['./submitted-log.component.scss']
})
export class SubmittedLogComponent implements OnInit {

  @Input() logDetails: LogModels[];
  sortField: string;
  sortOrder: number;
  myDate: Date;

  constructor(private messageService: MessageService) {
    this.myDate = new Date();
  }

  ngOnInit() {
  }

  remove(log) {
    console.log(log);
    const index: number = this.logDetails.indexOf(log);
    if (index !== -1) {
      this.logDetails.splice(index, 1);
    }
    this.messageService.add({severity:'error', summary:'Deleted', detail:'Log data successfully deleted'});
  }

}
