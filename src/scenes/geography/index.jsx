import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="40px">
      <Box my={7}>
        <Header title="Geography" subTitle="Simple Geography Chart" />
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" m="-20px 0 0 0">
        <Box
          height="500px"
          gridColumn="span 12"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="4px"
        >
          <GeographyChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Geography;
