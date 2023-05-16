import css from '../../Styles/styles.module.css'
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../../Icon/search.svg';

class Searchbar extends Component {
  state = {
    inputData: '',
  };
  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputData);
  };

  render() {
    const { inputData } = this.state.inputData;
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <AddIcon width="43px" />
          </button>

          <input
            className={css.SearchForm_input}
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};


//   renderImg(data) {
    //     console.log(data)
    //     if (data !== undefined) {
    //       const markup = data.map(({ webformatURL }) => {
    //         return `<div class="photo-card">
    //           <img src="${webformatURL}" alt="" loading="lazy" width="420" height="300"/>
    //         </div>`;
    //       })
    //     }
    // } 