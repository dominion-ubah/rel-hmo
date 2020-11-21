import Employee from '../pages/Employees/Employee';
import Employees from '../pages/Employees/Employees';


const Routes = [
  { path: '/employee/:id', exact: false, main: (props) => <Employee {...props}/> },
  { path: '/', main: () => <Employees />, exact: true, },
];

export default Routes;
