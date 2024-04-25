import { Product } from "@/types/product.type";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

export default function StockCreatePage() {
  const { control, handleSubmit } = useForm<Product>({
    defaultValues: { name: "Your Product", stock: 0, price: 0 },
  });
  return (
    <div>
      <Card elevation={10} sx={{ p: 20 }}>
        <Typography variant="h3">Product Creation</Typography>
        <form>
          {/* Name */}
          <Controller control={control} name="name" render={({ field }) => <TextField {...field} placeholder="Name" fullWidth sx={{ py: 1 }} />} />

          {/* Stock */}
          <Controller control={control} name="stock" render={({ field }) => <TextField {...field} placeholder="Stock" fullWidth sx={{ py: 1 }} />} />

          {/* Price */}
          <Controller control={control} name="price" render={({ field }) => <TextField {...field} placeholder="Price" fullWidth sx={{ py: 1 }} />} />
          <Stack direction={"row"} sx={{ pt: 8 }}>
            <Box className="grow" />
            <Button>Cancel</Button>
            <Button variant="contained">Create</Button>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
