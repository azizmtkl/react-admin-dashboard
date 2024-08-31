/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from "react";
import { tokens } from "../../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import { Menu } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { MenuItemNav } from "./MenuItemNav";

const MenuList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("dashboard");

  return (
    <Box
      sx={{
        "& li.ps-active": {
          borderLeft: "5px solid #f39c12",
          backgroundColor: "red",
          color: "#f39c12",
        },
        "& .ps-menu-label > .MuiTypography-root": {
          fontWeight: "bold",
          fontSize: "0.9rem",
        },
      }}
      pb={5}
    >
      <Menu>
        <Typography
          variant="overline"
          color={colors.neutre.grey[300]}
          my={5}
          sx={{
            margin: "40px 0 5px 20px",
            fontSize: "0.7rem",
            fontWeight: 300,
          }}
        >
          Data
        </Typography>

        <MenuItemNav
          title="Dashboard"
          icon={<DashboardIcon />}
          to="/"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Manage Team"
          icon={<PeopleOutlinedIcon />}
          to="/team"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Contacts"
          icon={<ContactsOutlinedIcon />}
          to="/contacts"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Invoices Balances"
          icon={<DescriptionOutlinedIcon />}
          to="/invoices"
          selected={selected}
          setSelected={setSelected}
        />
        <Box height="20px" />

        <Typography
          variant="overline"
          color={colors.neutre.grey[300]}
          sx={{ m: "90px 0 5px 20px", fontSize: "0.7rem", fontWeight: 300 }}
        >
          Pages
        </Typography>

        <MenuItemNav
          title="Profile Form"
          icon={<PermContactCalendarOutlinedIcon />}
          to="/profile"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Calendar"
          icon={<CalendarMonthOutlinedIcon />}
          to="/calendar"
          selected={selected}
          setSelected={setSelected}
        />
        <Box height="20px" />

        <Typography
          variant="overline"
          color={colors.neutre.grey[300]}
          sx={{ m: "30px 0 5px 20px", fontSize: "0.7rem", fontWeight: 300 }}
        >
          Charts
        </Typography>

        <MenuItemNav
          title="Bar Chart"
          icon={<BarChartOutlinedIcon />}
          to="/bar"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Pie Chart"
          icon={<DonutSmallOutlinedIcon />}
          to="/pie"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Line Chart"
          icon={<QueryStatsOutlinedIcon />}
          to="/line"
          selected={selected}
          setSelected={setSelected}
        />

        <MenuItemNav
          title="Geography Chart"
          icon={<MapOutlinedIcon />}
          to="/geography"
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </Box>
  );
};

export default MenuList;
