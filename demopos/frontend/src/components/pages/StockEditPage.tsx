import { Box, Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.type";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").trim(),
  price: Yup.number().min(100, "Number must be greater than 100"),
  stock: Yup.number().min(100, "Number must be greater than 100"),
});

const StockEditPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: Product) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", String(values.price));
    formData.append("stock", String(values.stock));
    formData.append("image", values.file);
    const result = await dispatch(addProduct(formData));
    if (addProduct.fulfilled.match(result)) {
      navigate("/stock");
    }
  };

  const initialValue: Product = { name: "", price: 1500, stock: 9999 };
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: initialValue,
    //@ts-ignore
    resolver: yupResolver(formValidateSchema),
  });

  const watchPreviewImage = watch("file_obj");

  const showForm = () => {
    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-8">
            <Typography gutterBottom variant="h3">
              Edit Product
            </Typography>
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Name"
                    error={Boolean(errors.name?.message)}
                    helperText={errors.name?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                );
              }}
            ></Controller>
            <Controller
              name="price"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Price"
                    type="number"
                    error={Boolean(errors.price?.message)}
                    helperText={errors.price?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                );
              }}
            />
            <Controller
              name="stock"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    type="number"
                    label="Stock"
                    error={Boolean(errors.stock?.message)}
                    helperText={errors.stock?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                );
              }}
            />

            <Box>{showPreviewImage()}</Box>
            <TextField
              className="mt-4"
              type="file"
              fullWidth
              onChange={(e: React.ChangeEvent<any>) => {
                e.preventDefault();
                setValue("file", e.target.files[0]); // for upload
                setValue("file_obj", URL.createObjectURL(e.target.files[0])); // for preview image
              }}
            />
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained" color="primary" type="submit" className="mr-2">
              Update
            </Button>
            <Button fullWidth component={Link} to="/stock" color="info" variant="outlined">
              Cancel
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  };

  const showPreviewImage = () => {
    if (watchPreviewImage) {
      return <img alt="" src={watchPreviewImage} className="h-[100px]" />;
    }
  };

  return <Box>{showForm()}</Box>;
};

export default StockEditPage;

// import React, { useEffect } from "react";
// import { useMatch } from "react-router-dom";

// type Props = {};

// export default function StockEditPage({}: Props) {
//   const match = useMatch("/stock/edit/:id");

//   const loadData = () => {
//     const product_id = match?.params.id;
//     setTimeout(() => {
//       alert("productId " + product_id);
//     }, 2000);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);
//   return <div>StockEditPage</div>;
// }
