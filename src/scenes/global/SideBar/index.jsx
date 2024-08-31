/* eslint-disable react/prop-types */
// @ts-nocheck
import { useState } from "react";
import { tokens } from "../../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import profile from "../../../assets/img/profile.png";
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
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { MenuItemNav } from "./MenuItemNav";
import MenuList from "./MenuList";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      className="BOX-lkbir"
      width={isCollapsed ? "80px" : "240px"}
      color={colors.neutre.grey[100]}
      backgroundColor={colors.bgNavbar.main}
    >
      <Sidebar
        collapsed={isCollapsed}
        collapsedWidth="80px"
        width="100%"
        backgroundColor={colors.bgNavbar.main}
        className="sidebar SGHIR"
        sx={{
          height: "100%",
        }}
      >
        <Box
          display="flex"
          justifyContent={isCollapsed ? "center" : "end"}
          py={2}
          px={2}
        >
          <IconButton
            sx={{
              color: colors.neutre.grey[100],
              fontWeight: "bolder",
            }}
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

        <Box
          my={3}
          display="flex"
          gap={1}
          justifyContent="center"
          alignItems="center"
          color={colors.neutre.grey[100]}
        >
          <LocalFloristIcon fontSize="large" />
          <Typography variant="h3" fontWeight="bold">
            {!isCollapsed && "Adminify"}
          </Typography>
        </Box>

        <MenuList />
      </Sidebar>
    </Box>
  );
};

export default SideBar;
