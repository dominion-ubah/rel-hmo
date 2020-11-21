import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

const { ExportCSVButton } = CSVExport;
const rowEvents = {
  onClick: (e, row, rowIndex) => {
    console.log(e, row, rowIndex)
    // history.push('/employee/'+e.employee_id);
  }
};

let Table = ({data, columns} ) =>

<ToolkitProvider
  keyField="id"
  data={ data }
  columns={ columns }
  exportCSV
>

  {
    props => (
      <div>
        <div className="d-flex justify-content-end">
            <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        </div>
        <hr />
        <BootstrapTable keyField={'id'} data={data} columns={ columns } rowEvents={ rowEvents }/>
      </div>
    )
  }
</ToolkitProvider>

export default Table;