/** @jsxImportSource @emotion/react */

import * as React from 'react'
import {useAsync, useDocumentTitle} from 'utils/hooks'
import {useAuth} from 'context/auth-context'
import {Modal, ModalContents, ModalOpenButton} from 'components/modal'
import {Button, ErrorMessage, FormGroup, Input, Spinner} from 'components/lib'

const LoginForm = ({onSubmit, submitButton}) => {
  const {isLoading, isError, error, run} = useAsync()

  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = e.target.elements

    run(onSubmit({username: username.value, password: password.value}))
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input id='username' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <Input id='password' type='password' />
      </FormGroup>
      <div>
        {React.cloneElement(
          submitButton,
          {type: 'submit'},
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <Spinner css={{marginLeft: 5}} /> : null
        )}
      </div>
      {isError ? <ErrorMessage error={error} /> : null}
    </form>
  )
}

const UnauthenticatedApp = () => {
  const {login, register} = useAuth()
  useDocumentTitle('Real Estate Search App 🏡')

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* <Logo width='80' height='80' /> */}
      <h1>Real Estate Search App 🏡</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant='primary'>Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Login form' title='Login'>
            <LoginForm
              onSubmit={login}
              submitButton={<Button variant='primary'>Login</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant='secondary'>Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Registration form' title='Register'>
            <LoginForm
              onSubmit={register}
              submitButton={<Button variant='secondary'>Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

export default UnauthenticatedApp
