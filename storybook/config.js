import { configure } from '@storybook/react'
import 'milligram'

const req = require.context('../src', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
