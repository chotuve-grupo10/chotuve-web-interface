import React, {useState} from 'react'
import MaterialTable from 'material-table';


function UsersTable (props) {
  console.log(props);
  const data = useState(props.data);
  return (
    <MaterialTable
      title={props.title}
      columns={[
        { title: 'Nombre', field: 'full name' },
        { title: 'Email', field: 'email' },
        { title: 'Teléfono', field: 'phone number',
          render: rowData => {if (rowData["phone number"] !== 'NULL'){
                                  return rowData["phone number"]
                              } 
        }},
        { title: 'Estado', field: 'blocked',
          render: rowData => {  if (rowData.blocked){
                                  return <b><font color="red">Deshabilitado</font></b>
                                }else{
                                  return <b><font color="green">Habilitado</font></b>
                                }
                             }  }
      ]}
      data={data}
      actions={[
      rowData => ({
          icon: 'edit',
          tooltip: 'Edit User',
          onClick: props.onEdit,
          disabled: rowData.blocked === true
      }),
      rowData => ({
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: props.onDelete,
          disabled: rowData.blocked === true
      })
        
      ]}
      
      options={{
        search: true,
        actionsColumnIndex: -1
      }}
      {...props}
    />
  );
}


export default UsersTable;