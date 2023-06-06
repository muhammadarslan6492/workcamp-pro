import Repository from '../../repo/index';
import { Role } from '../../model/index';

class Service extends Repository {
  async roleCreate(obj) {
    try {
      const payload = { ...obj };
      const res = await this.createRecord(payload);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async oneRole(where) {
    try {
      const res = await this.findRecord(where);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async roles(params) {
    try {
      let options = [];
      const res = await this.findAll(params, options);
    } catch (err) {
      return { error: err };
    }
  }

  async updateRole(where) {
    try {
      const res = await this.updateRecord(where, values);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new Service(Role);
