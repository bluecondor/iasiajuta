import React, { Component } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Opportunities from '../../components/Opportunities/Opportunities';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import './Oportunitati.css';

class Oportunitati extends Component {
  renderOportunitati({ backgroundImage, title }) {
    return (
      <div className='Oportunitati'>
        <BigImage src={backgroundImage} alt={title} half={true}>
          <Title content={title} subtitle='Ajutăm voluntariatul impreună' />

          <div className='Oportunitati-SearchBar'>
            <Search />
            <Button link="/oportunitati/nou" content="Adaugă" />
          </div>

          <Opportunities />
        </BigImage>
        <Footer />
      </div>
    );
  }

  render() {
    return this.renderOportunitati({...this.props});
  };
}

Oportunitati.defaultProps = {
  backgroundImage: 'https://i.imgur.com/BZ4DPfR.jpg',
  title: 'IașiAjută'
};


export default Oportunitati;
