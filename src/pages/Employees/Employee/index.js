import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generateUsers } from '../../../data/employee-data'


const getEmployee = (id) => {
    return generateUsers().data.filter(elem => elem.employee_id == id)
}
export class Employee extends Component {
    static propTypes = {

    }
constructor(props) {
    super(props)

    this.state = {
        employee: getEmployee(this.props.id)
        
    }
}

    
    render() {
        const { employee } = this.state
        return (
            <div className="container mt-5">
            {console.log('ness',employee, this.props)}
                <h3>View Employee</h3>
                <div className="d-flex">
                    <button >Edit Information</button>
                    <button >Confirm Employee</button>
                </div>
            </div>
        )
    }
}

export default Employee
