import { connect } from 'react-redux'
import Invite from "../components/Invite"
import { changePage } from "../actions"

const mapStateToProps = (state) => {
  return {
    characterId: state.inviteCharacterId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(changePage("Invite"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invite);