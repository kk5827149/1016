import { Dialog, Button, TextField } from "@mui/material";
import React from 'react';

export default function ProductAdd({ visible, newProduct, handleClick, update }) {
  return (
    <Dialog open={visible}>
      <TextField
        label="產品描述"
        variant="outlined"
        name="desc"
        value={newProduct.desc}
        onChange={handleClick}
      />
      <br />
      <TextField
        label="產品價格"
        variant="outlined"
        name="price"
        value={newProduct.price}
        onChange={handleClick}
      />
      <br />
      <Button variant="contained" color="primary" onClick={update}>
        新增
      </Button>
    </Dialog>
  );
}

