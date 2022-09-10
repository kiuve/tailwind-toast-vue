import TvToast from './tv-toast.vue'
import { spawn, removeElement } from './utils.js'

let installed = false

const containerClasses = [
  'z-40', 'fixed', 'inset-0', 'flex', 'flex-col', 'flex-col-reverse', 'items-end', 'justify-start',
  'px-4', 'py-6', 'sm:p-6',
]

export default {
  install(Vue) {
    if (installed) return
    Vue.component('TvToast', TvToast)
    installed = true
  }
}

export { TvToast, spawn, removeElement, containerClasses }