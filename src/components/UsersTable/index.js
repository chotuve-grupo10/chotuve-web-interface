import React from 'react'
import MaterialTable from 'material-table';

function UsersTable (props) {
  console.log(props);
  return (
    <MaterialTable
      title={props.title}
      columns={[
        { title: 'Name', field: 'full name' },
        { title: 'Email', field: 'email' },
        { title: 'Status', field: 'blocked',
          render: rowData => {  if (rowData.blocked){
                                  return <b><font color="red">Disabled</font></b>
                                }else{
                                  return <b><font color="green">Enabled</font></b>
                                }
                             }  }
      ]}
      data={props.data}
       actions={[
        {
          icon: 'edit',
          tooltip: 'Edit User',
          onClick: props.onEdit,
        },
        {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: props.onDelete,
        }, 
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: props.onAdd,
        }
      ]}
      detailPanel={[
        {
          icon: 'account_circle',
          tooltip: 'Show Surname',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 15,
                  textAlign: 'left',
                //   color: 'black',
                  backgroundColor: '#EEEAEF',
                }}
              >
               <tr>
                   <td><img src={rowData["profile picture"]} alt="Profile"/></td>
                   <td>
                       <p>Fullname: {rowData["full name"]}</p>
                       <p>Email: {rowData.email}</p>
                       <p>Phone number: {rowData["phone number"]}</p>
                    </td>
               </tr>
              </div>
            )
          },
        },]}
      
      options={{
        search: true,
        actionsColumnIndex: -1
      }}
      {...props}
    />
  );
}


export default UsersTable;