import Repository from '../../repo/index';
import { Camp } from '../../model/index';

class Service extends Repository {
  async campCreate(obj) {
    try {
      const payload = { ...obj };
      const res = await this.createRecord(payload);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async oneCamp(where) {
    try {
      const res = await this.findRecord(where);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async camps(params) {
    try {
      let options = [];
      const res = await this.findAll(params, options);
    } catch (err) {
      return { error: err };
    }
  }

  async updateCamp(params) {
    try {
      const res = await this.updateRecord(where, values);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new Service(Camp);
