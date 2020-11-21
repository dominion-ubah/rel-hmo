import React from 'react'

function Header({employees, employeesActiveNum, employeesInactiveNum, employeesSuspendedNum}) {
    return (
        <div className="row my-5">
        <div className="col-md-7">
            <h2>Company X</h2>
            <h5>Employee Portal</h5>
        </div>
        <div className="col-md-5 border-left p-3">
            <div className="d-flex">
                <div className="mr-5"> 
                    <h1>{employees?employees.data.length:''}</h1>
                    <p><b>Total Employees</b> </p>
                </div>
                <div>
                    <p> <b>Active:</b> {employeesActiveNum}</p>
                    <p> <b>Suspended:</b> {employeesSuspendedNum}</p>
                    <p><b>Inactive:</b>  {employeesInactiveNum}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header
