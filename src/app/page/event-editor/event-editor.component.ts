import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService, private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.params.subscribe((params) =>
      this.eventService.get(params['id']).subscribe((event) => {
        this.event = event || new Event();
      })
    );
  }

  onUpdate(event: NgForm): void {
    this.eventService.update(this.event);
  }
}
