import * as React from "react";
import { Link } from "react-router-dom";

const NotImplemented: React.FunctionComponent = () => (
  <div>
    <p>This feature has not been implemented</p>
    <Link to="/">Go to front page</Link>
  </div>
);

export default NotImplemented;
