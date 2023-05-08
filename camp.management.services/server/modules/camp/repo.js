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
      return data;
    } catch (err) {
      return err;
    }
  }

  async createCamp(obj) {
    try {
      const data = await this.post(`${BASE_URL}/api/camp`, obj);
      return { response: data };
    } catch (err) {
      return { error: err };
    }
  }
}

export default new Repo();
