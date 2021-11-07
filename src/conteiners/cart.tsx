import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Cart } from "../pages";
import { IState } from "../store/index copy";
import { addTotalFunctions } from "../store/modules/cart/actions";

const mapStateToProps = (state: IState) => ({
  repositories: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(addTotalFunctions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
