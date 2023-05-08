import bcrypt from 'bcrypt';
import {
  REGEX,
  ROLE_CODE_CAMP,
  ROLE_CODE_DEPARTMENT,
  ROLE_CODE_ROLE_CODE,
  ROLE_CODE_ROLE_TYPE,
  ROLE_CODE_USER,
  ROLE_CODE_DESCRIPTION,
  ROLE_CODE_SLUG,
  PERMISSION_GROUPS,
  ROLE_CODE_ROLE,
  ALLOWED_LENGTH,
  PERMISSION,
} from './constant';

export default {
  duration: (dateStart, endDate) => {
    const start = new Date(dateStart);
    const end = new Date(endDate);

    const difference = end.getTime() - start.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
  },

  checkCampName: (orgName) => {
    const checkSpecialCharacters = new RegExp(REGEX.SPECIAL_CHARACTERS);
    const checkAllNumerics = new RegExp(REGEX.ALL_NUMERICS);
    const checkMinMaxLength = new RegExp(REGEX.MIN_MAX_LENGTH);
    const checkSpaces = new RegExp(REGEX.SPACES);
    if (!checkMinMaxLength.test(orgName)) {
      return false;
    }
    if (checkSpecialCharacters.test(orgName)) {
      return false;
    }
    if (checkAllNumerics.test(orgName)) {
      return false;
    }

    if (checkSpaces.test(orgName)) {
      return false;
    }

    return true;
  },

  capitalizeName: (name) => {
    const words = name.split(' ');
    const correctedName = [];

    for (let i = 0; i < words.length; i++) {
      if (/\S/.test(words[i])) {
        correctedName.push(
          words[i][0].toUpperCase() + words[i].slice(1).toLowerCase(),
        );
      }
    }
    const fullName = correctedName.join(' ');
    return fullName;
  },

  checkWebsiteLink: (link) => {
    const fullName = new RegExp(REGEX.URLS);
    if (fullName.test(link)) {
      return true;
    }

    return false;
  },

  checkEmail: (email) => {
    if (email.length > ALLOWED_LENGTH.EMAIL) {
      return false;
    }
    const regexEmail = new RegExp(REGEX.EMAIL);
    if (regexEmail.test(email)) {
      return true;
    }
    return false;
  },

  createManyRoleCodes: (campId) => {
    const roleCodes = [
      {
        title: ROLE_CODE_CAMP.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        operation: PERMISSION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_CAMP,
        campId,
      },
      {
        title: ROLE_CODE_CAMP.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_CAMP,
        campId,
      },
      {
        title: ROLE_CODE_CAMP.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_CAMP,
        campId,
      },
      {
        title: ROLE_CODE_CAMP.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_CAMP,
        campId,
      },
      {
        title: ROLE_CODE_DEPARTMENT.CREATE,
        operation: PERMISSION.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: ROLE_CODE_DEPARTMENT.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: ROLE_CODE_DEPARTMENT.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: ROLE_CODE_DEPARTMENT.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: ROLE_CODE_ROLE.CREATE,
        operation: PERMISSION.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_CODE.CREATE,
        operation: PERMISSION.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_CODE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_CODE.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_CODE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_CODE.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_CODE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_CODE.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_CODE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_TYPE.CREATE,
        operation: PERMISSION.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_TYPE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_TYPE.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_TYPE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_TYPE.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_TYPE,
        campId,
      },
      {
        title: ROLE_CODE_ROLE_TYPE.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_ROLE_TYPE,
        campId,
      },
      {
        title: ROLE_CODE_USER.CREATE,
        operation: PERMISSION.CREATE,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        slug: ROLE_CODE_SLUG.CREATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_USER,
        campId,
      },
      {
        title: ROLE_CODE_USER.UPDATE,
        operation: PERMISSION.UPDATE,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        slug: ROLE_CODE_SLUG.UPDATE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_USER,
        campId,
      },
      {
        title: ROLE_CODE_USER.DELETE,
        operation: PERMISSION.DELETE,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        slug: ROLE_CODE_SLUG.DELETE,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_USER,
        campId,
      },
      {
        title: ROLE_CODE_USER.READ,
        operation: PERMISSION.READ,
        description: ROLE_CODE_DESCRIPTION.READ,
        slug: ROLE_CODE_SLUG.READ,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_USER,
        campId,
      },
    ];
    return roleCodes;
  },

  createDepartmentRoleCodes: (campId, departmentId) => {
    const roleCodes = [
      {
        title: `PERMISSION_DEPARTMENT_${departmentId}_CREATE`,
        description: ROLE_CODE_DESCRIPTION.CREATE,
        departmentId,
        operation: PERMISSION.CREATE,
        slug: `permission_department_${departmentId}_create`,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: `PERMISSION_DEPARTMENT_${departmentId}_UPDATE`,
        description: ROLE_CODE_DESCRIPTION.UPDATE,
        departmentId,
        operation: PERMISSION.UPDATE,
        slug: `permission_department_${departmentId}_update`,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: `PERMISSION_DEPARTMENT_${departmentId}_DELETE`,
        description: ROLE_CODE_DESCRIPTION.DELETE,
        departmentId,
        operation: PERMISSION.DELETE,
        slug: `permission_department_${departmentId}_delete`,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
      {
        title: `PERMISSION_DEPARTMENT_${departmentId}_READ`,
        description: ROLE_CODE_DESCRIPTION.READ,
        departmentId,
        operation: PERMISSION.READ,
        slug: `permission_department_${departmentId}_read`,
        group: PERMISSION_GROUPS.USER_MANAGEMENT_DEPARTMENT,
        campId,
      },
    ];
    return roleCodes;
  },

  checkDepartmentAuthorization(permissions, departmentId) {
    for (const item of permissions) {
      if (item.departmentId === departmentId) {
        return true;
      }
    }
    return false;
  },

  validateSearch: (search) => {
    const searchRegex = new RegExp(REGEX.SEARCH);
    if (!searchRegex.test(search)) {
      return false;
    }
    return true;
  },
};
