export const LoginStart = (userCredentials) => ({
  type: 'LOGIN_START',
})

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESSFUL',
  payload: user,
})

export const LoginError = (error) => ({
  type: 'Login_FAILURE',
  payload: error,
})
