import Service from './service';

export default {
  createUser: async (req, res) => {
    try {
      const { body } = req;
      const response = await Service.userCreate(body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  oneUser: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.oneUser(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  allUser: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.users(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { body } = req;
      const where = { _id: req.params.id };
      const response = await Service.updateUser(where, body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.userDelete(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
