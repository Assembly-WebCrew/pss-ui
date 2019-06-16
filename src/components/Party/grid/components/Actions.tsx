import * as React from "react";
import { Link } from "react-router-dom";

export const Actions = (params: any) => {
  return (
    <Link to={`/parties/${params.data.party}/${params.data.id}`}>
      Edit event
    </Link>
  );
};
