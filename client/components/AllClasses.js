import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllClasses} from '../store/classes'
import IndividualClass from './IndividualClass'
import CircularProgress from '@material-ui/core/CircularProgress'
const style = {
  progress: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}

class AllClasses extends Component {
  componentDidMount() {
    this.props.fetchAllClasses()
  }

  render() {
    return !this.props.classes ? (
      <CircularProgress size={100} style={style.progress} />
    ) : (
      <div>
        <ul className="container" style={{alignContent: 'center'}}>
          {this.props.classes.map(singleClass => {
            return (
              <li key={singleClass.id} className="child">
                <IndividualClass class={singleClass} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  classes: state.classes
})

const mapDispatch = dispatch => ({
  fetchAllClasses: () => dispatch(fetchAllClasses())
})

const ConnectedAllClasses = connect(mapState, mapDispatch)(AllClasses)
export default ConnectedAllClasses
