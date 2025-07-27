import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = { [SubKey in K]?: Maybe<T[SubKey]> } & Omit<T, K>;
export type MakeMaybe<T, K extends keyof T> = { [SubKey in K]: Maybe<T[SubKey]> } & Omit<T, K>;
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Boolean: { input: boolean; output: boolean; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  Float: { input: number; output: number; }
  ID: { input: string; output: string; }
  Int: { input: number; output: number; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  String: { input: string; output: string; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  delete_logs?: Maybe<Scalars['Opaque']['output']>;
  /** Deletes zero or more records from the `airtable_data_edge` collection */
  deleteFromairtable_data_edgeCollection: Airtable_Data_EdgeDeleteResponse;
  /** Deletes zero or more records from the `logs` collection */
  deleteFromlogsCollection: LogsDeleteResponse;
  /** Deletes zero or more records from the `prisoner_stats` collection */
  deleteFromprisoner_statsCollection: Prisoner_StatsDeleteResponse;
  /** Adds one or more `airtable_data_edge` records to the collection */
  insertIntoairtable_data_edgeCollection?: Maybe<Airtable_Data_EdgeInsertResponse>;
  /** Adds one or more `logs` records to the collection */
  insertIntologsCollection?: Maybe<LogsInsertResponse>;
  /** Adds one or more `prisoner_stats` records to the collection */
  insertIntoprisoner_statsCollection?: Maybe<Prisoner_StatsInsertResponse>;
  /** Updates zero or more records in the `airtable_data_edge` collection */
  updateairtable_data_edgeCollection: Airtable_Data_EdgeUpdateResponse;
  /** Updates zero or more records in the `logs` collection */
  updatelogsCollection: LogsUpdateResponse;
  /** Updates zero or more records in the `prisoner_stats` collection */
  updateprisoner_statsCollection: Prisoner_StatsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromairtable_Data_EdgeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Airtable_Data_EdgeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LogsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprisoner_StatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Prisoner_StatsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoairtable_Data_EdgeCollectionArgs = {
  objects: Array<Airtable_Data_EdgeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntologsCollectionArgs = {
  objects: Array<LogsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprisoner_StatsCollectionArgs = {
  objects: Array<Prisoner_StatsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateairtable_Data_EdgeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Airtable_Data_EdgeFilter>;
  set: Airtable_Data_EdgeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LogsFilter>;
  set: LogsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprisoner_StatsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Prisoner_StatsFilter>;
  set: Prisoner_StatsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `airtable_data_edge` */
  airtable_data_edgeCollection?: Maybe<Airtable_Data_EdgeConnection>;
  /** A pagable collection of type `logs` */
  logsCollection?: Maybe<LogsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `prisoner_stats` */
  prisoner_statsCollection?: Maybe<Prisoner_StatsConnection>;
};


/** The root type for querying data */
export type QueryAirtable_Data_EdgeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Airtable_Data_EdgeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Airtable_Data_EdgeOrderBy>>;
};


/** The root type for querying data */
export type QueryLogsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LogsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LogsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPrisoner_StatsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Prisoner_StatsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Prisoner_StatsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Airtable_Data_Edge = {
  __typename?: 'airtable_data_edge';
  address?: Maybe<Scalars['String']['output']>;
  address_for_letters?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['Int']['output']>;
  articles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  can_write?: Maybe<Scalars['Boolean']['output']>;
  coordinates?: Maybe<Scalars['String']['output']>;
  created_time?: Maybe<Scalars['Datetime']['output']>;
  date_of_arrest?: Maybe<Scalars['String']['output']>;
  date_of_birth?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  formatted_description?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  institution_short_name?: Maybe<Scalars['String']['output']>;
  interests?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  last_sync?: Maybe<Scalars['Datetime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
} & Node;

export type Airtable_Data_EdgeConnection = {
  __typename?: 'airtable_data_edgeConnection';
  edges: Array<Airtable_Data_EdgeEdge>;
  pageInfo: PageInfo;
};

export type Airtable_Data_EdgeDeleteResponse = {
  __typename?: 'airtable_data_edgeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Airtable_Data_Edge>;
};

export type Airtable_Data_EdgeEdge = {
  __typename?: 'airtable_data_edgeEdge';
  cursor: Scalars['String']['output'];
  node: Airtable_Data_Edge;
};

export type Airtable_Data_EdgeFilter = {
  address?: InputMaybe<StringFilter>;
  address_for_letters?: InputMaybe<StringFilter>;
  age?: InputMaybe<IntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Airtable_Data_EdgeFilter>>;
  articles?: InputMaybe<StringListFilter>;
  can_write?: InputMaybe<BooleanFilter>;
  coordinates?: InputMaybe<StringFilter>;
  created_time?: InputMaybe<DatetimeFilter>;
  date_of_arrest?: InputMaybe<StringFilter>;
  date_of_birth?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  formatted_description?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  institution_short_name?: InputMaybe<StringFilter>;
  interests?: InputMaybe<StringListFilter>;
  last_sync?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Airtable_Data_EdgeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Airtable_Data_EdgeFilter>>;
  photo?: InputMaybe<StringFilter>;
  published?: InputMaybe<BooleanFilter>;
  region?: InputMaybe<StringFilter>;
  release_date?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
};

export type Airtable_Data_EdgeInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address_for_letters?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  can_write?: InputMaybe<Scalars['Boolean']['input']>;
  coordinates?: InputMaybe<Scalars['String']['input']>;
  created_time?: InputMaybe<Scalars['Datetime']['input']>;
  date_of_arrest?: InputMaybe<Scalars['String']['input']>;
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formatted_description?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  institution_short_name?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last_sync?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Airtable_Data_EdgeInsertResponse = {
  __typename?: 'airtable_data_edgeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Airtable_Data_Edge>;
};

export type Airtable_Data_EdgeOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  address_for_letters?: InputMaybe<OrderByDirection>;
  age?: InputMaybe<OrderByDirection>;
  can_write?: InputMaybe<OrderByDirection>;
  coordinates?: InputMaybe<OrderByDirection>;
  created_time?: InputMaybe<OrderByDirection>;
  date_of_arrest?: InputMaybe<OrderByDirection>;
  date_of_birth?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  formatted_description?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  institution_short_name?: InputMaybe<OrderByDirection>;
  last_sync?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  photo?: InputMaybe<OrderByDirection>;
  published?: InputMaybe<OrderByDirection>;
  region?: InputMaybe<OrderByDirection>;
  release_date?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
};

export type Airtable_Data_EdgeUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  address_for_letters?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  can_write?: InputMaybe<Scalars['Boolean']['input']>;
  coordinates?: InputMaybe<Scalars['String']['input']>;
  created_time?: InputMaybe<Scalars['Datetime']['input']>;
  date_of_arrest?: InputMaybe<Scalars['String']['input']>;
  date_of_birth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formatted_description?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  institution_short_name?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  last_sync?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Airtable_Data_EdgeUpdateResponse = {
  __typename?: 'airtable_data_edgeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Airtable_Data_Edge>;
};

export type Logs = {
  __typename?: 'logs';
  duration?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
} & Node;

export type LogsConnection = {
  __typename?: 'logsConnection';
  edges: Array<LogsEdge>;
  pageInfo: PageInfo;
};

export type LogsDeleteResponse = {
  __typename?: 'logsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Logs>;
};

export type LogsEdge = {
  __typename?: 'logsEdge';
  cursor: Scalars['String']['output'];
  node: Logs;
};

export type LogsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LogsFilter>>;
  duration?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LogsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LogsFilter>>;
  status?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DatetimeFilter>;
  type?: InputMaybe<StringFilter>;
};

export type LogsInsertInput = {
  duration?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LogsInsertResponse = {
  __typename?: 'logsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Logs>;
};

export type LogsOrderBy = {
  duration?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  message?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  timestamp?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
};

export type LogsUpdateInput = {
  duration?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LogsUpdateResponse = {
  __typename?: 'logsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Logs>;
};

export type Prisoner_Stats = {
  __typename?: 'prisoner_stats';
  address_count?: Maybe<Scalars['Int']['output']>;
  age_ranges?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['Int']['output'];
  imprisoned_count?: Maybe<Scalars['Int']['output']>;
  in_process_count?: Maybe<Scalars['Int']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  out_count?: Maybe<Scalars['Int']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
} & Node;

export type Prisoner_StatsConnection = {
  __typename?: 'prisoner_statsConnection';
  edges: Array<Prisoner_StatsEdge>;
  pageInfo: PageInfo;
};

export type Prisoner_StatsDeleteResponse = {
  __typename?: 'prisoner_statsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Prisoner_Stats>;
};

export type Prisoner_StatsEdge = {
  __typename?: 'prisoner_statsEdge';
  cursor: Scalars['String']['output'];
  node: Prisoner_Stats;
};

export type Prisoner_StatsFilter = {
  address_count?: InputMaybe<IntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Prisoner_StatsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  imprisoned_count?: InputMaybe<IntFilter>;
  in_process_count?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Prisoner_StatsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Prisoner_StatsFilter>>;
  out_count?: InputMaybe<IntFilter>;
  total_count?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<StringFilter>;
};

export type Prisoner_StatsInsertInput = {
  address_count?: InputMaybe<Scalars['Int']['input']>;
  age_ranges?: InputMaybe<Scalars['JSON']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  imprisoned_count?: InputMaybe<Scalars['Int']['input']>;
  in_process_count?: InputMaybe<Scalars['Int']['input']>;
  out_count?: InputMaybe<Scalars['Int']['input']>;
  total_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type Prisoner_StatsInsertResponse = {
  __typename?: 'prisoner_statsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Prisoner_Stats>;
};

export type Prisoner_StatsOrderBy = {
  address_count?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  imprisoned_count?: InputMaybe<OrderByDirection>;
  in_process_count?: InputMaybe<OrderByDirection>;
  out_count?: InputMaybe<OrderByDirection>;
  total_count?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Prisoner_StatsUpdateInput = {
  address_count?: InputMaybe<Scalars['Int']['input']>;
  age_ranges?: InputMaybe<Scalars['JSON']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  imprisoned_count?: InputMaybe<Scalars['Int']['input']>;
  in_process_count?: InputMaybe<Scalars['Int']['input']>;
  out_count?: InputMaybe<Scalars['Int']['input']>;
  total_count?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
};

export type Prisoner_StatsUpdateResponse = {
  __typename?: 'prisoner_statsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Prisoner_Stats>;
};

export type PrisonerQueryVariables = Exact<{
  id: StringFilter;
}>;


export type PrisonerQuery = { __typename?: 'Query', airtable_data_edgeCollection?: { __typename?: 'airtable_data_edgeConnection', edges: Array<{ __typename?: 'airtable_data_edgeEdge', node: { __typename?: 'airtable_data_edge', address?: string | null, address_for_letters?: string | null, age?: number | null, articles?: Array<string | null> | null, can_write?: boolean | null, coordinates?: string | null, created_time?: any | null, date_of_arrest?: string | null, date_of_birth?: string | null, description?: string | null, formatted_description?: string | null, gender?: string | null, id: string, institution_short_name?: string | null, interests?: Array<string | null> | null, last_sync?: any | null, name?: string | null, photo?: string | null, published?: boolean | null, region?: string | null, release_date?: string | null; slug?: string | null, status?: string | null, } }> } | null };

export type PrisonerItemFragment = { __typename?: 'airtable_data_edge', address?: string | null, address_for_letters?: string | null, age?: number | null, articles?: Array<string | null> | null, can_write?: boolean | null, coordinates?: string | null, created_time?: any | null, date_of_arrest?: string | null, date_of_birth?: string | null, description?: string | null, formatted_description?: string | null, gender?: string | null, id: string, institution_short_name?: string | null, interests?: Array<string | null> | null, last_sync?: any | null, name?: string | null, photo?: string | null, published?: boolean | null, region?: string | null, release_date?: string | null; slug?: string | null, status?: string | null, };

export type PrisonersQueryVariables = Exact<{
  filter?: InputMaybe<Airtable_Data_EdgeFilter>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PrisonersQuery = { __typename?: 'Query', airtable_data_edgeCollection?: { __typename?: 'airtable_data_edgeConnection', edges: Array<{ __typename?: 'airtable_data_edgeEdge', node: { __typename?: 'airtable_data_edge', address?: string | null, address_for_letters?: string | null, age?: number | null, articles?: Array<string | null> | null, can_write?: boolean | null, coordinates?: string | null, created_time?: any | null, date_of_arrest?: string | null, date_of_birth?: string | null, description?: string | null, formatted_description?: string | null, gender?: string | null, id: string, institution_short_name?: string | null, interests?: Array<string | null> | null, last_sync?: any | null, name?: string | null, photo?: string | null, published?: boolean | null, region?: string | null, release_date?: string | null; slug?: string | null, status?: string | null, } }> } | null };

export type PrisonerStatusCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type PrisonerStatusCountsQuery = { __typename?: 'Query', prisoner_statsCollection?: { __typename?: 'prisoner_statsConnection', edges: Array<{ __typename?: 'prisoner_statsEdge', node: { __typename?: 'prisoner_stats', address_count?: number | null, age_ranges?: any | null, created_at?: any | null, id: number, imprisoned_count?: number | null, in_process_count?: number | null, out_count?: number | null, total_count?: number | null, updated_at?: string | null } }> } | null };

export const PrisonerItemFragmentDoc = gql`
    fragment PrisonerItem on airtable_data_edge {
  id
  created_time
  name
  description
  formatted_description
  articles
  photo
  coordinates
  institution_short_name
  address
  date_of_arrest
  address_for_letters
  date_of_birth
  age
  gender
  region
  status
  published
  interests
  can_write
  slug
  last_sync
  release_date
}
    `;
export const PrisonerDocument = gql`
    query prisoner($id: StringFilter!) {
  airtable_data_edgeCollection(filter: {id: $id}) {
    edges {
      node {
        ...PrisonerItem
      }
    }
  }
}
    ${PrisonerItemFragmentDoc}`;

/**
 * __usePrisonerQuery__
 *
 * To run a query within a React component, call `usePrisonerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrisonerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrisonerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePrisonerQuery(baseOptions: Apollo.QueryHookOptions<PrisonerQuery, PrisonerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrisonerQuery, PrisonerQueryVariables>(PrisonerDocument, options);
      }
export function usePrisonerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrisonerQuery, PrisonerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrisonerQuery, PrisonerQueryVariables>(PrisonerDocument, options);
        }
export function usePrisonerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PrisonerQuery, PrisonerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PrisonerQuery, PrisonerQueryVariables>(PrisonerDocument, options);
        }
export type PrisonerQueryHookResult = ReturnType<typeof usePrisonerQuery>;
export type PrisonerLazyQueryHookResult = ReturnType<typeof usePrisonerLazyQuery>;
export type PrisonerSuspenseQueryHookResult = ReturnType<typeof usePrisonerSuspenseQuery>;
export type PrisonerQueryResult = Apollo.QueryResult<PrisonerQuery, PrisonerQueryVariables>;
export const PrisonersDocument = gql`
    query prisoners($offset: Int, $filter: airtable_data_edgeFilter) {
  airtable_data_edgeCollection(first: $offset, filter: $filter) {
    edges {
      node {
        ...PrisonerItem
      }
    }
  }
}
    ${PrisonerItemFragmentDoc}`;

/**
 * __usePrisonersQuery__
 *
 * To run a query within a React component, call `usePrisonersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrisonersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrisonersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePrisonersQuery(baseOptions?: Apollo.QueryHookOptions<PrisonersQuery, PrisonersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrisonersQuery, PrisonersQueryVariables>(PrisonersDocument, options);
      }
export function usePrisonersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrisonersQuery, PrisonersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrisonersQuery, PrisonersQueryVariables>(PrisonersDocument, options);
        }
export function usePrisonersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PrisonersQuery, PrisonersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PrisonersQuery, PrisonersQueryVariables>(PrisonersDocument, options);
        }
export type PrisonersQueryHookResult = ReturnType<typeof usePrisonersQuery>;
export type PrisonersLazyQueryHookResult = ReturnType<typeof usePrisonersLazyQuery>;
export type PrisonersSuspenseQueryHookResult = ReturnType<typeof usePrisonersSuspenseQuery>;
export type PrisonersQueryResult = Apollo.QueryResult<PrisonersQuery, PrisonersQueryVariables>;
export const PrisonerStatusCountsDocument = gql`
    query prisonerStatusCounts {
  prisoner_statsCollection {
    edges {
      node {
        id
        total_count
        in_process_count
        imprisoned_count
        address_count
        out_count
        age_ranges
        created_at
        updated_at
      }
    }
  }
}
    `;

/**
 * __usePrisonerStatusCountsQuery__
 *
 * To run a query within a React component, call `usePrisonerStatusCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrisonerStatusCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrisonerStatusCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrisonerStatusCountsQuery(baseOptions?: Apollo.QueryHookOptions<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>(PrisonerStatusCountsDocument, options);
      }
export function usePrisonerStatusCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>(PrisonerStatusCountsDocument, options);
        }
export function usePrisonerStatusCountsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>(PrisonerStatusCountsDocument, options);
        }
export type PrisonerStatusCountsQueryHookResult = ReturnType<typeof usePrisonerStatusCountsQuery>;
export type PrisonerStatusCountsLazyQueryHookResult = ReturnType<typeof usePrisonerStatusCountsLazyQuery>;
export type PrisonerStatusCountsSuspenseQueryHookResult = ReturnType<typeof usePrisonerStatusCountsSuspenseQuery>;
export type PrisonerStatusCountsQueryResult = Apollo.QueryResult<PrisonerStatusCountsQuery, PrisonerStatusCountsQueryVariables>;