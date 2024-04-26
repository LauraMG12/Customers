//TODO: create DDBB using "json-server"

import { Customer } from "./fakeData.model";

export const customers: Customer[] = [
  {
    customerInfo: {
      _id: 555555,
      docType: "nif",
      docNum: "11223344E",
      email: "it@parlem.com",
      customerId: "11111",
      givenName: "Enriqueta",
      familyName1: "Parlem",
      phone: "668668668",
    },
    productsInfo: [
      {
        _id: 1111111,
        productName: "FIBRA 1000MB",
        mbSpeed: 1000,
        gbData: null,
        productTypeName: "ftth",
        numeracioTerminal: 933933933,
        soldAt: "2019-01-09 14:26:17",
        customerId: "11111",
      },
      {
        _id: 1111112,
        productName: "MOBIL 500GB",
        mbSpeed: null,
        gbData: 500,
        productTypeName: "4G",
        numeracioTerminal: 696696969,
        soldAt: "2020-08-01 18:30:27",
        customerId: "11111",
      },
    ],
  },
  {
    customerInfo: {
      _id: 555555,
      docType: "nif",
      docNum: "11223344E",
      email: "it@parlem.com",
      customerId: "22222",
      givenName: "Enriqueta",
      familyName1: "Parlem",
      phone: "668668668",
    },
    productsInfo: [
      {
        _id: 1111111,
        productName: "FIBRA 1000MB",
        mbSpeed: 1000,
        gbData: null,
        productTypeName: "ftth",
        numeracioTerminal: 933933933,
        soldAt: "2019-01-09 14:26:17",
        customerId: "22222",
      },
      {
        _id: 1111112,
        productName: "MOBIL 500GB",
        mbSpeed: null,
        gbData: 500,
        productTypeName: "4G",
        numeracioTerminal: 696696969,
        soldAt: "2020-08-01 18:30:27",
        customerId: "22222",
      },
    ],
  },
  {
    customerInfo: {
      _id: 555555,
      docType: "nif",
      docNum: "11223344E",
      email: "it@parlem.com",
      customerId: "33333",
      givenName: "Enriqueta",
      familyName1: "Parlem",
      phone: "668668668",
    },
    productsInfo: [
      {
        _id: 1111111,
        productName: "FIBRA 1000MB",
        mbSpeed: 1000,
        gbData: null,
        productTypeName: "ftth",
        numeracioTerminal: 933933933,
        soldAt: "2019-01-09 14:26:17",
        customerId: "33333",
      },
      {
        _id: 1111112,
        productName: "MOBIL 500GB",
        mbSpeed: null,
        gbData: 500,
        productTypeName: "4G",
        numeracioTerminal: 696696969,
        soldAt: "2020-08-01 18:30:27",
        customerId: "33333",
      },
    ],
  },
];
