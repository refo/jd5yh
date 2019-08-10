import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function IconText({ icon, href, children = "", ...props }) {
  const Icon = icon;
  const style = { ...props.style, display: "flex", alignItems: "center" };

  return (
    <Typography {...props} style={style}>
      {icon && <Icon fontSize="inherit" style={{ marginRight: ".5rem" }} />}
      {href ? (
        <Link
          color="inherit"
          href={href}
          style={{ textDecoration: "underline", textDecorationStyle: "dotted" }}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </Typography>
  );
}
