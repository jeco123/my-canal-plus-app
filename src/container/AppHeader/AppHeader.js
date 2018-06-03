import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../../components/NavigationBar';
import logo from './assets/logo_cplus.svg';
import './AppHeader.css';

const AppHeader = props => {
    return (
        <header style={{ backgroundImage: `url(${props.background})` }}
            className="header background">
            <NavigationBar logo={logo} />
        </header>
    );
};

const mapStateToProps = (state) => ({
    background: state.header.currentBackground,
});
  
export default connect(mapStateToProps)(AppHeader);
