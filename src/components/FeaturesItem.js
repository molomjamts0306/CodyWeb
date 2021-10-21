import React from 'react';
import styled from 'styled-components';

const FeatureItemWrapper = styled.div`
  height: 230px;
  padding: 25px;
  border-radius: 23px;
  background-color: #fff;
  position: relative;
  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.09);
    transition: all ease-in-out 200ms;
  }
  h5 {
    color: #230265;
    font-size: 17px;
    font-weight: 600 !important;
    margin: 12px 0 0;
  }
  span {
    width: 75%;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    font-family: 'Averta CY';
    color: rgba(41, 0, 122, 0.59);
    display: block;
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 24px;
  }
  &:before {
    content: '';
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background-color: ${(props) => props.color};
    background-image: url('${(props) => props.icon}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
    display: inline-block;
  }
  @media all and (max-width: 768px) {
    height: 170px;
    padding: 14px;
    border-radius: 12px;
    &:before {
      width: 40px;
      height: 40px;
      background-size: 20px;
    }
    h5 {
      font-size: 14px;
    }
    span {
      width: 100%;
      font-size: 11px;
      text-align: right;
      position: absolute;
      bottom: 14px;
      right: 14px;
    }
  }
`;

const FeatureItem = ({ item, color }) => (
    <FeatureItemWrapper icon={item.icon} color={color}>
        <h5>{item.title}</h5>
        <span>{item.engTitle}</span>
    </FeatureItemWrapper>
);

export default FeatureItem;