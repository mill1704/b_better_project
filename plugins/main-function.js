import _ from 'lodash'
import moment from 'moment'

export default (context, inject) => {
  const getState = (key) => {
    return context.store.state.main[key]
  }

  const setState = (key, value) => {
    return context.store.commit('main/setState', [key, value])
  }

  const shuffle = (key, length) => {
    const itemShuffle = _.shuffle(key)
    if (itemShuffle && _.size(itemShuffle) > length) itemShuffle.length = length
    return itemShuffle
  }

  const getProduct = async () => {
    if (context.$_.isEmpty(context.$getState('productLists')))
      try {
        const resp = await context.$axios.$get(`${context.$config.baseUrl}`)
        context.$setState('productLists', resp)
      } catch (error) {}
  }

  inject('_', _)
  inject('moment', moment)
  inject('getProduct', getProduct)
  inject('getState', getState)
  inject('setState', setState)
  inject('shuffle', shuffle)
}
