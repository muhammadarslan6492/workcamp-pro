import Repository from '../../repo/index';
import { Otp } from '../../model/index';

class Service extends Repository {
  async otpCreate(obj) {
    try {
      const payload = { ...obj };
      const res = await this.createRecord(payload);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async oneOtp(where) {
    try {
      const res = await this.findRecord(where);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async otps(params) {
    try {
      let options = [];
      const res = await this.findAll(params, options);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }

  async updateOtp(where) {
    try {
      const res = await this.updateRecord(where, values);
      return { response: res };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new Service(Otp);
