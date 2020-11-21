import React, { Component } from 'react'
import { generateUsers } from '../../data/employee-data'
import { columnsOfEmployees } from '../../utils/tableColums'
import TableComponent from '../../components/TableComponent/TableComponent'
import Header from '../../components/Header/Header'
import _ from 'lodash'
import { employeeFilterData } from '../../data/filter-data'
import Select from 'react-select'


const filteredEmployees = (employees, searchTxt) => employees.data
.filter(item => {
    if(!_.isEmpty(searchTxt)) {
      let searchData = {
        search : searchTxt?searchTxt.toLowerCase():"",
      }
      const { search } = searchData
      // const query = [country, state, operator, modes].join("").toLowerCase():'';
      return (
        (item.first_name.toLowerCase().indexOf(search) >= 0) 
        ||
        (item.email.toLowerCase().indexOf(search) >= 0 )
        ||
        (item.department.toLowerCase().indexOf(search) >= 0 )
        
      )

    }
    return employees
  
  })

//   const filteredBoxEmployees = (employees, filterTxt) => employees.data
  const buildTableData = (employees, searchTxt, filterTxt) => filteredEmployees(employees, searchTxt)
      .filter(elem  => {
        // console.log(searchTxt, filterTxt)
        if(!_.isEmpty(filterTxt)) {
          if(filterTxt.type === 'is_confirmed') {
              
            let filterData = {
                filterBy : filterTxt?filterTxt.name.toLowerCase():"",
                compare : elem.is_confirmed?"Confirmed":"Not Confirmed",
              }
              console.log('filt_type', filterData.filterBy)
              return filterData.filterBy === filterData.compare.toLowerCase()
            }
            if(filterTxt.type === 'status') {
                let filterData = {
                    filterBy : filterTxt?filterTxt.name.toLowerCase():"",
                }
                console.log('filt_status', filterData.filterBy)
              return filterData.filterBy === elem.status.toLowerCase()
          }
        }
        return employees
      });

export class Employees extends Component {
    
    state = {
        employees: generateUsers(),
        searchTxt: '',
        filterTxt: ''
    }
    static propTypes = {
        
    }
    
    render() {
        const {employees, searchTxt, filterTxt} = this.state
        const employeesInactiveNum = employees.data.filter(e => (e.status === 'Inactive')).length 
        const employeesSuspendedNum = employees.data.filter(e => (e.status === 'Suspended')).length 
        const employeesActiveNum = employees.data.filter(e => (e.status === 'Active')).length
        const filteroptions =employeeFilterData.map(elem => {
            return {
                value: elem,
                label: elem.name
            }
        }) 
        return (
            <div>
            {console.log("users search", filteredEmployees(employees, searchTxt))}
            {console.log("users filter", buildTableData(employees, searchTxt, filterTxt ))}
            <div className="container mt-5">
                <Header 
                        employees={employees} 
                        // employees={filteredEmployees(employees, filterTxt, searchTxt)} 
                        employeesInactiveNum={employeesInactiveNum} 
                        employeesActiveNum={employeesActiveNum}
                        employeesSuspendedNum={employeesSuspendedNum} />
                        <div className="row">
                            <div className="col-md-3">
                                <input type="text" value={searchTxt} style={{height:"36px"}} onChange={(e) => this.setState({searchTxt: e.target.value})}/>
                            </div>
                            <div className="col-md-3">
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={filterTxt}
                                name="color"
                                onChange={(e)=> this.setState({filterTxt: e.value})}
                                options={filteroptions}
                                />
                            </div>
                        </div>
                <div className="row">
                    <div className="col-md-12">
                        <TableComponent columns={columnsOfEmployees} data= {employees? buildTableData(employees, searchTxt, filterTxt ):[]} />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Employees
