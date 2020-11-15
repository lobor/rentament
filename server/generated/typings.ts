/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ctx from "../src/graphql/context"





declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  RegisterInput: { // input type
    agreement: boolean; // Boolean!
    confirmPassword: string; // String!
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Building: { // root type
    acquisitionFee?: number | null; // Float
    address?: string | null; // String
    boughtAt?: number | null; // Float
    buyingPrice?: number | null; // Int
    city?: string | null; // String
    description?: string | null; // String
    identifiant: string; // String!
    note?: string | null; // String
    superficie?: number | null; // Int
    taxFonciere?: number | null; // Float
    zipCode?: string | null; // String
  }
  Lease: { // root type
    autoRenew?: boolean | null; // Boolean
    billingPeriod: string; // String!
    dayToBePaid?: number | null; // Int
    endedAt?: number | null; // Float
    firstBill?: boolean | null; // Boolean
    firstBillAmount?: number | null; // Int
    firstBillCharges?: number | null; // Int
    firstBillEndDate?: number | null; // Float
    maintenance?: number | null; // Int
    monthlyAmount: number; // Int!
    paymentCafAmount: number; // Int!
    propertyId: string; // ID!
    rentHc: number; // Int!
    securityDeposit: number; // Int!
    startedAt: number; // Float!
    tenantId: string; // ID!
    type: string; // String!
  }
  Mutation: {};
  Property: { // root type
    address: string; // String!
    address2?: string | null; // String
    batiment?: string | null; // String
    city: string; // String!
    description?: string | null; // String
    escalier?: string | null; // String
    floor?: number | null; // Int
    identifiant: string; // String!
    nbBathroom?: number | null; // Int
    nbBedRoom?: number | null; // Int
    nbRoom?: number | null; // Int
    note?: string | null; // String
    number?: string | null; // String
    ownerId: string; // String!
    superficie?: string | null; // String
    type: string; // String!
    zipCode: string; // String!
  }
  Query: {};
  ReturnSuccess: { // root type
    status?: string | null; // String
  }
  Tenant: { // root type
    cityBirth?: string | null; // String
    civility: string; // String!
    comments?: string | null; // String
    dateBirthday?: number | null; // Float
    email?: string | null; // String
    employer?: string | null; // String
    employerAddress?: string | null; // String
    employerPhone?: string | null; // String
    firstName: string; // String!
    idExpired?: string | null; // String
    idNumber?: string | null; // String
    idtype?: string | null; // String
    lastName: string; // String!
    phone?: string | null; // String
    profession?: string | null; // String
    revenus?: number | null; // Int
    sendInvite?: boolean | null; // Boolean
    situationProf?: string | null; // String
    type: string; // String!
  }
  User: { // root type
    firstName: string; // String!
    token?: string | null; // String
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  RegisterInput: NexusGenInputs['RegisterInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Building: { // field return type
    acquisitionFee: number | null; // Float
    address: string | null; // String
    boughtAt: number | null; // Float
    buyingPrice: number | null; // Int
    city: string | null; // String
    description: string | null; // String
    id: string; // ID!
    identifiant: string; // String!
    note: string | null; // String
    superficie: number | null; // Int
    taxFonciere: number | null; // Float
    zipCode: string | null; // String
  }
  Lease: { // field return type
    autoRenew: boolean | null; // Boolean
    billingPeriod: string; // String!
    dayToBePaid: number | null; // Int
    endedAt: number | null; // Float
    firstBill: boolean | null; // Boolean
    firstBillAmount: number | null; // Int
    firstBillCharges: number | null; // Int
    firstBillEndDate: number | null; // Float
    id: string; // ID!
    maintenance: number | null; // Int
    monthlyAmount: number; // Int!
    paymentCafAmount: number; // Int!
    propertyId: string; // ID!
    rentHc: number; // Int!
    securityDeposit: number; // Int!
    startedAt: number; // Float!
    tenantId: string; // ID!
    type: string; // String!
  }
  Mutation: { // field return type
    login: NexusGenRootTypes['User'] | null; // User
    logout: NexusGenRootTypes['ReturnSuccess'] | null; // ReturnSuccess
    register: NexusGenRootTypes['User'] | null; // User
  }
  Property: { // field return type
    address: string; // String!
    address2: string | null; // String
    batiment: string | null; // String
    city: string; // String!
    description: string | null; // String
    escalier: string | null; // String
    floor: number | null; // Int
    id: string; // ID!
    identifiant: string; // String!
    nbBathroom: number | null; // Int
    nbBedRoom: number | null; // Int
    nbRoom: number | null; // Int
    note: string | null; // String
    number: string | null; // String
    ownerId: string; // String!
    superficie: string | null; // String
    type: string; // String!
    zipCode: string; // String!
  }
  Query: { // field return type
    buildings: Array<NexusGenRootTypes['Building'] | null> | null; // [Building]
    leases: Array<NexusGenRootTypes['Lease'] | null> | null; // [Lease]
    properties: Array<NexusGenRootTypes['Property'] | null> | null; // [Property]
    tenants: Array<NexusGenRootTypes['Tenant'] | null> | null; // [Tenant]
    user: NexusGenRootTypes['User']; // User!
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  ReturnSuccess: { // field return type
    status: string | null; // String
  }
  Tenant: { // field return type
    cityBirth: string | null; // String
    civility: string; // String!
    comments: string | null; // String
    dateBirthday: number | null; // Float
    email: string | null; // String
    employer: string | null; // String
    employerAddress: string | null; // String
    employerPhone: string | null; // String
    firstName: string; // String!
    id: string; // ID!
    idExpired: string | null; // String
    idNumber: string | null; // String
    idtype: string | null; // String
    lastName: string; // String!
    phone: string | null; // String
    profession: string | null; // String
    revenus: number | null; // Int
    sendInvite: boolean | null; // Boolean
    situationProf: string | null; // String
    type: string; // String!
  }
  User: { // field return type
    firstName: string; // String!
    id: string; // ID!
    token: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Building: { // field return type name
    acquisitionFee: 'Float'
    address: 'String'
    boughtAt: 'Float'
    buyingPrice: 'Int'
    city: 'String'
    description: 'String'
    id: 'ID'
    identifiant: 'String'
    note: 'String'
    superficie: 'Int'
    taxFonciere: 'Float'
    zipCode: 'String'
  }
  Lease: { // field return type name
    autoRenew: 'Boolean'
    billingPeriod: 'String'
    dayToBePaid: 'Int'
    endedAt: 'Float'
    firstBill: 'Boolean'
    firstBillAmount: 'Int'
    firstBillCharges: 'Int'
    firstBillEndDate: 'Float'
    id: 'ID'
    maintenance: 'Int'
    monthlyAmount: 'Int'
    paymentCafAmount: 'Int'
    propertyId: 'ID'
    rentHc: 'Int'
    securityDeposit: 'Int'
    startedAt: 'Float'
    tenantId: 'ID'
    type: 'String'
  }
  Mutation: { // field return type name
    login: 'User'
    logout: 'ReturnSuccess'
    register: 'User'
  }
  Property: { // field return type name
    address: 'String'
    address2: 'String'
    batiment: 'String'
    city: 'String'
    description: 'String'
    escalier: 'String'
    floor: 'Int'
    id: 'ID'
    identifiant: 'String'
    nbBathroom: 'Int'
    nbBedRoom: 'Int'
    nbRoom: 'Int'
    note: 'String'
    number: 'String'
    ownerId: 'String'
    superficie: 'String'
    type: 'String'
    zipCode: 'String'
  }
  Query: { // field return type name
    buildings: 'Building'
    leases: 'Lease'
    properties: 'Property'
    tenants: 'Tenant'
    user: 'User'
    users: 'User'
  }
  ReturnSuccess: { // field return type name
    status: 'String'
  }
  Tenant: { // field return type name
    cityBirth: 'String'
    civility: 'String'
    comments: 'String'
    dateBirthday: 'Float'
    email: 'String'
    employer: 'String'
    employerAddress: 'String'
    employerPhone: 'String'
    firstName: 'String'
    id: 'ID'
    idExpired: 'String'
    idNumber: 'String'
    idtype: 'String'
    lastName: 'String'
    phone: 'String'
    profession: 'String'
    revenus: 'Int'
    sendInvite: 'Boolean'
    situationProf: 'String'
    type: 'String'
  }
  User: { // field return type name
    firstName: 'String'
    id: 'ID'
    token: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    register: { // args
      input?: NexusGenInputs['RegisterInput'] | null; // RegisterInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Building" | "Lease" | "Mutation" | "Property" | "Query" | "ReturnSuccess" | "Tenant" | "User";

export type NexusGenInputNames = "RegisterInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}