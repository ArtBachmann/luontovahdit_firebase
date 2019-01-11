import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'

class MainMap extends Component {
  render() {
    return (
      <Embed
        active='true'
        aspectRatio='4:3'

        url='https://www.palapelix.fi/wp-content/uploads/2017/08/suomenkartta-etela.jpg'
      />
    )
  }
}

export default MainMap