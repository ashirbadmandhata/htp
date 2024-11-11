export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhaar Card",
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Bijayalaxmi Parija",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Laxmikant Dash",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Sandhya Shukla",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Bhabani Sh. Samantray",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Anum Ku. Budhia",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Sarat Kumar Kar",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Raman Rao",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Akshaya Kumar Samal",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Srinibas Sahoo",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};