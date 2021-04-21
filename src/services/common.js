const { isValidObjectId } = require('mongoose');
const { UnprocessableEntityException } = require('../exceptions');
const { companyModel } = require('../models');
const { errors } = require('../utils');

class CommonService {
  static async validateAndReturnCompany(firebaseUserID) {
    const company = await companyModel.findOne({ firebaseUserID, active: true });
    if (!company) {
      throw new UnprocessableEntityException(errors.resourceNotFound('empresa'));
    }
    return company;
  }

  static validateObjectId(id) {
    if (!isValidObjectId(id)) {
      throw new UnprocessableEntityException(errors.invalidID);
    }
  }
}

module.exports = CommonService;
