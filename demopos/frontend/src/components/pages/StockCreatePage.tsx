import { Product } from "@/types/product.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

const formValidateSchema = Yup.object().shape({
  // username: Yup.string().email("Invalid email address").required("Email is required").trim(),
  name: Yup.string().required("Product name is required").trim(),
  stock: Yup.number().min(1).required("Minimum stock is 1"),
  price: Yup.number().min(1).required("Minimum price is 1"),
});

export default function StockCreatePage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "Your Product", stock: 0, price: 0 },
    resolver: yupResolver(formValidateSchema),
  });

  return (
    <div>
      <Card elevation={10} sx={{ p: 20 }}>
        <Typography variant="h3">Product Creation</Typography>
        <form onSubmit={handleSubmit((result) => alert(JSON.stringify(result)))}>
          {/* Name */}
          <Controller
            control={control}
            name="name"
            render={({ field }) => <TextField error={Boolean(errors.name)} helperText={errors.name?.message} {...field} placeholder="Name" fullWidth sx={{ py: 1 }} />}
          />

          {/* Stock */}
          <Controller control={control} name="stock" render={({ field }) => <TextField {...field} placeholder="Stock" fullWidth sx={{ py: 1 }} />} />

          {/* Price */}
          <Controller control={control} name="price" render={({ field }) => <TextField {...field} placeholder="Price" fullWidth sx={{ py: 1 }} />} />
          <Stack direction={"row"} sx={{ pt: 8 }}>
            <Box className="grow" />
            <Button>Cancel</Button>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
