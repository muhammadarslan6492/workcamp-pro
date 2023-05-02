import Service from './services';

export default {
  campNameAvalability: async (req, res) => {
    try {
      const { campName } = req.body;
      const response = await Service.checkCampName(campName);
      if (!response.success) {
        return res
          .status(response.statusCode)
          .json({ message: response.message });
      }
      return res
        .status(response.statusCode)
        .json({ message: response.message });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  creatCamp: async (req, res) => {
    try {
      const { body } = req;
      const data = { ...body };
      const response = await Service.createCamp(data);
      if (response.error) {
        return res
          .status(response.statusCode)
          .json({ message: response.message });
      }
      return res
        .status(response.statusCode)
        .json({ message: response.message });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
