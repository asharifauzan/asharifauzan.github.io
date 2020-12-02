import React from 'react';

class Projects extends React.Component {
  render() {
    return(
      <section id={this.props.title.toLowerCase()}>
        <article>
          <h1>{this.props.title} is coming soon</h1>
        </article>
      </section>
    )
  }
}

export default Projects;
