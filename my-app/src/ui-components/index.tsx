import React, { useState } from "react";
import { CURRENCY } from "../constants/common";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { validateNumber } from "../helpers/validate-number";
import { validateText } from "../helpers/validate-text";
import BankTransferResume from "./bank-transfer-resume";
import { validateTextLength } from "../helpers/validate-text-length";

interface RegisterBankTransferProps {
  user?: any;
  onClose: Function;
  show: boolean;
  onSubmit: (event) => void;
  exchangeValues: { label: string; value: number }[];
}

function RegisterBankTransfer({
  user,
  onClose,
  show,
  onSubmit,
  exchangeValues,
}: RegisterBankTransferProps) {
  const [formState, setFormState] = useState({
    validated: false,
    showTransferResume: false,
    transferInfo: {
      originAccount: null,
      destinationAccount: null,
      amount: null,
      reference: null,
    },
    formErrors: {
      originAccount: null,
      destinationAccount: null,
      amount: null,
      reference: null,
    },
  });

  const [errors, setErrors] = useState(
    {} as {
      originAccount: string;
      destinationAccount: string;
      amount: string;
      reference: string;
    }
  );

  const setField = (field, value) => {
    setFormState({
      ...formState,
      transferInfo: {
        ...formState.transferInfo,
        [field]: value,
      },
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const {
      originAccount,
      destinationAccount,
      amount,
      reference,
    } = formState.transferInfo;
    let newErrors = {} as {
      originAccount: string;
      destinationAccount: string;
      amount: string;
      reference: string;
    };
    if (!originAccount)
      newErrors.originAccount = "Debe seleccionar una cuenta origen.";
    if (!destinationAccount || destinationAccount < 0)
      newErrors.destinationAccount =
        "Debe seleccionar una cuenta destino válida";
    if (!amount || amount < 0)
      newErrors.amount = "Debe seleccionar un número mayor a 0.";
    if (!reference || reference === "")
      newErrors.reference = "Debe escribir alguna referencia.";

    return newErrors;
  };

  const handleSubmit = (event: any) => {
    if (formState.showTransferResume) {
      return onSubmit(formState.transferInfo);
    } else {
      event.preventDefault();
      setFormState((formState) => ({ ...formState, validated: true }));
      const newErrors = findFormErrors();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setFormState((formState) => ({
          ...formState,
          showTransferResume: true,
        }));
      }
    }
  };

  return (
    <div className="modal-container">
      <Modal show={show} size="lg">
        <Modal.Header>
          <Modal.Title>Bank Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!formState.showTransferResume ? (
            <Form style={{ clear: "both" }}>
              <Form.Group className="left-element account-origin-group">
                <Form.Label className="form-label account-origin-label">
                  Origin account:
                </Form.Label>
                <Form.Control
                  required
                  as="select"
                  onChange={(account) => {
                    const val = account.currentTarget.value;
                    setFormState((formState) => ({
                      ...formState,
                      transferInfo: {
                        ...formState.transferInfo,
                        originAccount: val,
                      },
                    }));
                  }}
                  isInvalid={!!errors.originAccount}
                >
                  <option value="">Select an account</option>
                  {user &&
                    user["accounts"].map((account, index) => {
                      return (
                        <option
                          key={`${account["accountId"]} - ${index}`}
                          value={account["accountId"]}
                          label={`${account["accountId"]} - ${account["currency"]}`}
                        ></option>
                      );
                    })}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.originAccount}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label tax-label">
                  Destination account:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  onChange={(event) => {
                    const val = event.currentTarget.value;
                    setFormState((formState) => ({
                      ...formState,
                      transferInfo: {
                        ...formState.transferInfo,
                        destinationAccount: val,
                      },
                    }));
                  }}
                  isInvalid={!!errors.destinationAccount}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.destinationAccount}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label tax-label">
                  Amount:
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  onChange={(event) => {
                    const val = event.currentTarget.value;
                    setFormState((formState) => ({
                      ...formState,
                      transferInfo: {
                        ...formState.transferInfo,
                        amount: val,
                      },
                    }));
                  }}
                  isInvalid={!!errors.amount}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.amount}
                </Form.Control.Feedback>
                {/* {user && bankTransferData.originAccount && user["accounts"] && (
                <Form.Text className="text-muted">
                  {`Your current balance is: ${
                    user["accounts"].filter(
                      (account) =>
                        account["accountId"] === bankTransferData.originAccount
                    )[0]["amountLeft"]
                  }.`}
                </Form.Text>
              )} */}
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-label ref-label">
                  Reference
                </Form.Label>
                <Form.Control
                  required
                  type="textarea"
                  onChange={(event) => {
                    const val = event.currentTarget.value;
                    setFormState((formState) => ({
                      ...formState,
                      transferInfo: {
                        ...formState.transferInfo,
                        reference: val,
                      },
                    }));
                  }}
                  isInvalid={!!errors.reference}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.reference}
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          ) : (
            <BankTransferResume title="Resume" info={formState.transferInfo} />
          )}
        </Modal.Body>
        <Modal.Footer style={{ width: "100%" }}>
          <Button
            className="mr-auto"
            variant="secondary"
            onClick={() => onClose()}
          >
            Cerrar
          </Button>
          <Button
            className="ml-auto"
            variant="primary"
            type="button"
            onClick={handleSubmit}
          >
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegisterBankTransfer;
