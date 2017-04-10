import React, { Component } from 'react'
import SkyCons from 'react-skycons'

class Weather extends Component {

  render () {
    const { desc, icon, temperature, pressure, windSpeed } = this.props.data.values
    return (
      <div className='w-weather'>

        <span className='boris'>
          {desc}
        </span>

        <h1 className='big-val za'>
          <SkyCons
            style={{ width: 110, height: 55 }}
            color='rgba(0,0,0,0.6)'
            icon={icon} />

          {`${temperature}°`}
        </h1>

        <section className='gallery'>

          <div className='mende'>
            <h1>{'Pressure'}</h1>
            <span>{pressure}</span>
          </div>

          <div className='mende'>
            <h1>{'Wind'}</h1>
            <span>{windSpeed}</span>
          </div>

        </section>

      </div>
    )
  }

}

export default Weather
