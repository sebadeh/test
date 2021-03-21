import React from "react";
import { Table } from "react-bootstrap";
import { formatCase } from "../../helpers/format-case";

interface TransfersTableProps {
  data: { userId: string; userName: string; transfers: {}[] };
  headerElements: string[];
}

function TransfersTable({ data, headerElements }: TransfersTableProps) {
  return (
    <div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            {/* Podemos recibir un array con los headers o usar el primer elemento de la tabla y agarrar las keys y pasarlas a formato legible */}
            {headerElements.map((element, index) => {
              return (
                <th key={`${element}- ${index}`}>{formatCase(element)}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.transfers?.map((transfer, index) => {
            return (
              <tr key={`${transfer["transferId"]}-${index}`}>
                {Object.keys(transfer).map((elementKey, index) => {
                  return (
                    <td key={`${elementKey}-${index}`}>
                      {transfer[elementKey]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TransfersTable;
