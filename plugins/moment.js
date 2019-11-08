// import moment from 'moment'
// import 'moment/locale/th'

// export default (ctx, inject) => {
//   inject('moment', (dateTime = Date.now(), format = 'DD MMM YY HH:mm', addYear = 543) => moment(dateTime).add('years', addYear).format(format))
// }

import moment from 'moment'
import 'moment/locale/th'

export default (ctx, inject) => {
  inject('today', (dateTime = Date.now(), format = 'DD MMM YY HH:mm', addYear = 543) => moment(dateTime).add('years', addYear).format(format))
}
