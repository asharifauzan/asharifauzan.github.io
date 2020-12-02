import React from 'react';
const edu = {
  sma: [
    'SMKN 3 Depok',
    'Computer Network and Networking',
    '2014 - 2017'
  ],
  kuliah: [
    'National Science and Technology Institute',
    'Informatic Engineering',
    '2018 - 2022'
  ]
}
class About extends React.Component {
  render() {
    return(
      <section id={this.props.title.toLowerCase()}>
        <h1 className='section-title'>{this.props.title}</h1>
        {
          Object.entries(edu).map(([key, value])=> {
            return(
              <article key={key} className='card'>
                <h1>{value[0]}</h1>
                <h3>{value[1]}</h3>
                <span>{value[2]}</span>
              </article>
            )
          })
        }
      </section>
    )
  }
}

export default About;
