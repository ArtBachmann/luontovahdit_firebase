// https://tylermcginnis.com/react-router-programmatically-navigate/

import React from 'react'
import SimpleSearch from '../search/SimpleSearch'
import MainMap from '../map/MainMap'
import Footer from './Footer'
//import '../../index.css';
const HomePage = ({ history }) => {
  return (
    <div>
      <br />
      <SimpleSearch />
      <br />
      <div className="ui inverted grey center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <div className="content">Luontovahdit</div>
          </h1>
          <div onClick={() => history.push('/activities')} className="ui huge white inverted button">
            Aloitta
                <i className="right arrow icon" />
          </div>
          <br />
          <br />
          <MainMap />
        </div>
        <br />
        <h3>Copyright &copy; {new Date().getFullYear()} Luontovahtit</h3>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage