// @ts-nocheck
import { Box } from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { TeamColumns } from "./TeamColumns";
import DataGridTable from "../../components/DataGridTable";

const Team = () => {
  return (
    <Box m="40px">
      <Box display="flex" my={7} justifyContent="space-between">
        <Header title="TEAM" subTitle="Managing the team Members" />
      </Box>

      <DataGridTable columns={TeamColumns()} data={mockDataTeam} />
    </Box>
  );
};

export default Team;
