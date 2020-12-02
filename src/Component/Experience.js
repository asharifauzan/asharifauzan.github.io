import React from 'react';
const exp = {
  1: [
    'Internship IT Support',
    'PT Airindo Sakti',
    'July - October 2018'
  ],
  2: [
    'Internship IT Support',
    'Fasilkom Universitas Indonesia',
    'September - December 2015'
  ]
}
class Experience extends React.Component {
  render() {
    return(
      <section id={this.props.title.toLowerCase()}>
        <h1 className='section-title'>{this.props.title}</h1>
        {
          Object.entries(exp).map(([key, value]) => {
            return (
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

export default Experience;
