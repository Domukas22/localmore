//

import * as React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import Base from "./base";
import { countryLIST } from "./countryLIST";

const AdminApp = () => (
  <Admin basename="/admin" dashboard={Base} dataProvider={dataProvider}>
    <Resource name="countries" list={countryLIST} />
  </Admin>
);

export default AdminApp;
