import * as React from 'react'

const AuthenticatedApp = React.lazy(() =>
  import(/*webpackPrefetch:true */ './authenticated-app')
)

const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>whats goooood</header>
    </div>
  )
}

export {App}
