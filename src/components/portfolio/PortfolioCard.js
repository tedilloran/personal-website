import React from 'react';

class PortfolioCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card__heading'>
          <img alt={this.props.name} src={this.props.img} />
          <h4 className='heading-tertiary'>{this.props.name}</h4>
        </div>
        <div className='card__details'>
          <div className='card__details--description'>
            <p className='paragraph'>{this.props.children}</p>
          </div>
        </div>
        <a className='card__link' target='_blank' rel='noopener noreferrer' href={this.props.git}>
          <span role='img' aria-label='chain'>
            &#x1F517;
          </span>GitHub Repository
        </a>
      </div>
    );
  }
}

export default PortfolioCard;
