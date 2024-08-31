// @ts-nocheck
import { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens, ColorModeContext } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const TopBar = () => {
  console.log("Top Bar re-render");

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" p={2} boxShadow={1}>
      {/* Search bar*/}
      <Box
        display="flex"
        backgroundColor={colors.neutre.grey[900]}
        borderRadius="5px"
        alignItems="center"
        px="10px"
         
      >
        <InputBase placeholder="Search ..." sx={{ flex: 1 }} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" alignItems="center">
        <IconButton
          type="button"
          sx={{ p: 1 }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <WbSunnyOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
