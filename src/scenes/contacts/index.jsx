// @ts-nocheck
import { Box, Stack } from "@mui/material";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import DataGridTable from "../../components/DataGridTable.jsx";
import { contactColumns } from "./contactColumns";

const Contacts = () => {
  return (
    <Box m="40px">
      <Box display="flex" my={7} justifyContent="space-between">
        <Header title="CONTACTS" subTitle="All your contacts" />
      </Box>

      <DataGridTable columns={contactColumns} data={mockDataContacts} />
    </Box>
  );
};

export default Contacts;
