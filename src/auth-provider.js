const testUrl = ''
const localStorageKey = ''

const client = async (endpoint, data) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }

  return window
    .fetch(`${testUrl}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

const getToken = async () => window.localStorage.getItem(localStorageKey)

const handleuserResponse = ({user}) => {
  window.localStorage.setItem(localStorageKey, user.token)
  return user
}

const login = ({username, password}) =>
  client('login', {username: username, password: password}).then(
    handleuserResponse
  )

const register = ({username, password}) =>
  client('register', {username: username, password: password}).then(
    handleuserResponse
  )

const logout = () => window.localStorage.removeItem(localStorageKey)

export {getToken, login, register, logout, localStorageKey}
