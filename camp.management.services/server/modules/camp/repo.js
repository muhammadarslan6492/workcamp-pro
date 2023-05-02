import axios from 'axios';
import { config } from 'dotenv';

config();

const BASE_URL = process.env.DATA_BASE_URL;

class Repo {
  constructor() {
    this.response = this.response;
  }
  async post(url, obj, options) {
    const { data } = await axios.post(url, obj, options);
    this.response = data;
    return this.response;
  }

  async get(url, params, options) {
    const { data } = await axios.get(url, { params, options });
    this.response = data;
    return this.response;
  }

  async put(url, obj, options) {
    const { data } = await axios.put(url, obj, options);
    this.response = data;
    return this.response;
  }

  async delete(url, obj, options) {
    const { data } = await axios.delete(url, obj, options);
    this.response = data;
    return this.response;
  }

  async getCamp(params) {
    try {
      const data = await this.get(`${BASE_URL}/api/camp/one-camp`, { params });
      console.log('this is data', data);
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default new Repo();
