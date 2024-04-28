export interface CustomerInfo {
  _id: number;
  docType: string;
  docNum: string;
  email: string;
  customerId: string;
  givenName: string;
  familyName1: string;
  phone: string;
}

export interface ProductsInfo {
  _id: number;
  productName: string;
  mbSpeed: number | null;
  gbData: number | null;
  productTypeName: string;
  numeracioTerminal: number;
  soldAt: string;
  customerId: string;
}

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}

export enum SortType {
  NAME = "name",
  ID = "customerId",
}
