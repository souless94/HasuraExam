import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninGQL } from 'src/generated/graphql';
declare let alertify : any;

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})


export class SigninPageComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private login: SigninGQL) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.login.mutate(
      this.form.value
    ).subscribe(
      data => {
        localStorage.setItem('auth_token', data!.data!.login!.accessToken);
        localStorage.setItem('id',data!.data!.login!.id );
        this.router.navigate(['profile',data!.data!.login!.id]);
        alertify.success('Login Successfully');
      },
      error => {
        alertify.error('there is a login error');
      }
    );
  }

}
