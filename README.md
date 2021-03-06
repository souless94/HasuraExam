# HasuraExam

Implementation of an app to consolidate courses using hasura.

### Languages

programming frameworks used:

1. python - fastapi
2. python - django
3. angular
4. codegen for graphql
5. hasura

### User creation

All users will be created in firebase -> hasura local users.
For this application there is only login with email and password from firebase.

### Models

models used in this application:

1. Appusers - users for application
   1.1 id - firebase user id
   1.2 username - firebase user id
   1.3 displayName - firebase user id
   1.4 email - firebase email
   1.5 hashed_password - hashed password of user
   1.6 role - user or admin

2. Courses
   2.2 id - autogenerated id
   2.3 title - title of course
   2.4 url - url to download the course (idea is to share google drive links)
   2.5 description - description of course

### Roles

1. Admin
   1.1 Can do what a user do.
   1.2 create users with user or admin role
   1.3 delete users
   1.4 view users

2. User
   2.1 create course
   2.2 update course
   2.3 delete course

3. Anonymous
   3.1 login to application

### Hosting

1. Integration Server - Hasura Cloud
2. business logic - Heroku
3. frontend server - Heroku / firebase
4. authentication - firebase
