export interface IRequestUserEdit {
  name: string;
  gender: string;
  birthdate: string;
}

export interface IRequestUser extends IRequestUserEdit {
  email: string;
}

export interface IResponseUser extends IRequestUser {
  id: number;
  password: string;
  photo: string | null;
  active: string;
  created_by: number;
  created_at: string;
  updated_by: number | null;
  updated_at: string;
}
