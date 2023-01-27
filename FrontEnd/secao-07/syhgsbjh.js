CheckList

01-arquivo store
 --função reducer('receber=state', action)


botão > dispatch ( dados ) > action > reducer (switch case) > 

>>> const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});