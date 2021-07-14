import * as React from 'react'

const AuthenticatedApp = React.lazy(() =>
  import(/*webpackPrefetch:true */ './authenticated-app')
)

const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const App = () => {
  return (
    <React.Suspense fallback=''>
      <UnauthenticatedApp />
    </React.Suspense>
  )
}

export {App}
