/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from "react";
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import profile from "../../assets/img/avatar.png";
import { Link } from "react-router-dom";
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
import { makeStyles } from "@mui/styles";

const Item = ({ title, icon, to, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{ color: colors.grey[100] }}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const useStyles = makeStyles(() => ({
  sidebar: {},
}));

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");
  const classes = useStyles();

  return (
    <Box width={isCollapsed ? "80px" : "240px"}>
      <Sidebar collapsed={isCollapsed} collapsedWidth="80px" width="100%">
        <Box
          display="flex"
          justifyContent={isCollapsed ? "center" : "space-between"}
          px={2}
          alignItems="center"
          height={70}
        >
          {!isCollapsed && <h2>Adminify</h2>}
          <IconButton
            onClick={() => {
              setIsCollapsed((prev) => !prev);
            }}
          >
            {isCollapsed ? (
              <KeyboardDoubleArrowRightIcon />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
        </Box>
        {!isCollapsed && (
          <Box my={3}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={profile}
                alt="Profile"
                width={90}
                height={90}
                style={{ borderRadius: "50%", border: "1px solid grey" }}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={2}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.greenAccent[400]}
              >
                Aziz ELM
              </Typography>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            "& .ps-active": {
              color: `${colors.greenAccent[400]}`,
            },
          }}
          pb={5}
        >
          <Menu
            menuItemStyles={{
              button: {
                backgroundColor: `${colors.primary[400]}`,
                "&:hover": {
                  backgroundColor: `#868dfb`,
                  color: "white",
                },
                "&.active": {
                  backgroundColor: "#135e36",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <Item
              title="Dashboard"
              icon={<DashboardIcon />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contacts"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices Balances"
              icon={<DescriptionOutlinedIcon />}
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Profile Form"
              icon={<PermContactCalendarOutlinedIcon />}
              to="/profile"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Calendar"
              icon={<CalendarMonthOutlinedIcon />}
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Pie Chart"
              icon={<DonutSmallOutlinedIcon />}
              to="/pie"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Line Chart"
              icon={<QueryStatsOutlinedIcon />}
              to="/line"
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              to="/geography"
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
