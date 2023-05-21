import css from '../../Styles/styles.module.css';
import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.onModal}
          className={css.ImageGalleryItem_image}
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;