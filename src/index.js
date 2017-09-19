
import fieldDate from './components/fieldDate'
import fieldTime from './components/fieldTime'

export function install (Vue) {
  Vue.component('fieldDate', fieldDate)
  Vue.component('fieldTime', fieldTime)
}

