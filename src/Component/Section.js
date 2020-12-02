import React from 'react';
import './section.css';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

class Section extends React.Component {
  render() {
    return (
      <React.Fragment>
        <About title={this.props.title.about}/>
        <Experience title={this.props.title.experience}/>
        <Education title={this.props.title.education}/>
        <Skills title={this.props.title.skills}/>
        <Projects title={this.props.title.projects}/>
      </React.Fragment>
    )
  }
}

export default Section;
