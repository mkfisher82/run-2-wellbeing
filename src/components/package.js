import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 7px;
  display: block;
  padding: 10px 24px;
  text-align: center;
  position: relative;
  background-color: white;

  &:hover {
    margin-top: -10px;
    border-width: 4px;
  }

  > ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-top: 29px;
  }

  > hr {
    background-color: #107a66;
    border: none;
    height: 1px;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  > p {
    padding: 0;
    margin: 5px;
  }
`;

const Name = styled.div`
  color: #565656;
  font-weight: 300;
  font-size: 2.25rem;
  margin-top: 0px;
`;

const Price = styled.div`
  margin-top: 7px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const NormalPrice = styled.div`
  margin-top: 7px;
  font-size: 2rem;
  text-decoration: line-through;
`;

const Period = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2px 21px 2px 21px;
  color: #33c4b6;
  border: 1px solid #e4e4e4;
  display: inline-block;
  border-radius: 15px;
  background-color: white;
  position: relative;
  bottom: -25px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  padding: 0 20px 0 0;
  display: inline-block;
`;

const SalePriceContainer = styled.div`
  > p {
    margin: 10px;
  }
`;

class Programme extends React.Component {
  state = {
    onSale: this.props.onSale,
  };

  render() {
    const { onSale } = this.state;
    let displayPrice;

    const { features, price, discountPrice, name, period } = this.props;

    const featureList = features.map(feature => (
      <ListItem key={feature.toString()}>
        <FAIcon size="lg" color="#107a66" icon={faCheck} />
        <p>{feature}</p>
      </ListItem>
    ));

    if (onSale) {
      displayPrice = <SalePrice price={price} discountPrice={discountPrice} />;
    } else {
      displayPrice = <RegularPrice price={price} />;
    }

    return (
      <Wrapper>
        <Name>{name}</Name>
        {displayPrice}
        <Period>{period}</Period>
        <hr />
        <ul>{featureList}</ul>
      </Wrapper>
    );
  }
}

export default Programme;

function RegularPrice({ price }) {
  return <Price>{price}</Price>;
}

function SalePrice({ price, discountPrice }) {
  return (
    <SalePriceContainer>
      <NormalPrice>Usually {price}</NormalPrice>
      <Price>Now {discountPrice}</Price>
      <p>Only 1 remaining at this price</p>
    </SalePriceContainer>
  );
}
