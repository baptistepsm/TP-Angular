import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Jobs } from '../models/jobs';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  constructor(private jobs : JobsService, private form: FormBuilder) { }

  public list: Observable<Jobs[]> = of();

  ngOnInit(): void {
    this.list = this.jobs.ObservableJobs();
  }

}
