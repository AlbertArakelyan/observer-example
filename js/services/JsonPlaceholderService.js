// Services
import Service from './Service.js';

// Utils
import { request } from '../utils/index.js';


class JsonPlaceholderService extends Service {
  static async getUsers(perPage, page) {
    const data = await request('GET', `users?_limit=${perPage}&_page=${page}`);

    return data.map(this.#transformUserData);
  }

  static #transformUserData(data) {
    return {
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
    };
  }
}

export default JsonPlaceholderService;