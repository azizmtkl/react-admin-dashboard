import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const InvoicesColumns = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Box display="block ruby;" justifyContent="center" alignItems="center">
          <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
          </Typography>
        </Box>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
};
