export interface IUser {
  _id: string;
  profilePicUrl?: string;
  username: string;
  password: string;
  displayName: string;
  role?: "student" | "teacher";
}

export interface IUserForm {
  username?: string;
  profilePicUrl?: string;
  password?: string;
  displayName?: string;
  role?: "student" | "teacher";
}
