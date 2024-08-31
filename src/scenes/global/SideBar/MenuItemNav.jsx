import { MenuItem } from "react-pro-sidebar";
// @ts-nocheck
import { tokens } from "../../../theme";
import { Link } from "react-router-dom";

import { Typography, useTheme } from "@mui/material";

export const MenuItemNav = ({ title, icon, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{ backgroundColor: colors.bgNavbar.main }}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
