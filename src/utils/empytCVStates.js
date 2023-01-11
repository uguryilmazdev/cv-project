import uniqid from 'uniqid';

const emptyCV = {
  personelInfo: {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  },
  experience: [
    {
      id: uniqid(),
      position: '',
      company: '',
      city: '',
      dateFrom: '',
      dataTo: '',
    },
  ],
  education: [
    {
      id: uniqid(),
      schoolName: '',
      city: '',
      degree: '',
      dateFrom: '',
      dataTo: '',
    },
  ],
};

export default emptyCV;
