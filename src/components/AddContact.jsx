import React, { Component } from 'react'

export class AddContact extends Component {
    render() {
        return (
            <div className = 'ui fixed'>
                <h2 >Add Contact</h2>
                    <form className = 'ui form'>
                          <div className = 'field'>
                          <label> name </label>
                          <input type = "text" name = 'name' placeholder = 'please enter name' />
                          </div>
                          
                          <div>
                          <label> Email </label>
                          <input type = "text" name = 'email'  placeholder = 'please enter Email' />
                          </div>

                          <div>
                             <button className = 'ui button blue'>Add</button>
                          </div>

                    </form>
            </div>
        )
    }
}

export default AddContact
