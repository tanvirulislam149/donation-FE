export interface IUser extends HTMLFormElement {
  userName: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
}

export interface IDonation {
  _id: string,
  title: string,
  picture_url: string,
  money: number,
  donation_category: string,
  description: string
}

export interface ICreateDonation extends HTMLFormElement {
  titleName: HTMLInputElement,
  picture_url: HTMLInputElement,
  money: HTMLInputElement,
  donation_category: HTMLInputElement,
  description: HTMLInputElement
}