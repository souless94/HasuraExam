import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  json: any;
  timestamptz: any;
  uuid: any;
};



/** columns and relationships of "AppUsers" */
export type AppUsers = {
  __typename?: 'AppUsers';
  created_at: Scalars['timestamptz'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['String'];
  role: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};

/** aggregated selection of "AppUsers" */
export type AppUsers_Aggregate = {
  __typename?: 'AppUsers_aggregate';
  aggregate?: Maybe<AppUsers_Aggregate_Fields>;
  nodes: Array<AppUsers>;
};

/** aggregate fields of "AppUsers" */
export type AppUsers_Aggregate_Fields = {
  __typename?: 'AppUsers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<AppUsers_Max_Fields>;
  min?: Maybe<AppUsers_Min_Fields>;
};


/** aggregate fields of "AppUsers" */
export type AppUsers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<AppUsers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "AppUsers" */
export type AppUsers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<AppUsers_Max_Order_By>;
  min?: Maybe<AppUsers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "AppUsers" */
export type AppUsers_Arr_Rel_Insert_Input = {
  data: Array<AppUsers_Insert_Input>;
  on_conflict?: Maybe<AppUsers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "AppUsers". All fields are combined with a logical 'AND'. */
export type AppUsers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<AppUsers_Bool_Exp>>>;
  _not?: Maybe<AppUsers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<AppUsers_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  hashedPassword?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "AppUsers" */
export enum AppUsers_Constraint {
  /** unique or primary key constraint */
  AppUsersPkey = 'AppUsers_pkey',
  /** unique or primary key constraint */
  AppUsersUsernameKey = 'AppUsers_username_key'
}

/** input type for inserting data into table "AppUsers" */
export type AppUsers_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AppUsers_Max_Fields = {
  __typename?: 'AppUsers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "AppUsers" */
export type AppUsers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hashedPassword?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type AppUsers_Min_Fields = {
  __typename?: 'AppUsers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "AppUsers" */
export type AppUsers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hashedPassword?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "AppUsers" */
export type AppUsers_Mutation_Response = {
  __typename?: 'AppUsers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<AppUsers>;
};

/** input type for inserting object relation for remote table "AppUsers" */
export type AppUsers_Obj_Rel_Insert_Input = {
  data: AppUsers_Insert_Input;
  on_conflict?: Maybe<AppUsers_On_Conflict>;
};

/** on conflict condition type for table "AppUsers" */
export type AppUsers_On_Conflict = {
  constraint: AppUsers_Constraint;
  update_columns: Array<AppUsers_Update_Column>;
  where?: Maybe<AppUsers_Bool_Exp>;
};

/** ordering options when selecting data from "AppUsers" */
export type AppUsers_Order_By = {
  created_at?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hashedPassword?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "AppUsers" */
export type AppUsers_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "AppUsers" */
export enum AppUsers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  HashedPassword = 'hashedPassword',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "AppUsers" */
export type AppUsers_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  hashedPassword?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "AppUsers" */
export enum AppUsers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  HashedPassword = 'hashedPassword',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "Courses" */
export type Courses = {
  __typename?: 'Courses';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  uploadedby: Scalars['String'];
  url: Scalars['String'];
};

/** aggregated selection of "Courses" */
export type Courses_Aggregate = {
  __typename?: 'Courses_aggregate';
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "Courses" */
export type Courses_Aggregate_Fields = {
  __typename?: 'Courses_aggregate_fields';
  avg?: Maybe<Courses_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
  stddev?: Maybe<Courses_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Sum_Fields>;
  var_pop?: Maybe<Courses_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Var_Samp_Fields>;
  variance?: Maybe<Courses_Variance_Fields>;
};


/** aggregate fields of "Courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Courses" */
export type Courses_Aggregate_Order_By = {
  avg?: Maybe<Courses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Max_Order_By>;
  min?: Maybe<Courses_Min_Order_By>;
  stddev?: Maybe<Courses_Stddev_Order_By>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Order_By>;
  sum?: Maybe<Courses_Sum_Order_By>;
  var_pop?: Maybe<Courses_Var_Pop_Order_By>;
  var_samp?: Maybe<Courses_Var_Samp_Order_By>;
  variance?: Maybe<Courses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Courses" */
export type Courses_Arr_Rel_Insert_Input = {
  data: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** aggregate avg on columns */
export type Courses_Avg_Fields = {
  __typename?: 'Courses_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Courses" */
export type Courses_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  _not?: Maybe<Courses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uploadedby?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Courses" */
export enum Courses_Constraint {
  /** unique or primary key constraint */
  CoursesPkey = 'Courses_pkey'
}

/** input type for incrementing integer column in table "Courses" */
export type Courses_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "Courses" */
export type Courses_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploadedby?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  __typename?: 'Courses_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploadedby?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Courses" */
export type Courses_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploadedby?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  __typename?: 'Courses_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploadedby?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Courses" */
export type Courses_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploadedby?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "Courses" */
export type Courses_Mutation_Response = {
  __typename?: 'Courses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Courses>;
};

/** input type for inserting object relation for remote table "Courses" */
export type Courses_Obj_Rel_Insert_Input = {
  data: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** on conflict condition type for table "Courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns: Array<Courses_Update_Column>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** ordering options when selecting data from "Courses" */
export type Courses_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploadedby?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "Courses" */
export type Courses_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "Courses" */
export enum Courses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uploadedby = 'uploadedby',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "Courses" */
export type Courses_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploadedby?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Courses_Stddev_Fields = {
  __typename?: 'Courses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Courses" */
export type Courses_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Stddev_Pop_Fields = {
  __typename?: 'Courses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Courses" */
export type Courses_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Stddev_Samp_Fields = {
  __typename?: 'Courses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Courses" */
export type Courses_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Sum_Fields = {
  __typename?: 'Courses_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "Courses" */
export type Courses_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "Courses" */
export enum Courses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uploadedby = 'uploadedby',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Courses_Var_Pop_Fields = {
  __typename?: 'Courses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Courses" */
export type Courses_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Var_Samp_Fields = {
  __typename?: 'Courses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Courses" */
export type Courses_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Variance_Fields = {
  __typename?: 'Courses_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Courses" */
export type Courses_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Credentials = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeletedResponse = {
  __typename?: 'DeletedResponse';
  ok: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  id: Scalars['String'];
};

export type SignUpCredentials = {
  email: Scalars['String'];
  password: Scalars['String'];
  userType: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type UserObject = {
  __typename?: 'UserObject';
  displayName: Scalars['String'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['String'];
  userType: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  email: Scalars['String'];
  username: Scalars['String'];
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "createUser" */
  createUser?: Maybe<UserObject>;
  /** perform the action: "deleteUser" */
  deleteUser?: Maybe<DeletedResponse>;
  /** delete data from the table: "AppUsers" */
  delete_AppUsers?: Maybe<AppUsers_Mutation_Response>;
  /** delete single row from the table: "AppUsers" */
  delete_AppUsers_by_pk?: Maybe<AppUsers>;
  /** delete data from the table: "Courses" */
  delete_Courses?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "Courses" */
  delete_Courses_by_pk?: Maybe<Courses>;
  /** insert data into the table: "AppUsers" */
  insert_AppUsers?: Maybe<AppUsers_Mutation_Response>;
  /** insert a single row into the table: "AppUsers" */
  insert_AppUsers_one?: Maybe<AppUsers>;
  /** insert data into the table: "Courses" */
  insert_Courses?: Maybe<Courses_Mutation_Response>;
  /** insert a single row into the table: "Courses" */
  insert_Courses_one?: Maybe<Courses>;
  /** perform the action: "login" */
  login?: Maybe<LoginResponse>;
  /** update data of the table: "AppUsers" */
  update_AppUsers?: Maybe<AppUsers_Mutation_Response>;
  /** update single row of the table: "AppUsers" */
  update_AppUsers_by_pk?: Maybe<AppUsers>;
  /** update data of the table: "Courses" */
  update_Courses?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "Courses" */
  update_Courses_by_pk?: Maybe<Courses>;
};


/** mutation root */
export type Mutation_RootCreateUserArgs = {
  credentials: SignUpCredentials;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_AppUsersArgs = {
  where: AppUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AppUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CoursesArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_AppUsersArgs = {
  objects: Array<AppUsers_Insert_Input>;
  on_conflict?: Maybe<AppUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AppUsers_OneArgs = {
  object: AppUsers_Insert_Input;
  on_conflict?: Maybe<AppUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoursesArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_OneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  credentials: Credentials;
};


/** mutation root */
export type Mutation_RootUpdate_AppUsersArgs = {
  _set?: Maybe<AppUsers_Set_Input>;
  where: AppUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AppUsers_By_PkArgs = {
  _set?: Maybe<AppUsers_Set_Input>;
  pk_columns: AppUsers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CoursesArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_By_PkArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "AppUsers" */
  AppUsers: Array<AppUsers>;
  /** fetch aggregated fields from the table: "AppUsers" */
  AppUsers_aggregate: AppUsers_Aggregate;
  /** fetch data from the table: "AppUsers" using primary key columns */
  AppUsers_by_pk?: Maybe<AppUsers>;
  /** fetch data from the table: "Courses" */
  Courses: Array<Courses>;
  /** fetch aggregated fields from the table: "Courses" */
  Courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "Courses" using primary key columns */
  Courses_by_pk?: Maybe<Courses>;
};


/** query root */
export type Query_RootAppUsersArgs = {
  distinct_on?: Maybe<Array<AppUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AppUsers_Order_By>>;
  where?: Maybe<AppUsers_Bool_Exp>;
};


/** query root */
export type Query_RootAppUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<AppUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AppUsers_Order_By>>;
  where?: Maybe<AppUsers_Bool_Exp>;
};


/** query root */
export type Query_RootAppUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** query root */
export type Query_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** query root */
export type Query_RootCourses_By_PkArgs = {
  id: Scalars['bigint'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "AppUsers" */
  AppUsers: Array<AppUsers>;
  /** fetch aggregated fields from the table: "AppUsers" */
  AppUsers_aggregate: AppUsers_Aggregate;
  /** fetch data from the table: "AppUsers" using primary key columns */
  AppUsers_by_pk?: Maybe<AppUsers>;
  /** fetch data from the table: "Courses" */
  Courses: Array<Courses>;
  /** fetch aggregated fields from the table: "Courses" */
  Courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "Courses" using primary key columns */
  Courses_by_pk?: Maybe<Courses>;
};


/** subscription root */
export type Subscription_RootAppUsersArgs = {
  distinct_on?: Maybe<Array<AppUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AppUsers_Order_By>>;
  where?: Maybe<AppUsers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAppUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<AppUsers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AppUsers_Order_By>>;
  where?: Maybe<AppUsers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAppUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourses_By_PkArgs = {
  id: Scalars['bigint'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


export type UploadCourseMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  url: Scalars['String'];
  uploadedby: Scalars['String'];
}>;


export type UploadCourseMutation = (
  { __typename?: 'mutation_root' }
  & { insert_Courses_one?: Maybe<(
    { __typename?: 'Courses' }
    & Pick<Courses, 'id' | 'title' | 'url' | 'description' | 'uploadedby' | 'updated_at'>
  )> }
);

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = (
  { __typename?: 'query_root' }
  & { Courses: Array<(
    { __typename?: 'Courses' }
    & Pick<Courses, 'id' | 'title' | 'url' | 'uploadedby' | 'description' | 'updated_at'>
  )> }
);

export type GetCourseCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCourseCountQuery = (
  { __typename?: 'query_root' }
  & { Courses_aggregate: (
    { __typename?: 'Courses_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'Courses_aggregate_fields' }
      & Pick<Courses_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['bigint'];
}>;


export type DeleteCourseMutation = (
  { __typename?: 'mutation_root' }
  & { delete_Courses_by_pk?: Maybe<(
    { __typename?: 'Courses' }
    & Pick<Courses, 'title'>
  )> }
);

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['bigint'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}>;


export type UpdateCourseMutation = (
  { __typename?: 'mutation_root' }
  & { update_Courses_by_pk?: Maybe<(
    { __typename?: 'Courses' }
    & Pick<Courses, 'title'>
  )> }
);

export type GetProfileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProfileQuery = (
  { __typename?: 'query_root' }
  & { AppUsers_by_pk?: Maybe<(
    { __typename?: 'AppUsers' }
    & Pick<AppUsers, 'email' | 'username' | 'displayName' | 'role'>
  )> }
);

export type GetProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesQuery = (
  { __typename?: 'query_root' }
  & { AppUsers: Array<(
    { __typename?: 'AppUsers' }
    & Pick<AppUsers, 'id'>
  )> }
);

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = (
  { __typename?: 'mutation_root' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'id' | 'accessToken'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  userType: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'mutation_root' }
  & { createUser?: Maybe<(
    { __typename?: 'UserObject' }
    & Pick<UserObject, 'id' | 'email' | 'displayName' | 'hashedPassword' | 'userType'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  displayName: Scalars['String'];
  hashedPassword: Scalars['String'];
  userType: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_AppUsers_one?: Maybe<(
    { __typename?: 'AppUsers' }
    & Pick<AppUsers, 'displayName' | 'email' | 'role'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'mutation_root' }
  & { deleteUser?: Maybe<(
    { __typename?: 'DeletedResponse' }
    & Pick<DeletedResponse, 'ok'>
  )>, delete_AppUsers_by_pk?: Maybe<(
    { __typename?: 'AppUsers' }
    & Pick<AppUsers, 'id'>
  )> }
);

export const UploadCourseDocument = gql`
    mutation uploadCourse($title: String!, $description: String!, $url: String!, $uploadedby: String!) {
  insert_Courses_one(
    object: {title: $title, description: $description, url: $url, uploadedby: $uploadedby}
  ) {
    id
    title
    url
    description
    uploadedby
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadCourseGQL extends Apollo.Mutation<UploadCourseMutation, UploadCourseMutationVariables> {
    document = UploadCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCoursesDocument = gql`
    query getCourses {
  Courses {
    id
    title
    url
    uploadedby
    description
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCoursesGQL extends Apollo.Query<GetCoursesQuery, GetCoursesQueryVariables> {
    document = GetCoursesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetCourseCountDocument = gql`
    query getCourseCount {
  Courses_aggregate {
    aggregate {
      count(columns: url)
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCourseCountGQL extends Apollo.Query<GetCourseCountQuery, GetCourseCountQueryVariables> {
    document = GetCourseCountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCourseDocument = gql`
    mutation deleteCourse($id: bigint!) {
  delete_Courses_by_pk(id: $id) {
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCourseGQL extends Apollo.Mutation<DeleteCourseMutation, DeleteCourseMutationVariables> {
    document = DeleteCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: bigint!, $title: String, $description: String, $url: String) {
  update_Courses_by_pk(
    pk_columns: {id: $id}
    _set: {title: $title, description: $description, url: $url}
  ) {
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCourseGQL extends Apollo.Mutation<UpdateCourseMutation, UpdateCourseMutationVariables> {
    document = UpdateCourseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProfileDocument = gql`
    query GetProfile($id: String!) {
  AppUsers_by_pk(id: $id) {
    email
    username
    displayName
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfileGQL extends Apollo.Query<GetProfileQuery, GetProfileQueryVariables> {
    document = GetProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetProfilesDocument = gql`
    query GetProfiles {
  AppUsers {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfilesGQL extends Apollo.Query<GetProfilesQuery, GetProfilesQueryVariables> {
    document = GetProfilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SigninDocument = gql`
    mutation Signin($email: String!, $password: String!) {
  login(credentials: {email: $email, password: $password}) {
    id
    accessToken
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SigninGQL extends Apollo.Mutation<SigninMutation, SigninMutationVariables> {
    document = SigninDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $userType: String!) {
  createUser(
    credentials: {email: $email, password: $password, userType: $userType}
  ) {
    id
    email
    displayName
    hashedPassword
    userType
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignupGQL extends Apollo.Mutation<SignupMutation, SignupMutationVariables> {
    document = SignupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String!, $displayName: String!, $hashedPassword: String!, $userType: String!) {
  insert_AppUsers_one(
    object: {id: $id, username: $id, email: $email, displayName: $id, hashedPassword: $hashedPassword, role: $userType}
  ) {
    displayName
    email
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteUserDocument = gql`
    mutation deleteUser($username: String!) {
  deleteUser(username: $username) {
    ok
  }
  delete_AppUsers_by_pk(id: $username) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }