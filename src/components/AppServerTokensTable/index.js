import React from 'react'
import MaterialTable from 'material-table';
import copy from 'copy-to-clipboard';

function AppServerTokensTable (props) {
  console.log(props);
  return (
    <MaterialTable
      title={props.title}
      columns={[
        { title: 'Token', field: 'token' },
        { title: 'Fecha de alta', field: 'registered_at' },
      ]}
      data={props.data}
      actions={[
        {
          icon: 'delete',
          tooltip: 'Delete token',
          onClick: props.onDelete,
        },
        {
          icon: 'content_copy',
          tooltip: 'Copy to clipboard',
          onClick: (event, rowData) => copy(rowData.token)
        },
        {
          icon: 'add',
          tooltip: 'Add token',
          isFreeAction: true,
          onClick: props.onAdd,
        }
      ]}
      options={{
        search: false,
        actionsColumnIndex: -1
      }}
      {...props}
    />
  );
}


export default AppServerTokensTable;