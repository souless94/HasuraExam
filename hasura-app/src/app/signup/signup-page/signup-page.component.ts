import { AppUsers, DeleteUserGQL } from './../../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { CreateUserGQL, GetProfilesGQL, GetProfilesQuery, SignupGQL } from 'src/generated/graphql';
declare let alertify : any;

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  form!: FormGroup;
  deleteForm!: FormGroup;
  profiles$!: Observable<GetProfilesQuery['AppUsers']>;
  private queryWatcher = this.profiles.watch({});

  constructor(private fb: FormBuilder,
              private createFirebaseUsers: SignupGQL,
              private createAppUsers: CreateUserGQL,
              private deleteUser: DeleteUserGQL,
              private profiles: GetProfilesGQL) { }

  ngOnInit(): void {
    this.getProfiles();
    this.createForms();

  }

  createForms(){
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      userType: new FormControl('user',[Validators.required])
    });
    this.deleteForm = this.fb.group({
      username: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.createFirebaseUsers.mutate(
      this.form.value
    ).subscribe(
      data => {
        let postdata = {
          'id' : data!.data!.createUser!.id,
          'email': data!.data!.createUser!.email,
          'displayName': data!.data!.createUser!.displayName,
          'hashedPassword': data!.data!.createUser!.hashedPassword,
          'userType': data!.data!.createUser!.userType,
        }
        console.log(postdata);
        this.createAppUsers.mutate(postdata).subscribe(
          data => {
            let username = data.data?.insert_AppUsers_one?.displayName;
            this.queryWatcher.refetch();
            alertify.success(`User ${username} created Successfully`);

          }
        );
      },
      error => {
        alertify.error('there is an error in creating users');
      }
    );
  }

  getProfiles() {
    this.profiles$ = this.queryWatcher.valueChanges.pipe(
      pluck('data','AppUsers'));
    }

  onDelete(): void {
    this.deleteUser.mutate(this.deleteForm.value).subscribe(
      data => {
        this.queryWatcher.refetch();
        alertify.success(`user : ${this.deleteForm.value['username']} deleted successfully`);
      },
      error => {
        alertify.error(`issue deleting user : ${this.deleteForm.value['username']}`)
      }
    )

  }

}
