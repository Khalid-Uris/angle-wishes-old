// AWTable
import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import colors from "../../assets/color/color";

const AWTable = ({ columns, rows }) => {
  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: colors?.greyLight,
          border: `1px solid ${colors?.grey}`,
          borderRadius: 3,
        }}
      >
        <Table sx={{ overflowX: "scroll" }}>
          <TableHead>
            <TableRow>
              {columns?.map((col, index) => (
                <TableCell
                  key={index}
                  sx={{
                    width: `${100 / columns.length}%`,
                    border: `1px solid ${colors?.grey}`,
                    fontWeight: 550,
                  }}
                >
                  {col?.Header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns?.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    style={{
                      width: `${100 / columns.length}%`,
                      border: `1px solid ${colors?.grey}`,
                      fontWeight: 550,
                    }}
                  >
                    {/* Render Cell component if provided */}
                    {col.Cell ? (
                      <col.Cell row={row} />
                    ) : (
                      // Otherwise, render row data
                      row[col?.accessor]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AWTable;
