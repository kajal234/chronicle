const customers = [
  {
    id: 1,
    system: "Arterra",
    customerName: "John Doe",
    accountNumber: 12345678,
    coreAccountNumber: 56423,
    contactPhone: "(91)234-4567",
    emailaddress: "john@capgemini.com",
    mdn: 9809,
    imei: 7564,
  },
  {
    id: 2,
    system: "Arterra",
    customerName: "Mack Ban",
    accountNumber: 23456852,
    coreAccountNumber: 98756,
    contactPhone: "(813)567-23456",
    emailaddress: "john@capgemini.com",
    mdn: 9809,
    imei: 7564,
  },
  {
    id: 3,
    system: "Arterra",
    customerName: "Jack Donaldo",
    accountNumber: 56789654,
    coreAccountNumber: 45678,
    contactPhone: "(674)789-12345",
    emailaddress: "john@capgemini.com",
    mdn: 9809,
    imei: 7564,
  },
];

const database = {
  arterra: [
    { morderId: "Mobile 1.0 Order ID" },
    { accountNumber: "Spectrum Mobile 1.0 Account Number" },
    { accId: "AMDOCS Account ID" },
    { coreAccountNumber: "Core Account Number" },
    { mdn: "MDN" },
    { imei: "IMEI" },
    { emailaddress: "Contact Email Address" },
  ],
  zendesk: [
    { a: "Zendesk Option 1" },
    { b: "Zendesk Option 2" },
    { c: "Zendesk Option 3" },
    { d: "Zendesk Option 4" },
  ],
};
export const getDropDownValues = (db) => {
  return database[db];
};

export const getCustormerData = (key, value) => {
  console.log("key: " + key + ", value : " + value);
  return customers.filter((customer) =>
    customer[key].toString().includes(value)
  );
};
