import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  
  getStartPage() {
    let endPage = this.getEndPage();
    let startPage = endPage - this.props.maxPageItemCount + 1;

    if (startPage <= 0) {
      return 1;
    }

    return startPage;
  }

  getEndPage() {
    let endPage = this.props.currentPage + (Math.ceil(this.props.maxPageItemCount / 2) - 1);
    let totalPages = this.getTotalPages();
    
    if (endPage < this.props.maxPageItemCount) {
      return this.props.maxPageItemCount;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
    }

    return endPage;
  }

  getTotalPages() {
    const totalImages  = this.props.resultsCount;
    
    return Math.ceil(totalImages / this.props.maxResultsPerPage);
  }
  
  getPages(startPage, endPage) {
    let pages = [];
    
    for(let i = startPage; i <= endPage; i++) {
      let pageClass = (i === this.props.currentPage) ? this.props.classNames.active : this.props.classNames.default;
      pages.push(
        <div className={ pageClass } onClick={ this.props.goToPage(i) } key={ i }>{ i }</div>
      );
    }

    return pages;
  }

  render() {
    if (!this.props.resultsCount) {
      return "No results";
    }

    return (
      <div className={ this.props.classNames.container } id={ this.props.componentIds.container }>
        { this.getPages(this.getStartPage(), this.getEndPage()) }
      </div>
        
    );
  }
}

Pagination.defaultProps = {
  containerClassName: '',
  pageItemClassName: '',
  currentPage: 1,
  resultsCount: 100,
  maxPageItemCount: 10,
  maxResultsPerPage: 20,
  classNames : {
    active: 'page active',
    default: 'page',
    container: 'pagination'
  },
  componentIds: {
    container: 'paginationContainer'
  },
  goToPage: () => {}
};

export default Pagination;
