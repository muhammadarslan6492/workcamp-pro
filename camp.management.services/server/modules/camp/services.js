import Repo from './repo';

class Service {
  async checkCampName(obj) {
    const where = { campName: obj };
    const data = await Repo.getCamp(where);
    if (data.error) {
      return { success: false, statusCode: 400, message: data.error };
    }
    if (data.response) {
      return {
        success: false,
        statusCode: 409,
        message: `Camp name '${obj}' is already registered with another Organization`,
      };
    }
    return {
      success: true,
      statusCode: 200,
      message: `Camp name ${obj} is available`,
    };
  }
}

export default new Service();
