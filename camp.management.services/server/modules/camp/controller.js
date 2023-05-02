import Service from './services';

export default {
  campNameAvalability: async (req, res) => {
    try {
      return res.status(200).json({ message: '... to be countinue' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  creatCamp: async (req, res) => {
    try {
      return res.status(200).json({ message: '... to be countinue' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
