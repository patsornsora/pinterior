const redirectSSL = require('redirect-ssl')

// Add middleware
app.use(nuxt.render)
app.use(redirectSSL.create({
  redirectPort: 3000
}))
