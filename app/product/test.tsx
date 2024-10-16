import { Box, Input, Dialog, Button, Container, List, ListItemButton, ListItemText, TextField} from "@mui/material";
import { useState } from 'react'
export default function ProductList() {

  const [products, setProducts] = useState([
    { desc: "iPad", price: 20000 },
    { desc: "iPhone 8", price: 20000 },
    { desc: "iPhone X", price: 30000 }
  ]);

  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const [visible, setVisible]= useState(false);

  const show = () => {
    setVisible(true);
  }

  const [newProduct, setNewProduct] = useState({desc:"", price:0})

  const [selectedIndex, setSelectedIndex] = useState(1);
    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      setSelectedIndex(index);
    };
    
     
    const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    function update() {
      setProducts(() => [...products, newProduct]);
      setVisible(false);
      console.log(products);
    }

  return (
    <Container maxWidth="sm">
    {!visible?
    <Box>
      <button onClick={show}>新增產品</button>
      <List subheader="Product list" aria-label="product list">
        {products.map((product, index) =>
          <ListItemButton divider key={product.desc}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}>
            <ListItemText primary={product.desc} secondary={product.price}>
            </ListItemText>
          </ListItemButton>)}
      </List>
    </Box>:    
    <ProductAdd/>}
    </Container>
  );

  function ProductAdd(){
    return (
      <Dialog open={visible}>
        <TextField label="產品描述" variant="outlined" name="desc" value={newProduct.desc} onChange={handleClick} /><br />
        <TextField label="產品價格" variant="outlined" name="price" value={newProduct.price} onChange={handleClick} /><br />
        <Button variant="contained" color="primary" onClick={update}>新增</Button>
      </Dialog>
    )
  } 
}


