import React from "react";

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.srcImg} alt={this.props.altImg} />;
  }
}
export default ImageComponent;
