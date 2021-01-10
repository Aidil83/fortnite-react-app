import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  media1: {
    height: 648,
    backgroundPosition: "top",
    display: "flex",
    alignItems: "flex-end",
  },
  media2: {
    height: 480,
    backgroundPosition: "top",
  },
  paper1: {
    width: 300,
  },
  paper2: {
    backgroundSize: "cover",
    paddingLeft: 0,
    paddingRigth: 0,
  },
  cardContent: {
    backgroundColor: "#f9f9f9",
    textAlign: "left",
    height: 150,
  },
  fontLarge: {
    fontSize: "2.5rem",
    fontFamily: "Luckiest Guy",
    textTransform: "uppercase",
    textAlign: "left",
    color: "#fff",
  },
  font1: {
    color: "#1db8f3",
    fontWeight: "600",
  },
  font2: {
    fontFamily: "Luckiest Guy",
    textTransform: "uppercase",
    fontSize: "1.6rem",
    Color: "#000",
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
        <Grid className={classes.paper1} item xs={12} md={6} lg={7}>
          <CardMedia className={classes.media1} image={gridImage[0]}>
            <CardContent>
              <Typography className={classes.fontLarge}>
                Fortnite Crew: Green Arrow Revealed for January Crew P...
              </Typography>
            </CardContent>
          </CardMedia>
        </Grid>
        <Grid className={classes.paper1} item xs={12} md={6} lg={5} xl={5}>
          <CardMedia className={classes.media1} image={gridImage[1]}>
            <CardContent>
              <Typography className={classes.fontLarge}>
                Marvel Royalty and Warriors Pack
              </Typography>
            </CardContent>
          </CardMedia>
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[2]} />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.font1}>Dec 21, 2020</Typography>
            <Typography className={classes.font2}>
              wakanda solute emote
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[3]} />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.font1}>Dec 21, 2020</Typography>
            <Typography className={classes.font2}>
              fortography results
            </Typography>
          </CardContent>
        </Grid>
        <Grid className={classes.paper2} item xs={12} md={6} lg={3} xl={3}>
          <CardMedia className={classes.media2} image={gridImage[4]} />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.font1}>Dec 18, 2020</Typography>
            <Typography className={classes.font2}>
              operation snowdown
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
