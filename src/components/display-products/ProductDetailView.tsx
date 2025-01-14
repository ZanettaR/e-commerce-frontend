/*  
 * This code is intended to 
 * Authors: Grayson Howard, Elenor Johnson, Patrick Rwamasirabo
 * Last Modified: 05/20
 */ 

import Product from "../../models/Product"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from 'react';

interface productProps {
  product: Product,
  close: ()=>void,
  open: boolean
}

export default function ProductDetailView(props:productProps){
  const fullWidth: boolean = true;
  const maxWidth: DialogProps["maxWidth"] = "lg";

  return (
    <React.Fragment>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={props.open}
        onClose={props.close}
      >
        <DialogTitle>{props.product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{`$ ${props.product.price.toFixed(2)}`}</DialogContentText>
          <Box
            component="img"
            sx={{
              maxHeight: 500,
              display: "flex",
              flexDirection: "column",
              m: "auto",

            }}
            alt={`Product Image of: ${props.product.name}`}
            src={props.product.image}
          />
          <DialogContentText>
            {`${props.product.description} Available: ${props.product.quantity}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}