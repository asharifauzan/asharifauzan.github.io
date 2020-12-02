import React from 'react';

class About extends React.Component {
  render() {
    return(
      <section id={this.props.title.toLowerCase()}>
        <h1 className='name'>Fauzan Hibatullah <span className='different'>Ashari</span></h1>
        <ul className='contact'>
          <li className='address'>Depok, Indonesia</li>
          <li className='phone'>+62 822 9820 4493</li>
          <li className='email'>
            <a href="mailto:asharifauzan.h@gmail.com">asharifauzan.h@gmail.com</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default About;
