import { Box } from "@mui/material";
import Header from "../../components/Header";

import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="40px">
      <Box my={7}>
        <Header title="BAR" subTitle="Bar Charts" />
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" m="-20px 0 0 0">
        <Box height="600px" gridColumn="span 12">
          <BarChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;
