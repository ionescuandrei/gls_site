import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import Gallery from "react-grid-gallery";
import { Container, Row, Col } from "reactstrap";

export default class GalerySection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };
  }

  render() {
    return (
      <div
        style={{
          minHeight: "1px",
          border: "1px solid #ddd",
          overflow: "auto",
          margin: 50,
        }}
      >
        <Gallery
          images={this.state.images}
          enableLightbox={true}
          enableImageSelection={false}
          rowHeight={605}
        />
      </div>
    );
  }
}

GalerySection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

GalerySection.defaultProps = {
  images: [
    {
      src: require("assets/img/joshua-stannard.jpg"),
      thumbnail: require("assets/img/joshua-stannard.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/2.jpg"),
      thumbnail: require("assets/img/webimg/2.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/3.jpg"),
      thumbnail: require("assets/img/webimg/3.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/4.jpg"),
      thumbnail: require("assets/img/webimg/4.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/6.jpg"),
      thumbnail: require("assets/img/webimg/6.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/7.jpg"),
      thumbnail: require("assets/img/webimg/7.jpg"),
    },
    {
      src: require("assets/img/webimg/8.jpg"),
      thumbnail: require("assets/img/webimg/8.jpg"),
    },
    {
      src: require("assets/img/joshua-stannard.jpg"),
      thumbnail: require("assets/img/joshua-stannard.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/2.jpg"),
      thumbnail: require("assets/img/webimg/2.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/3.jpg"),
      thumbnail: require("assets/img/webimg/3.jpg"),
    },
    {
      src: require("assets/img/webimg/4.jpg"),
      thumbnail: require("assets/img/webimg/4.jpg"),
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
    },
    {
      src: require("assets/img/webimg/8.jpg"),
      thumbnail: require("assets/img/webimg/8.jpg"),
    },
    {
      src: require("assets/img/joshua-stannard.jpg"),
      thumbnail: require("assets/img/joshua-stannard.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/2.jpg"),
      thumbnail: require("assets/img/webimg/2.jpg"),
      thumbnailWidth: 305,
      thumbnailHeight: 203,
    },
    {
      src: require("assets/img/webimg/3.jpg"),
      thumbnail: require("assets/img/webimg/3.jpg"),
    },
    {
      src: require("assets/img/webimg/4.jpg"),
      thumbnail: require("assets/img/webimg/4.jpg"),
    },
    {
      src: require("assets/img/webimg/5.jpg"),
      thumbnail: require("assets/img/webimg/5.jpg"),
    },
    {
      src: require("assets/img/webimg/6.jpg"),
      thumbnail: require("assets/img/webimg/6.jpg"),
    },
    {
      src: require("assets/img/webimg/7.jpg"),
      thumbnail: require("assets/img/webimg/7.jpg"),
    },
    {
      src: require("assets/img/webimg/8.jpg"),
      thumbnail: require("assets/img/webimg/8.jpg"),
    },
  ],
};
