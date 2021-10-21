import React from 'react';
import styled from 'styled-components';
import { menus } from './constants';

const MenusWrapper = styled.div`
  max-height: 650px;
  margin-left: -15px;
  overflow: hidden auto;
  transform: rotateY(180deg);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 4px #cecfd7;
  }
  &::-webkit-scrollbar-thumb {
    height: 5px;
    border-radius: 100px;
    background-color: #8855f1;
  }
  .buttons {
    margin-right: 15px;
    transform: rotateY(180deg);
    button {
      width: 100%;
      text-align: right;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in-out;
      &:disabled {
        opacity: 0.5;
      }
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
      span {
        transition: all 0.2s ease-in-out;
      }
      span.icon {
        width: 48px;
        height: 48px;
        border-radius: 6px;
        margin-right: 20px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          z-index: 1;
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
        &:after {
          width: 100%;
          height: 100%;
          z-index: 0;
          content: '';
          display: block;
          margin: auto;
          border-radius: 8px;
          transition: all 0.2s ease-in-out;
          background-color: transparent;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
        }
      }
      span.text {
        color: #1e2030;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
      }
      &:hover {
        span.icon {
          background-color: #f5f6f9;
        }
        span.text {
          color: #8855f1;
        }
      }
      &.active {
        span.icon {
          background-color: transparent;
          &:after {
            width: 100%;
            height: 100%;
            border-radius: 0;
            background-color: #8855f1;
          }
        }
        span.text {
          color: #8855f1;
        }
      }
    }
  }
`;

const Menus = ({ swiper, index }) => (
    <MenusWrapper className="industry-menus">
        <div className="buttons">
            {menus.map((c, idx) => {
                const isCurrent = swiper ? idx === swiper.realIndex : false;

                return (
                    <button
                        key={c.title}
                        type="button"
                        disabled={c.img === ''}
                        className={`menu-item ${index === idx && 'active'}`}
                        onClick={() => swiper && swiper.slideTo(idx + 1)}
                    >
            <span className="icon">
              <img src={isCurrent ? c.srcWhite : c.src} alt="" />
            </span>
                        <span className="text">{c.title}</span>
                    </button>
                );
            })}
        </div>
    </MenusWrapper>
);

export default Menus;