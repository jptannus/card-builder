import Vue from 'vue'
import message from './message'

console.log(message)

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(
      'h1', 'teste'
    )
  },
  data: {
    message: 'Hello Vue!'
  }
})