import React from 'react';
import codeigniter from './assets/codeigniter.svg';
import cplusplus from './assets/cplusplus.svg';
import css3 from './assets/css3.svg';
import git from './assets/git.svg';
import github from './assets/github.svg';
import gnubash from './assets/gnubash.svg';
import html5 from './assets/html5.svg';
import javascript from './assets/javascript.svg';
import jsonx from './assets/json.svg';
import linux from './assets/linux.svg';
import mysql from './assets/mysql.svg';
import python from './assets/python.svg';
import react from './assets/react.svg';
class About extends React.Component {
  render() {
    return(
      <section id={this.props.title.toLowerCase()}>
        <h1 className='section-title'>{this.props.title}</h1>
        <article className='card skill-list'>
          <img src={codeigniter} alt='codeigniter'/>
          <img src={cplusplus} alt='cplusplus'/>
          <img src={css3} alt='css3'/>
          <img src={git} alt='git'/>
          <img src={github} alt='github'/>
          <img src={gnubash} alt='gnubash'/>
          <img src={html5} alt='html5'/>
          <img src={javascript} alt='javascript'/>
          <img src={jsonx} alt='json'/>
          <img src={linux} alt='linux'/>
          <img src={mysql} alt='mysql'/>
          <img src={python} alt='python'/>
          <img src={react} alt='react'/>
        </article>
      </section>
    )
  }
}

export default About;
