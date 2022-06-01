import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useQuery } from "react-query";

export interface ICharacters {
  id: number;
  name: string;
  url: string;
  image: string;
}

export function ListCharacters() {
  const { isLoading, data } = useQuery<ICharacters[]>(
    "characters",
    async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      return response.data.results;
    },
    {
      staleTime: 1000 * 100,
    }
  );

  return (
    <>
      {isLoading ? (
        <p>ISLOADING</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ width: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "red" }}>
                <TableCell
                  sx={{ width: 100, color: "#FFF", fontWeight: "bold" }}
                  align="center"
                >
                  -
                </TableCell>
                <TableCell
                  sx={{ width: 100, color: "#FFF", fontWeight: "bold" }}
                  align="center"
                >
                  Nome
                </TableCell>
                <TableCell
                  sx={{ width: 100, color: "#FFF", fontWeight: "bold" }}
                  align="center"
                >
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((character) => (
                <TableRow
                  key={character.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ width: "100px" }} align="center">
                    <img
                      src={character.image}
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </TableCell>
                  <TableCell align="left">{character.name}</TableCell>
                  <TableCell align="center">
                    <Link
                      style={{ textDecoration: "none" }}
                      state={character}
                      to={`character/${character.id}`}
                    >
                      <Button variant="contained">Editar</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
