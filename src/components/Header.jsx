import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mr: "5px" }}
      >
        {title}
      </Typography>

      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
