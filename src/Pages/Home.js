import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" color="initial" pb={2}>
          this is our first container components i'm trying to responsive design
        </Typography>
        <Box mb={4}>
          <Typography
            variant="body1"
            color="initial"
            letterSpacing={1}
            lineHeight={1.5}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            doloremque at cupiditate earum. Sequi, animi! Rerum incidunt quam
            molestiae inventore eius reiciendis suscipit consequatur. Distinctio
            dicta quos ipsam. Doloribus, dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloremque at cupiditate earum.
            Sequi, animi! Rerum incidunt quam molestiae inventore eius
            reiciendis suscipit consequatur. Distinctio dicta quos ipsam.
            Doloribus, dolorum.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
