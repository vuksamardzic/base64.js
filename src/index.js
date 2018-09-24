import { merge } from './services/merge.service';
import { options } from './models/options.model';
import { convert } from './services/convert.service';

export const init = async (files = [], custom_options = {}) => {
  merge(options, custom_options);
  return await convert(Array.from(files));
};
