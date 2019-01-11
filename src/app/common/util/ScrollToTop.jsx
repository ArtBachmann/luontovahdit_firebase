import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
    // called immidiately after update occurs
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            // new windoow loads positioned at the top  
            window.scrollTo(0, 0)
        }
    }
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
