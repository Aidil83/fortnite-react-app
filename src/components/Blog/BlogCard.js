import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowAnchor: "none",
  },

  media1: {
    height: 680,
    backgroundPosition: "top",
  },
  media2: {
    height: 480,
    backgroundPosition: "top",
  },
  paper1: {
    width: 300,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    backgroundSize: "cover",
    paddingLeft: 0,
    paddingRigth: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function BlogCard() {
  const classes = useStyles();
  const gridImage = [
    "https://cdn2.unrealengine.com/en-15br-social-subs-announce-greenarrow-news-header-1920x1080-42a73c3e0f98.jpg",
    "https://cdn2.unrealengine.com/15br-marvel-holiday-rmt-news-thumb-576x576-7f5288f20f13.jpg",
    "https://cdn2.unrealengine.com/15br-wakandaforever-newsthumb-1-576x576-c4a35b4c20f2.jpg",
    "https://cdn2.unrealengine.com/15br-fortography-blog-thumb-576x576-3521dfc95405.jpg",
    "https://cdn2.unrealengine.com/15br-snowdown-keyart-newsthumb-576x576-367961dd9c45.jpg",
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.paper1} item xs={12} md={6} lg={7} xl={6}>
          <CardMedia className={classes.media1} image={gridImage[0]} />
        </Grid>
        <Grid className={classes.paper1} item xs={12} md={6} lg={5} xl={6}>
          <CardMedia className={classes.media1} image={gridImage[1]} />
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[2]} />
          <CardContent style={{ backgrouncColor: "gray" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[3]} />
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[4]} />
        </Grid>
      </Grid>
    </div>
  );
}
