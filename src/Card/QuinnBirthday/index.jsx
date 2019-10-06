import cx from 'classnames';
import React from 'react';
import { Stars } from './Stars';
import './styles.css';

/*
TWINKLE
TWINKLE

LITTLE STAR

ONE YEAR OLD
IS WHAT YOU ARE!

PLEASE JOIN US TO CELEBRATE
QUINN'S FIRST BIRTHDAY
SATURDAY OCTOBER 19TH AT 3PM
*/

export const QuinnBirthday = () => (
  <div className="card-wrapper">
    <div className="card">
      <Stars />
      <Twinkle className="twinkle" />
      <div className="text-accent little-star">little star</div>
      <div className="text-big one-year-old">one year old</div>
      <div className="text-big is-what-you-are">is what you are!</div>
      <div className="text-cursive little-star">please join us to celebrate</div>
    </div>
  </div>
);

const Twinkle = ({ className }) => (
  <svg className={className} viewBox="0 0 500 500">
    <path
      id="curve"
      fill="transparent"
      d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
    />
    <text className="text-big-svg">
      <textPath xlinkHref="#curve">
        Twinkle Twinkle
      </textPath>
    </text>
  </svg>
)
