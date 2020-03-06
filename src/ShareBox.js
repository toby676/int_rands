 import React, { Component } from "react"

export default class YourComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false
    }
  }

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.setState({copySuccess: true})
  }

  render() {
    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => this.textArea = textarea}
            value={window.location.href}
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy Link to Share Lobby!
          </button>
          {
            this.state.copySuccess ?
            <div style={{"color": "green"}}>
              Success!
            </div> : null
          }
        </div>
      </div>
    )
  }
}
