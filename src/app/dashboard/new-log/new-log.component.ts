// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {LogModels} from "../../core/models/log.models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {
  logs: LogModels[] = [];
  logForm = new FormGroup({
    title: new FormControl('',Validators.required),
    message: new FormControl('', Validators.required,),
  });

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.logs.push(this.logForm.value);
    this.logForm.reset();
    this.messageService.add({severity:'success', summary: 'Success', detail:'Log submitted successfully'});
  }

}
