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