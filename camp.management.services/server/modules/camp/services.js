import Repo from './repo';
import Error from '../shared/utils/error';
import Utils from '../shared/utils/helper';

class Service {
  async checkCampName(name) {
    const where = { campName: name };
    const data = await Repo.getCamp(where);
    if (data.error) {
      return { success: false, statusCode: 400, message: data.error };
    }
    if (data.response) {
      return Error.conflict(
        `Camp name '${name}' is already registered with another Organization`,
      );
    }
    return {
      success: true,
      statusCode: 200,
      message: `Camp name ${name} is available`,
    };
  }

  async createCamp(obj) {
    if (!Utils.checkCampName(obj.campName)) {
      return Error.badRequest(`Invalid camp-name: ${obj.campName}`);
    }
    if (obj.websiteLink && !Utils.checkWebsiteLink(obj.websiteLink)) {
      return Error.badRequest(`Invalid camp-name: ${obj.websiteLink}`);
    }
    if (obj.email && !Utils.checkEmail(obj.email)) {
      return Error.badRequest(`Invalid camp-name: ${obj.email}`);
    }
    obj.slug = obj.campName.toLowerCase();
    const checkCamp = await Repo.getCamp({ slug: obj.slug });
    if (checkCamp.response) {
      return Error.conflict('Camp already in exist');
    }
    const { error, response } = await Repo.createCamp(obj);

    console.log('final consele', error, response);

    if (error) {
      console.log(error);
      return Error.conflict(camp.error);
    }
    const camp = {
      id: response.response._id,
      campName: response.response.campName,
    };
    console.log('response', camp);

    return {
      success: true,
      statusCode: 201,
      message: `Camp created successfully`,
      camp,
    };
  }
}

export default new Service();
