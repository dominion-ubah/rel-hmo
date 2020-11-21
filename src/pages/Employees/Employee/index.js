import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generateUsers } from '../../../data/employee-data'
import { withRouter } from "react-router-dom";

const getEmployee = (id) => {
    return generateUsers().data.filter(elem => elem.employee_id == id)
}
export class Employee extends Component {
    static propTypes = {

    }
constructor(props) {
    super(props)

    this.state = {
        employee: getEmployee(props.match.params.id)[0],
        disabled: true
    }
}

    
    render() {
        const { employee, disabled } = this.state
        return (
            <div className="container mt-5 ">
                <h3>View Employee</h3>
                <div className="d-flex mt-5 justify-content-end">
                    <button onClick={() => this.setState({disabled: false})}>Edit Information</button>
                    {!employee.is_confirmed && <button className="ml-md-5">Confirm Employee</button>}
                </div>
                <div className="border mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div style={{position:'relative', height:'170px'}}>
                                <div className="border" style={{position: 'absolute', left:'10%', top:'-50px', width:'200px', height:'200px'}}>
                                    <img src={'https://source.unsplash.com/random/200x200'} width={'100%'} height={'100%'} />
                                </div>
                            </div>
                                <div className="text-center">
                                    <h5>
                                    Employee ID<br/>
                                    {employee.employee_id}

                                    </h5>
                                </div>

                        </div>
                        <div className="col-md-9">
                            <h4 className="ml-md-3 my-4">Personal Information</h4>
                            <div className="d-flex">
                                <div className="ml-md-3">
                                    <label>
                                        First Name:<br />
                                        <input type="text" disabled={disabled} value={employee.first_name}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Last Name:<br />
                                        <input type="text" disabled={disabled} value={employee.last_name}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Date Of Birth:<br />
                                        <input type="text" disabled={disabled} value={employee.dob}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Gender:<br />
                                        <input type="text" disabled={disabled} value={employee.gender}  />
                                    </label>
                                </div>
                            </div>
                            <h4 className="ml-md-3 my-4">Contact Information</h4>
                            <div className="d-flex">
                                <div className="ml-md-3">
                                    <label>
                                        Phone Number:<br />
                                        <input type="text" disabled={disabled} value={employee.phone}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Email Address:<br />
                                        <input type="text" disabled={disabled} value={employee.email}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Address:<br />
                                        <input type="text" disabled={disabled} value={employee.home_addr}  />
                                    </label>
                                </div>
                               
                            </div>
                            <h4 className="ml-md-3 my-4">Employment Information</h4>
                            <div className="d-flex">
                                <div className="ml-md-3">
                                    <label>
                                        Date Employed:<br />
                                        <input type="text" disabled={disabled} value={employee.date_employed}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Confirmed:<br />
                                        <input type="text" disabled={disabled} value={employee.is_confirmed}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Current Status:<br />
                                        <input type="text" disabled={disabled} value={employee.status}  />
                                    </label>
                                </div>
                                <div className="ml-md-3">
                                    <label>
                                        Department:<br />
                                        <input type="text" disabled={disabled} value={employee.department}  />
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex mt-5 justify-content-end">
                                {<button >Cancel</button>}
                                {!disabled && <button className="ml-md-5" onClick={() => this.setState({disabled: true})}>Save</button>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Employee)
