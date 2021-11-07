import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Wallet } from "../pages";
import { Application } from "../store";
import { RepositoriesActions } from "../store/ducks/repositories/actions";

const mapStateToProps = (state: Application) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
