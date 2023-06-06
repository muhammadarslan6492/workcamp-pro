import Service from './service';

export default {
  createRole: async (req, res) => {
    try {
      const { body } = req;
      const response = await Service.roleCreate(body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  oneRole: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.oneRole(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  allRoles: async (req, res) => {
    try {
      const { params } = req.query;
      const where = { ...params };
      const response = await Service.roles(where);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  updateRole: async (req, res) => {
    try {
      const { body } = req;
      const where = { _id: req.params.id };
      const response = await Service.updateUser(where, body);
      return res.json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  deleteRole: async (req, res) => {
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
