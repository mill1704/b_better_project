import _ from 'lodash'

export default (context, inject) => {
  const getState = (key) => {
    return context.store.state.main[key];
  }

  const setState = (key, value) => {
    return context.store.commit('main/setState', [key, value]);
  }

  const shuffle = (key, value, length) => {
    return context.store.commit('main/shuffle', [key, value, length]);
  }

  inject('_', _);
  inject('getState', getState);
  inject('setState', setState);
  inject('shuffle', shuffle);
}
