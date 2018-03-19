import React, { Component, PropTypes } from 'react';
import BigImage from '../../components/Image/BigImage';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProfileImage from '../../components/Image/ProfileImage';
import OpportunityProgress from '../../components/Opportunity/OpportunityProgress';
import './Oportunitati.css';

class OportunitateExistenta extends Component {
  renderDescription({description}) {
    return (
      <span>{description}</span>
    );
  }

  render() {
    return (
      <div>
        <BigImage src='http://wondrlust.com/wp-content/uploads/2017/11/o-STUDENTS-VOLUNTEERING-facebook.jpg' alt='Volunteering' half={true} />
        <Title content='Hello World' subtitle='Salvati Copiii' />
        <ProfileImage src='http://www.protectiacopilului6.ro/thumb_500x500_1838-salvatii-copii.jpg' alt='Volunteering' />
        {this.renderDescription({...this.props})}
        <OpportunityProgress opportunity={1} />
        <Button />
        <Footer />
      </div>
    );
  }
}

OportunitateExistenta.defaultProps = {
  description: null
};

OportunitateExistenta.PropTypes = {
  description: PropTypes.string
};

export default OportunitateExistenta;