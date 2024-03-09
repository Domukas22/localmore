//

import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

export const countryLIST = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name.en" />
      <TextField source="id" />
      <EditButton basepath="/countries" />
      <DeleteButton basepath="/countries" />
    </Datagrid>
  </List>
);
