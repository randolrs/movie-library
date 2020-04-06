import _ from 'lodash';

// assumes we always want to debounce, potential optimization would make this more dynamic
export const addSearchQueryToHistory = _.debounce((history, location, searchQuery) => {
  if(searchQuery) {
    history.push(`${ location.pathname }?query=${ searchQuery }`)
  }  else {
    history.push(`${ location.pathname }`);
  };
}, 500, {leading: false, trailing: true});
