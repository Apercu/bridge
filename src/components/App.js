import 'whatwg-fetch'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'styles/app.scss'

import Col from 'components/Col'

import { toggleEditMode } from 'actions/mode'

@connect(
  state => ({
    editMode: state.mode === 'edit',
    layout: state.layout
  })
)
class App extends Component {

  _toggleEditMode () {
    this.props.dispatch(toggleEditMode())
  }

  render () {
    const { editMode, layout } = this.props
    const { cols, widgets } = layout
    const toggleIcon = (editMode)
      ? 'ion-checkmark'
      : 'ion-gear-b'

    return (
      <div className='App'>

        <button className='btn IconButton' onClick={::this._toggleEditMode}>
          <i className={toggleIcon} />
        </button>

        <div className='layout'>
          {cols.map((widgetsIds, i) => <Col key={i} widgetsIds={widgetsIds} widgets={widgets} />)}
        </div>

      </div>
    )
  }

}

export default App
