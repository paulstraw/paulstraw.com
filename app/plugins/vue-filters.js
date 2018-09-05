import Vue from 'vue'
import { DateTime } from 'luxon'

Vue.filter('prettyDate', val => {
  let dt = DateTime.fromISO(val)

  return dt.isValid
    ? dt.toLocaleString(DateTime.DATE_HUGE)
    : ' '
})
