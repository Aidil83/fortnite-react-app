import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { gridImage, gridLoadMoreImage } from "../../data/GridData";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { BlogButton, BlogButtonContainer, BlogLoadMore } from "./Blog.elements";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper1: {
    width: 300,
    overflow: "hidden",
  },
  media1: {
    position: "relative",
    zIndex: 0,
    height: 648,
    maxHeight: 648,
    backgroundPosition: "top",
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
    transition: ".5s",

    "&:hover": {
      transition: ".5s",
      "& $contentHover": {
        opacity: 0,
        transition: ".3s",
      },
      "& $fontLarge": {
        marginBottom: 25,
        transition: ".3s",
      },
      "& $imageLarge": {
        transform: "scale(1.05)",
        transition: ".5s",
      },
    },
  },

  imageLarge: {
    position: "absolute",
    backgroundPosition: "top",
    zIndex: 20,
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    transition: ".5s",
  },

  fontLarge: {
    pointerEvents: "none",
    fontSize: "2.5rem",
    lineHeight: 0.85,
    fontFamily: "Luckiest Guy",
    textTransform: "uppercase",
    textAlign: "left",
    color: "#fff",
    transition: ".5s",
  },

  contentHover: {
    position: "absolute",
    zIndex: 25,
    backgroundImage:
      "linear-gradient( 180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
    height: 100,
    width: "100%",
    transition: "1s",

    "&:hover": {
      overflow: "hidden",
      transition: "1s",
      opacity: 0,
    },
  },

  paper2: {
    backgroundSize: "cover",
    backfaceVisibility: "hidden",

    "&:hover": {
      transform: "scale(1.02) translateZ(0) perspective(1px)",
      backfaceVisibility: "hidden",
    },
  },

  cardContainer2: {
    transition: ".3s",
    "&:hover": {
      transition: ".3s",
      transform: "scale(1.02) translateZ(0) perspective(1px)",
    },
  },

  media2: {
    height: 480,
    backgroundPosition: "top",
  },

  cardContent: {
    backgroundColor: "#f9f9f9",
    textAlign: "left",
    height: 150,
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
  const [isLoadMore, setIsLoadMore] = useState(false);
  const classes = useStyles();

  let animateBigGrid1 = useRef(null);
  let animateBigGrid2 = useRef(null);
  let animateBigGrid3 = useRef(null);
  let animateBigGrid4 = useRef(null);

  let smallGridRef1 = useRef(null);
  let smallGridRef2 = useRef(null);
  let smallGridRef3 = useRef(null);
  let smallGridRef4 = useRef(null);

  let smallGridRef5 = useRef(null);
  let smallGridRef6 = useRef(null);

  useEffect(() => {
    const animateBigGrid12 = [animateBigGrid1, animateBigGrid2];
    animateBigGrid12.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
        },
        opacity: 0,
        y: 126,
        delay: 0.25,
      });
    });

    const animateSmallGrid = [smallGridRef1, smallGridRef2, smallGridRef3];
    animateSmallGrid.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: e,
        opacity: 0,
        ease: "power4.out",
        duration: 1.4,
        y: 150,
        delay: 0.3,
      });
    });
  }, []);

  useEffect(() => {
    const animateBigGrid34 = [smallGridRef4, animateBigGrid3, animateBigGrid4];
    //NOTE: This is for aniamtebigGrid4:
    if (isLoadMore) {
      animateBigGrid34.forEach((e) => {
        gsap.from(e, {
          duration: 1.4,
          opacity: 0,
          ease: "power4.out",
          y: 150,
          delay: 0.5,
        });
      });
      const animateSmallGrid56 = [smallGridRef5, smallGridRef6];
      animateSmallGrid56.forEach((e) => {
        gsap.from(e, {
          scrollTrigger: e,
          duration: 1.4,
          opacity: 0,
          ease: "power4.out",
          y: 150,
          delay: 0.3,
        });
      });
    }
  }, [isLoadMore]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          className={classes.paper1}
          item
          xs={12}
          md={6}
          lg={7}
          ref={(e) => (animateBigGrid1 = e)}
        >
          <div style={{ overflow: "hidden" }}>
            <Card className={classes.media1}>
              <CardMedia
                className={classes.imageLarge}
                image={gridImage[0]}
              ></CardMedia>
              <CardContent style={{ position: "absolute", zIndex: 30 }}>
                <Typography className={classes.font1} style={{ color: "#fff" }}>
                  Dec 23, 2020
                </Typography>
                <Typography className={classes.fontLarge}>
                  Fortnite Crew: Green Arrow Revealed for January Crew P...
                </Typography>
              </CardContent>
              <div className={classes.contentHover} />
            </Card>
          </div>
        </Grid>
        <Grid
          className={classes.paper1}
          item
          xs={12}
          md={6}
          lg={5}
          xl={5}
          ref={(e) => (animateBigGrid2 = e)}
        >
          <div style={{ overflow: "hidden" }}>
            <Card className={classes.media1}>
              <CardMedia
                className={classes.imageLarge}
                image={gridImage[1]}
              ></CardMedia>
              <CardContent style={{ position: "absolute", zIndex: 30 }}>
                <Typography className={classes.font1} style={{ color: "#fff" }}>
                  Dec 21, 2020
                </Typography>
                <Typography className={classes.fontLarge}>
                  Marvel Royalty and Warriors Pack
                </Typography>
              </CardContent>
              <div className={classes.contentHover} />
            </Card>
          </div>
        </Grid>
        <Grid
          className={classes.paper2}
          item
          xs={12}
          md={6}
          lg={3}
          xl={3}
          ref={(e) => (smallGridRef1 = e)}
        >
          <Card className={classes.cardContainer2}>
            <CardMedia className={classes.media2} image={gridImage[2]} />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.font1}>Dec 21, 2020</Typography>
              <Typography className={classes.font2}>
                wakanda solute emote
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          className={classes.paper2}
          item
          xs={12}
          md={6}
          lg={3}
          xl={3}
          ref={(e) => (smallGridRef2 = e)}
        >
          <Card className={classes.cardContainer2}>
            <CardMedia className={classes.media2} image={gridImage[3]} />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.font1}>Dec 21, 2020</Typography>
              <Typography className={classes.font2}>
                fortography results
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          className={classes.paper2}
          item
          xs={12}
          md={6}
          lg={3}
          xl={3}
          ref={(e) => (smallGridRef3 = e)}
        >
          <Card className={classes.cardContainer2}>
            <CardMedia className={classes.media2} image={gridImage[4]} />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.font1}>Dec 18, 2020</Typography>
              <Typography className={classes.font2}>
                operation snowdown
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {isLoadMore && (
          <Grid
            className={classes.paper2}
            item
            xs={12}
            md={6}
            lg={3}
            xl={3}
            ref={(e) => (smallGridRef4 = e)}
            style={{ transform: "translateY(0, 740px)" }}
          >
            <Card className={classes.cardContainer2}>
              <CardMedia
                className={classes.media2}
                image={gridLoadMoreImage[0]}
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.font1}>Dec 17, 2020</Typography>
                <Typography className={classes.font2}>
                  Happy Holidays from Fornite Creative
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {/* NOTE: Next Grid */}
      {!isLoadMore && (
        <BlogButtonContainer>
          <BlogButton onClick={() => setIsLoadMore(true)}>
            <BlogLoadMore>LOAD MORE</BlogLoadMore>
          </BlogButton>
        </BlogButtonContainer>
      )}
      {isLoadMore && (
        <Grid container spacing={3}>
          <Grid
            className={classes.paper1}
            item
            xs={12}
            md={6}
            lg={5}
            ref={(e) => (animateBigGrid3 = e)}
          >
            <div style={{ overflow: "hidden" }}>
              <Card className={classes.media1}>
                <CardMedia
                  className={classes.imageLarge}
                  image={gridLoadMoreImage[1]}
                ></CardMedia>
                <CardContent style={{ position: "absolute", zIndex: 30 }}>
                  <Typography
                    className={classes.font1}
                    style={{ color: "#fff" }}
                  >
                    Dec 17, 2020
                  </Typography>
                  <Typography className={classes.fontLarge}>
                    Fornite on Xbox series X|S and PS5
                  </Typography>
                </CardContent>
                <div className={classes.contentHover} />
              </Card>
            </div>
          </Grid>
          <Grid
            className={classes.paper1}
            item
            xs={12}
            md={6}
            lg={6}
            xl={7}
            ref={(e) => (animateBigGrid4 = e)}
          >
            <div style={{ overflow: "hidden" }}>
              <Card className={classes.media1}>
                <CardMedia
                  className={classes.imageLarge}
                  image={gridLoadMoreImage[2]}
                ></CardMedia>
                <CardContent style={{ position: "absolute", zIndex: 30 }}>
                  <Typography
                    className={classes.font1}
                    style={{ color: "#fff" }}
                  >
                    Dec 17, 2020
                  </Typography>
                  <Typography className={classes.fontLarge}>
                    Fornite Creative - New Year, New Games
                  </Typography>
                </CardContent>
                <div className={classes.contentHover} />
              </Card>
            </div>
          </Grid>
          <Grid
            className={classes.paper2}
            item
            xs={12}
            md={6}
            lg={3}
            xl={3}
            ref={(e) => (smallGridRef5 = e)}
          >
            <Card className={classes.cardContainer2}>
              <CardMedia
                className={classes.media2}
                image={gridLoadMoreImage[3]}
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.font1}>Dec 16, 2020</Typography>
                <Typography className={classes.font2}>
                  Daryl Dixon and Michonne Join the Hunt
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            className={classes.paper2}
            item
            xs={12}
            md={6}
            lg={3}
            xl={3}
            ref={(e) => (smallGridRef6 = e)}
          >
            <Card className={classes.cardContainer2}>
              <CardMedia
                className={classes.media2}
                image={gridLoadMoreImage[4]}
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.font1}>Dec 16, 2020</Typography>
                <Typography className={classes.font2}>
                  Fornite Generations Cup - only on PS4 | PS5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
