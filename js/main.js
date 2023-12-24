/* eslint-disable no-template-curly-in-string */
import {renderGallery} from './gallery.js';
import {initEditPopup} from './form.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {initFilters} from './filters.js';
import {debounce} from './util.js';

initEditPopup();

getData()
  .then((data) => {
    renderGallery(data);
    initFilters(data, debounce(renderGallery));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

