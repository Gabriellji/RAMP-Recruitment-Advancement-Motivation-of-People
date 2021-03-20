import React from 'react';
import { StyledHeader, StyledSection, StyledInputSection } from './style';
import { Button } from '../components/atoms/index';

export const Challenge = () => (
  <>
    <StyledHeader>
      <p>Technical Challenge</p>
    </StyledHeader>
    <StyledSection>
      <div>
        <p>Hi Jane Doe!</p>
        <p>Complete following tasks and submit your repo link:</p>
        <ul>
          <li>
            <span>Given an array of ones and zeroes,</span>
            <span>convert the equivalent binary value to an integer.</span>
          </li>
          <li>
            <span>Write a program to determine if a string contains only unique characters.</span>
            <span>Return true if it does and false otherwise.</span>
          </li>
          <li>
            <span>Complete the function that takes a list of numbers (nums), as the only argument to the function.</span>
            <span>Take each number in the list and square it if it is even, or square root the number if it is odd.</span>
            <span>Take this new list and return the sum of it, rounded to two decimal places.</span>
            <span>The list will never be empty and will only contain values that are greater than or equal to zero.</span>
          </li>
        </ul>
      </div>
      <StyledInputSection>
        <input type="text" placeholder="https://github.com/........" />
        <Button action={() => alert('Technical challenge submitted correctly!')} text="Submit" />
      </StyledInputSection>
    </StyledSection>
  </>
);

export default Challenge;
