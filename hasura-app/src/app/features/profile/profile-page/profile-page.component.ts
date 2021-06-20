import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetProfileGQL, GetProfileQuery } from 'src/generated/graphql';
import { catchError, pluck, switchMap } from 'rxjs/operators';
declare let alertify : any;
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profile$!: Observable<GetProfileQuery['AppUsers_by_pk']>;

  createUsers = false;
  isAdmin = false;

  constructor(private route: ActivatedRoute,
    private profile: GetProfileGQL,
    private router:Router
    ) { }

  ngOnInit() {
    this.getProfile();

  }

  getProfile(){
    this.profile$ = this.route.params.pipe(
      switchMap(({ id }) => this.profile.fetch({ id })),
      catchError(err => {
        console.log(err);
        alertify.error('There is an error, logging out now');
        this.logout();
        return of(undefined)
      }),
      pluck('data', 'AppUsers_by_pk'),
    );
  }



  logout(){
    localStorage.removeItem('auth_token');
    localStorage.removeItem('id');
    alertify.success('Logout Successfully');
    this.router.navigate(['login']);

  }

}
