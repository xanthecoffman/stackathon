import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import {attendClass} from '../store/attendClass'

class IndividualClassUnconnected extends Component {
  constructor() {
    super()
    this.state = {
      isDisabled: true,
      subject: this.props.subjects.filter(subject => {
        return subject.id === this.props.class.subjectId
      })
    }
  }

  componentDidMount() {
    if (this.props.class.inSession) {
      this.setState({isDisabled: false})
    }
  }
  attendClass(event) {
    event.preventDefault()
    this.props.attendClass(
      this.props.class.id,
      this.props.userId,
      event.timeStamp
    )
    this.setState({
      isDisabled: true
    })
    //maybe after this send some message like, signed in successfully or something
  }

  render() {
    return (
      <Card>
        {this.state.subject.name}

        <CardContent>
          <Link to={`/subjects/${this.props.class.id}`}>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.puppy.name}
            </Typography>
          </Link>
          <Typography component="p">Breed: {this.props.puppy.breed}</Typography>
          <Typography component="p">Age: {this.props.puppy.age}</Typography>
          <Typography component="p">Price: {this.props.puppy.price}</Typography>
        </CardContent>
        <CardActions>
          {!this.state.isDisabled ? (
            <IconButton
              color="primary"
              aria-label="Add to shopping cart"
              onClick={() => {
                this.addToCart(this.props.puppy.id)
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Delete"
              color="primary"
              onClick={() => {
                this.removeFromCart(this.props.puppy.id)
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
          <Link to={`/puppies/${this.props.puppy.id}`}>
            <Button size="small" color="primary">
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
    )
  }
}

const mapState = state => {
  return {userId: state.user.id, subjects: state.subjects}
}
const mapDispatch = dispatch => ({
  attendClass: (classId, userId, time) =>
    dispatch(attendClass(classId, userId, time))
})

const IndividualClass = connect(mapState, mapDispatch)(
  IndividualClassUnconnected
)
export default IndividualClass
