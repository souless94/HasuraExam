import { DeleteCourseGQL, UpdateCourseGQL } from './../../../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { UploadCourseGQL,GetCoursesQuery, GetCoursesGQL } from 'src/generated/graphql';
declare let alertify : any;
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})



export class CoursesPageComponent implements OnInit {
  toupdate = false;
  todelete = false;
  form!: FormGroup;
  deleteUpdateForm!: FormGroup;
  courses$!: Observable<GetCoursesQuery['Courses']>;
  private queryWatcher = this.courses.watch({});
  displayedColumns: string[] = ['id', 'title', 'url', 'description','uploadedby','updated_at'];
  dataSource : any;

  constructor(private fb: FormBuilder,
              private course: UploadCourseGQL,
              private courses: GetCoursesGQL,
              private updatecourse: UpdateCourseGQL,
              private deletecourse: DeleteCourseGQL) { }

  ngOnInit() {
    this.createForms();
    this.getCourses();
  }

  createForms(){
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      url: new FormControl('',[Validators.required])
    });

    this.deleteUpdateForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      title: new FormControl(''),
      description: new FormControl(''),
      url: new FormControl('')
    });

  }

  onCourseCreate(){
    let id = localStorage.getItem('id');
    let submission = Object.assign({},this.form.value);
    submission['uploadedby']=id;
    console.log(submission);
    this.course.mutate(
      submission
    ).subscribe(
      data => {
        this.queryWatcher.refetch();
        alertify.success(`Course created : ${data.data?.insert_Courses_one?.title}`)
      }
    );
  }


  onCourseChange(){
    if (this.toupdate) {
      this.updatecourse.mutate(this.deleteUpdateForm.value).subscribe(
        data => {
          this.queryWatcher.refetch();
          this.toupdate = false;
          alertify.success(`updated course ${data.data?.update_Courses_by_pk?.title} successfully`);
        }
      )
    }
    else if (this.todelete){
      let submission = Object.assign(this.deleteUpdateForm.value);
      let postdata = {'id': ''};
      postdata['id']= submission['id'];
      this.deletecourse.mutate(postdata).subscribe(
        data => {
          this.queryWatcher.refetch();
          this.todelete = false;
          alertify.success(`deleted course ${data.data?.delete_Courses_by_pk?.title} successfully`);
        }
      )
    }
  }

  getCourses() {
    this.courses$ = this.queryWatcher.valueChanges.pipe(
      pluck('data','Courses'));
      this.courses$.subscribe(
        data => {
          console.log(data);
          this.dataSource= new MatTableDataSource(data);
        }
      )
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
