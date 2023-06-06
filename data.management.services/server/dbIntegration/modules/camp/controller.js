import Service from './service';

export default {
  createCamp: async (req, res) => {
    try {
      const { body } = req;
      const response = await Service.campCreate(body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  oneCamp: async (req, res) => {
    try {
      const { params } = req.query;
      console.log('dataa layeer', params);
      const response = await Service.oneCamp(params);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  allCamps: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.camps(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateCamp: async (req, res) => {
    try {
      const { body } = req;
      const where = { _id: req.params.id };
      const response = await Service.updateCamp(where, body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteCamp: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.campDeleteCamp(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
