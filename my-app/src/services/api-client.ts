//import axios from "axios";
//import Cookies from "universal-cookie";
//import { AUTH_TOKEN } from "../constants/common";

// axios.interceptors.request.use(function (config) {
//   const token = cookies.get(AUTH_TOKEN) ?? "";
//   config.headers.Authorization = token;

//   return config;
// });

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error?.response?.status === 403 || error?.response?.status === 401) {
//       return WithApiErrorResponse(error.response);
//     } else {
//       return Promise.reject(error.response);
//     }
//   }
// );

export async function logIn(body: any) {
  console.log(body);
  return {
    status: "200",
    info: "Log in successful",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  };
}

export async function getUserAccounts(body: any) {
  console.log(body);
  return {
    userId: 1,
    userName: "John Doe",
    accounts: [
      { accountId: "123456", currency: "UYU", amountLeft: "50000" },
      { accountId: "098765", currency: "USD", amountLeft: "100000" },
      { accountId: "675890", currency: "EU", amountLeft: "100" },
    ],
  };
}

export async function getUserTransfers() {
  return {
    userId: 1,
    userName: "John Doe",
    transfers: [
      {
        transferId: 1,
        transferCurrency: "USD",
        transferAmount: "500",
        originAccount: "098765",
        destinationAccount: "999999",
        date: "2021-01-01",
      },
      {
        transferId: 2,
        transferCurrency: "EU",
        transferAmount: "275",
        originAccount: "675890",
        destinationAccount: "999999",
        date: "2021-02-01",
      },
      {
        transferId: 3,
        transferCurrency: "UYU",
        transferAmount: "5000",
        originAccount: "123456",
        destinationAccount: "999999",
        date: "2021-03-01",
      },
    ],
  };
}

export async function registerTransfer(body: any) {
  console.log(body);
  const newTransfer = {
    transferId: 4,
    transferCurrency: "USD",
    transferAmount: body.amount,
    originAccount: body.originAccount,
    destinationAccount: body.destinationAccount,
    date: new Date().toDateString(),
  };
  return {
    userId: 1,
    userName: "John Doe",
    transfers: [
      {
        transferId: 1,
        transferCurrency: "USD",
        transferAmount: "500",
        originAccount: "098765",
        destinationAccount: "999999",
        date: "2021-01-01",
      },
      {
        transferId: 2,
        transferCurrency: "EU",
        transferAmount: "275",
        originAccount: "675890",
        destinationAccount: "999999",
        date: "2021-02-01",
      },
      {
        transferId: 3,
        transferCurrency: "UYU",
        transferAmount: "5000",
        originAccount: "123456",
        destinationAccount: "999999",
        date: "2021-03-01",
      },
      newTransfer,
    ],
  };
}
