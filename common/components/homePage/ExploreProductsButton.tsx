import * as React from "react";
import Link from "next/link";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function ExploreproductsButton() {
  return (
    <Link href="/product">
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Discover Products
      </Fab>
    </Link>
  );
}
