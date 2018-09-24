import { options } from '../models/options.model';

export const merge = (custom_options = {}) => {
  Object.assign(options, custom_options);
};
