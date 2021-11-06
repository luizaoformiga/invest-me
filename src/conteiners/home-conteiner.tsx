import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Home } from "../pages";
import { RepositoriesActions } from "../store/ducks/repositories/actions";
import { ApplicationState } from "../store";

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
