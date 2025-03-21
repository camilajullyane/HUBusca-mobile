import { User } from "../@types/userType";
import { api } from "../api/axios";

export const UserService = {
  async getUser(userName: string): Promise<User> {
    const { data: response } = await api.get(`/users/${userName}`);
    return response;
  },
};
