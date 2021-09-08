import AxiosMockAdapter from 'axios-mock-adapter'
// utils mock axios
import axios from '../utils/axios'

const axiosMockAdapter = new AxiosMockAdapter(axios, {
  delayResponse: 0,
})

export default axiosMockAdapter
