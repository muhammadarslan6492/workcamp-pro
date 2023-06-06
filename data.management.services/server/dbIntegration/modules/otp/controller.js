import Service from './service';

export default {
  createOtp: async (req, res) => {
    try {
      const { body } = req;
      const response = await Service.otpCreate(body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  oneOtp: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.oneOtp(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  allOtps: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.otps(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateOtp: async (req, res) => {
    try {
      const { body } = req;
      const where = { _id: req.params.id };
      const response = await Service.updateOtp(where, body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteOtp: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.otpDelete(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
