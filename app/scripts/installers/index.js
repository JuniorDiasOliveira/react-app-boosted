import { _authentication as _auth } from './auth/_auth'
import { _redux } from './redux/_redux'
import { _materialUi } from './material-ui/_materialui'
import { _router } from './router/_router'
import { _default } from './_default'

const scripts = () => {
  return {
    scripts: {
      _auth,
      _redux,
      _materialUi,
      _router
    },
    defaultScript: _default
  }
}

export default scripts
