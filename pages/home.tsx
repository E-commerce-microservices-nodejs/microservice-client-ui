import type { NextPage } from "next";
// import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import HomeImage from "../public/images/home.jpg";
import ExploreproductsButton from "../common/components/homePage/ExploreProductsButton";

const Home: NextPage = () => (
  <Container sx={{ pt: 9 }}>
    <header />

    <Container sx={{ position: "relative" }} component="main">
      <Typography variant="h5" gutterBottom>
        Explore our wide range of products!
      </Typography>
      <Image src={HomeImage} />
      <Box sx={{ position: "absolute", left: "12%", top: "51%" }}>
        <ExploreproductsButton />
      </Box>
    </Container>
  </Container>
);

export default Home;
