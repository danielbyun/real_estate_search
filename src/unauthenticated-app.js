import * as React from 'react'
import {useAsync} from './utils/hooks'

const LoginForm = ({onSubmit, submitButton}) => {
  const {isLoading, isError, error, run} = useAsync()
  return <div></div>
}

const UnauthenticatedApp = () => {
  return <div>Unauthenticated App</div>
}

export default UnauthenticatedApp
