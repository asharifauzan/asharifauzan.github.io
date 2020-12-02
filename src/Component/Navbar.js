import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: 'menu',
      navColored: null
    }
    this.showMenu = this.showMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let color;

    if (window.scrollY > 250) {
      color = 'navColored';
    } else {
      color = false;
    }

    this.setState({
      navColored: color
    });
  }

  showMenu() {
    if (this.state.showMenu === 'menu') {
      this.setState({showMenu: 'menu showMenu'});
    } else {
      this.setState({showMenu: 'menu'});
    }
  }

  render(){
    return (
        <nav className={this.state.navColored ? 'navColored' : undefined}>
          <h1 className='title'>{this.props.title}</h1>
          <ul className={this.state.showMenu}>
          {
            Object.entries(this.props.data).map(([key, value]) => {
              return <li key={key}><a href={'#'+key}>{value}</a></li>
            })
          }
          </ul>
          <div id='hamburger' onClick={this.showMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
    );
  }
}

export default Navbar;
