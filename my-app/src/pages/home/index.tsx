import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RouteComponentProps } from "react-router";
import { useUsers } from "../../store/userStore";
import RegisterBankTransfer from "../../ui-components";
import TransfersTable from "../../ui-components/transfers-table";
import "./styles.scss";

interface HomeProps {
  props: RouteComponentProps;
}

function Home({ props }: HomeProps) {
  const userStore = useUsers();

  const [showRegisterBankTransfer, setShowRegisterBankTransfer] = useState(
    false
  );

  useEffect(() => {
    userStore.getUserAccounts({ id: "1" });
    userStore.getUserTransfers();
  }, []);

  return (
    <div className="home-component">
      <h1 className="title">Home</h1>
      <Button
        className="register-transfer"
        variant="light"
        onClick={() => setShowRegisterBankTransfer(true)}
      >
        Transfer
      </Button>
      <div className="home-body">
        <RegisterBankTransfer
          user={userStore.userAccountsResult}
          exchangeValues={[
            { label: "USD - 45", value: 45 },
            { label: "EU - 50", value: 50 },
          ]}
          onClose={() => setShowRegisterBankTransfer(false)}
          show={showRegisterBankTransfer}
          onSubmit={(data) => {
            setShowRegisterBankTransfer(false);
            console.log(data);
            return userStore.registerTransfer(data);
          }}
        />
        {userStore.userTransfersResult && (
          <TransfersTable
            data={userStore.userTransfersResult}
            headerElements={[
              "Transfer Id",
              "Transfer Currency",
              "Transfer Amount",
              "Origin Account",
              "Destination Account",
              "Date",
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
