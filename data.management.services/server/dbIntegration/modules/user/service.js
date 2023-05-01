import Repository from '../../repo/index';
import { User } from '../../model/index';

class Service extends Repository {
  async userCreate(obj) {
    try {
      const payload = { ...obj };
      const res = await this.createRecord(payload);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async oneUser(where) {
    try {
      const res = await this.findRecord(where);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async users(params) {
    try {
      let options = [];
      const res = await this.findAll(params, options);
    } catch (err) {
      return { error: err };
    }
  }

  async updateUser(where) {
    try {
      const res = await this.updateRecord(where, values);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new Service(User);
