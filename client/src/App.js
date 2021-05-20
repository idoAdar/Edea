import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAll, getStatistic } from './store/actions/actions';

import MainTable from './components/MainTable/MainTable';
import StatisticTable from './components/StatisticTable/StatisticTable';
import './App.css';

const App = props => {
  useEffect(() => {
    props.get();
    props.getStatistic();
  }, [])

  return (
    <Fragment>
      <div className={'main-title'}>
        <h4>- EDEA - </h4>
        <p>Simple Fullstack Web, built with React (Redux, Redux thunk), Nodejs (Express) & MySQL</p>
      </div>
      {props.orders && props.statistic ? (
        <div className={'table-container'}>
          <MainTable orders={props.orders}/>
          <StatisticTable statistic={props.statistic}/>
        </div>
      ) : (<p>Loading...</p>)}
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    statistic: state.statistic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(getAll()),
    getStatistic: () => dispatch(getStatistic())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);