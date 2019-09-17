import React from 'react';

export default class Home extends React.Component {
  render(){
    return (
      <div className="home-container">
      <div className="home__wrapper">
        <h1 className="home__title">Find Your Dream Hub</h1>
        <form>
        <input className="home__input" type="text" name="Search"/>
        <input className="home__submit" type="submit" value="Search"></input>
        </form>
        </div>
      </div>
    )
  }
}