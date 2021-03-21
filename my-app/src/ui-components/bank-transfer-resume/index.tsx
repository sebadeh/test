import React from "react";
import { formatCase } from "../../helpers/format-case";
import { formatMoney } from "../../helpers/format-money";

interface BankTransferResumeProps {
  title: string;
  info: any;
}

function BankTransferResume({ title, info }: BankTransferResumeProps) {
  return (
    <div>
      <h4>{title}</h4>
      {Object.keys(info).map((key, index) => {
        return (
          <p key={`${key}-${index}`}>
            {`${formatCase(key)}: `}
            {key === "amount" ? (
              <strong>{`${formatMoney(info[key])}`}</strong>
            ) : (
              <strong>{`${info[key]}`}</strong>
            )}
          </p>
        );
      })}
    </div>
  );
}

export default BankTransferResume;
