import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledProductItem = styled.div`
  min-height: 28.5rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 45px;
  /* Radial Gradient Trick  */
  border: double 5px transparent;
  background-image: linear-gradient(white, white),
    radial-gradient(
      ellipse farthest-corner at 300px 20px,
      rgba(27, 69, 200, 1) 0%,
      rgba(124, 68, 143, 1) 63.54%,
      rgba(230, 62, 62, 1) 100%
    );

  background-origin: border-box;
  background-clip: content-box, border-box;
  /* End Trick */
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.03);
    border: solid 5px var(--clr-red);
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgContainer = styled.div`
  flex: 1.5;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .info {
    margin-top: 2rem;
    text-align: center;
    span {
      color: var(--clr-blue);
      font-size: 1.6rem;
    }
  }

  .actions {
    opacity: 0;
    position: absolute;
    top: 40%;
    width: 100%;
    transform: translateY(-40%);
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

    .icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon,
      span {
        transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      span {
        text-transform: uppercase;
        font-weight: 300;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        letter-spacing: 1px;
      }

      &:hover {
        .icon {
          transform: translateY(-5px);
        }
        span {
          font-weight: 400;
        }
      }
    }

    ${StyledProductItem}:hover & {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 100%;
    height: 0;
    width: 80%;
    border-radius: 0 0 40px 40px;
    background: var(--clr-red);
    transform: translateX(-50%);
    transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  ${StyledProductItem}:hover &::before {
    height: 100%;
    width: 100%;
  }
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ProductItem({ product }) {
  return (
    <StyledProductItem>
      <ProductWrapper>
        <ImgContainer>
          <img src={product.images[0]} alt="cool computer" />
        </ImgContainer>
        <InfoContainer>
          <div className="info">
            <h1>
              {product.brand} {product.name}
            </h1>
            <span>$ {numberWithCommas(product.price)}</span>
          </div>
          <div className="actions">
            <div className="icon-wrapper">
              <FontAwesomeIcon className="icon" size="3x" icon="cart-plus" />
              <span>add to cart</span>
            </div>
            <div className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon="eye" size="3x" />
              <span>view details</span>
            </div>
          </div>
        </InfoContainer>
      </ProductWrapper>
    </StyledProductItem>
  );
}

export default ProductItem;
