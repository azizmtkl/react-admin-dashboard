import { Box } from "@mui/material";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { InvoicesColumns } from "./IvoicesColumns";
import DataGridTable from "../../components/DataGridTable";

const Invoices = () => {
  return (
    <Box m="40px">
      <Box my={7}>
        <Header title="INVOICES" subTitle="List of Invoice Balances" />
      </Box>

      <DataGridTable columns={InvoicesColumns()} data={mockDataInvoices} />
    </Box>
  );
};

export default Invoices;
