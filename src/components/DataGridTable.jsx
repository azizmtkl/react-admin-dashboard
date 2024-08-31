// @ts-nocheck
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataGridTable = ({ columns, data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        m: "-20px 0 0 0",

        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor : colors.neutre.grey[900]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
          backgroundColor: `${colors.blueAccent[700]} !important`,
        },
        "& .MuiButton-text": {
          color: `${colors.blueAccent[400]} !important`,
          marginBlock: "0.5rem",
        },
      }}
    >
      <Box gridColumn="span 12">
        <DataGrid
          sx={{
            overflowX: "scroll",
          }}
          checkboxSelection
          rows={data}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default DataGridTable;
