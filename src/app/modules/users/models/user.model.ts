interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  city: string;
  street: string;
  suite: string;
  geo: IGeo;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  username: string;
  address: IAddress;
}
