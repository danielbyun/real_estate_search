/** @jsxImportSource @emotion/react */

import * as React from 'react'
import {useAuth} from 'context/auth-context'
import {FullPageSpinner} from 'components/lib'

const AuthenticatedApp = React.lazy(() =>
  import(/*webpackPrefetch:true */ './authenticated-app')
)

const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const App = () => {
  const {user} = useAuth()

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export {App}
