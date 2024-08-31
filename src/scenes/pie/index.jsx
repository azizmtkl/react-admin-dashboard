import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="40px">
      <Box my={7}>
        <Header title="Pie" subTitle="Pie Chart" />
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" m="-20px 0 0 0">
        <Box height="500px" gridColumn="span 12">
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Pie;
