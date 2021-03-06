import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import ClockTime from './ClockTime'

@inject('store')
@observer
class Clock extends React.Component {
  componentDidMount() {
    this.props.store.start()
  }

  componentWillUnmount() {
    this.props.store.stop()
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ClockTime
          timeString={this.props.store.timeString}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }
}

export default Clock
