import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostItemPreview from "./PostItemPreview";

const styles = theme => ({});

class PostGrid extends React.Component {
  async componentDidMount() {
    const photos = await this.getPhotos();
    this.setState({
      photos
    });
  }

  async getPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          {this.state ? (
            this.state.photos.map(photo => (
              <Grid item xs={3}>
                <PostItemPreview {...photo} />
              </Grid>
            ))
          ) : (
            <div>loading.</div>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PostGrid);
