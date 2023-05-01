class Repository {
  constructor(modelInstance) {
    this.modelInstance = modelInstance;
  }

  findRecord(where, options = {}) {
    let params = where;

    if (options) {
      params = { ...params, ...options };
    }
    return new Promise((resolve, reject) => {
      this.modelInstance
        .findOne(params)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => reject(err));
    });
  }

  createRecord(obj) {
    return new Promise((resolve, reject) => {
      this.modelInstance
        .create(obj)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => reject(err.message));
    });
  }

  createManyRecord(obj) {
    return new Promise((resolve, reject) => {
      this.modelInstance
        .insertMany(obj)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => reject(err.message));
    });
  }

  updateRecord(where, values) {
    return new Promise((resolve, reject) => {
      this.modelInstance
        .findOneAndUpdate(where, values, { new: true })
        .then((valus) => {
          resolve(valus);
        })
        .catch((err) => reject(err));
    });
  }

  deleteRecord(filter) {
    return new Promise((resolve, reject) => {
      this.modelInstance
        .deleteOne(filter)
        .then((values) => {
          resolve(values);
        })
        .catch((err) => reject(err));
    });
  }

  findAll(where, options) {
    return new Promise((resolve, reject) => {
      this.modelInstance
        .find(where, options)
        .then((value) => resolve(value))
        .catch((err) => reject(err));
    });
  }
}

export default Repository;
