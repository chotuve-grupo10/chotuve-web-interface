import React from 'react'
import MaterialTable from 'material-table';
import copy from 'copy-to-clipboard';

function UsersTable (props) {
  console.log(props);
  return (
    <MaterialTable
      title={props.title}
      columns={[
        { title: 'Name', field: 'full name' },
        { title: 'Email', field: 'email' },
      ]}
      data={props.data}
       actions={[
        {
          icon: 'edit',
          tooltip: 'Edit User',
          onClick: props.onEdit
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
      options={{
        search: true,
        actionsColumnIndex: -1
      }}
      {...props}
    />
  );
}


export default UsersTable;