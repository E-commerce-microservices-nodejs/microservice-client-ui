/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { RootState } from "../store/types";
import LoginForm from "../common/components/Login";
import { UserType } from "../common/types/@appTypes";
import SuccessAlert from "../common/components/payment/SuccessAlert";

type PaymentType = {
  _id: string;
  orderId: string;
  amount: number;
  cardNumber: string;
};

const Payment = () => {
  const [login, setLogin] = useState(true);
  const [payment, setPayment] = useState<PaymentType>();
  const { shoppingCart } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const authenticatedUser: UserType = useSelector(
    (state: RootState) => state.user.authenticatedUser as UserType
  );
  const [cardOwner, setCardOwner] = useState("");
  const order = useSelector((state: RootState) => state.order.order);

  const total = shoppingCart.reduce(
    (a, b) =>
      a + (b.price as unknown as number) * (b.quantity as unknown as number),
    0
  );
  const onClose = () => {
    setLogin(false);
  };
  const user = useSelector((state: RootState) => state.user.authenticatedUser);
  const [success, setSuccess] = useState(false);
  const handlePay = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/orders/payment`, {
        orderId: order._id,
        amount: total,
        cardNumber: cardOwner,
        user: authenticatedUser,
      })
      .then((res) => {
        setTimeout(() => {
          setSuccess(true);
          dispatch({ type: "SET_SHOPPING_CART", payload: [] });
        }, 1000);
        setPayment(res.data);
      });
  };
  return (
    <Container sx={{ pt: 20 }}>
      {user ? (
        <>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "0ff",
              width: "70%",
              p: 5,
              position: "relative",
            }}
          >
            {order._id ? (
              <>
                <Typography sx={{ fontWeight: "bold", pl: 2, pt: 1 }}>
                  Customer :
                </Typography>
                <Typography sx={{ pl: 4, pt: 1 }}>
                  Full Name: {authenticatedUser?.fullname}
                </Typography>
                <Typography sx={{ pl: 4, pt: 1 }}>
                  Username: {authenticatedUser?.email}
                </Typography>
                <Typography sx={{ pl: 4, pt: 1 }}>
                  Order: {order?._id}
                </Typography>

                <Divider sx={{ m: 3 }} />
                {!payment ? (
                  <>
                    Total a payer :
                    <Typography variant="h5" sx={{ color: "red", pb: 3 }}>
                      {total} DH
                    </Typography>
                    <Box sx={{ mb: 5 }}>
                      <TextField
                        label="Credit Card Number"
                        placeholder="1234 4234 3435 2342"
                        sx={{ display: "flex", mb: 3 }}
                        onChange={(e) => setCardOwner(e.target.value)}
                      />
                      <TextField label="Credit Owner" placeholder="joe david" />
                    </Box>
                    <Button
                      color="primary"
                      sx={{
                        position: "absolute",
                        right: 12,
                        bottom: 12,
                        color: "orange",
                        backgroundColor: "rgba(10,110,0,0.9)",
                      }}
                      onClick={() => handlePay()}
                    >
                      Pay
                    </Button>
                  </>
                ) : (
                  <div>
                    {success && payment ? (
                      <Box sx={{ display: "flex", pl: 2 }}>
                        <Typography sx={{ fontWeight: "bold", mr: 1 }}>
                          Transaction Number :{"    "}
                        </Typography>
                        <Typography>{payment._id}</Typography>
                      </Box>
                    ) : null}
                  </div>
                )}
              </>
            ) : (
              <Typography>
                You didn't Do An Order Or The Order Has Failed !!!
              </Typography>
            )}
          </Paper>
          <Box sx={{ width: "70%" }}>{success ? <SuccessAlert /> : null}</Box>
        </>
      ) : (
        <div>
          You Are Not Authenticated
          <LoginForm open={login} onClose={onClose} />
        </div>
      )}
    </Container>
  );
};

export default Payment;
