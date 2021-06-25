const proxy = (app) => {
  app.get(/^\/$/, (req, res) => res.redirect('/'))

  // https://twitter.com/kentcdodds/status/1299182472412958722
  // if you can figure out how we can avoid this that'd be great
  // it's only necessary for the "test:e2e" script
  app.head(/^\/$/, (req, res) => res.status(200).end())
}

module.exports = proxy
