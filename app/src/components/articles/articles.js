import React from 'react';

import { connect } from 'react-redux';

import overlay from '../../assets/AdobeStock_376550249.png';

import './articles.scss';

const Articles = props => {
  return (
    <div>
      <div className='card-container'>
        {props.articles.map(article =>
          article.map(art => (
            <div key={art.id} className='card'>
              <div className='title-container'>
                <p className='title'>
                  <a href={art.url}>{art.title}</a>
                </p>
                <p className='subtitle'>Source: {art.newsSite}</p>
              </div>
              <div className='image-cover'>
                <img className='image' src={art.imageUrl} alt='news' />
                <img className='overlay' src={overlay} alt='overlay' />
              </div>

              <div className='summary'>
                <p>{art.summary}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Articles);
