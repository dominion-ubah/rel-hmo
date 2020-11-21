import { EmployeeDetailsButton } from "../routes/history";

export const columnsOfEmployees = [{
    dataField: 'employee_id',
    text: 'Product ID',
    sort: true
  }, {
    text: 'First Name',
    formatter: (cell, row) => <p>{row.first_name + " " + row.last_name}</p>,
    sort: true
  }, {
    dataField: 'is_confirmed',
    text: 'Confirmed',
    sort: true
  },
  {
    dataField: 'gender',
    text: 'Gender',
    formatter: (cell, row) => <p>{cell?'Male': 'Female'}</p>,
    sort: true
},
{
    dataField: 'email',
    text: 'Email',
    formatter: (cell, row) => <p>{cell.slice(cell, 10)+"..."}</p>
  },
  {
    dataField: 'department',
    text: 'Department',
    sort: true
  },
  {
    dataField: 'status',
    text: 'Status',
    sort: true
  },
  {
    dataField: 'employee_id',
    formatter: (cell, row) => <EmployeeDetailsButton route={"/"+cell} state={row} />
  }];