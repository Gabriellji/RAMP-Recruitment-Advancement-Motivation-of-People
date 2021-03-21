import styled from 'styled-components';
import theme from '../styles/theme';

const StyledLogin = styled.form`
  background-color: ${theme.colors.light};
  width: 50vw;
  height: 25vh;
  border: ${theme.spacer.two} solid ${theme.colors.purple};
  border-radius: ${theme.spacer.double};
  padding: ${theme.spacer.double};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 11px 11px 10px 0px rgba(100, 100, 100, 0.8);

  p {
    font-size: 24px;
    font-weight: bold;
  }

  p:nth-child(2) {
    font-size: 18px;
    font-weight: normal;
  }

  input,
  button {
    font-size: 18px;
    line-height: 24px;
    border-radius: ${theme.spacer.single};
    border-color: ${theme.colors.purple};
    padding: ${theme.spacer.two};
    width: 33%;
    text-align: center;
  }

  input {
    box-shadow: inset 3px 3px 5px 0px rgba(100, 100, 100, 0.8);
    ::placeholder {
      color: ${theme.colors.grey};
    }
  }

  button {
    color: ${theme.colors.purple};
    background-color: ${theme.colors.light};
    cursor: pointer;
    transition: all 500ms;
    box-shadow: 3px 3px 5px 0px rgba(100, 100, 100, 0.8);

    :hover {
      color: ${theme.colors.light};
      background-color: ${theme.colors.purple};
      border-color: ${theme.colors.light};
    }
  }
`;

const ProfileWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
  }

  input,
  button {
    font-size: 18px;
    line-height: 24px;
    border-radius: ${theme.spacer.single};
    border-color: ${theme.colors.purple};
    padding: ${theme.spacer.two};
    width: 33%;
    text-align: center;
  }

  input {
    box-shadow: inset 3px 3px 5px 0px rgba(100, 100, 100, 0.8);
    ::placeholder {
      color: ${theme.colors.grey};
    }
  }

  button {
    color: ${theme.colors.purple};
    background-color: ${theme.colors.light};
    cursor: pointer;
    transition: all 500ms;
    box-shadow: 3px 3px 5px 0px rgba(100, 100, 100, 0.8);

    :hover {
      color: ${theme.colors.light};
      background-color: ${theme.colors.purple};
      border-color: ${theme.colors.light};
    }
  }
`;

const ProfileForm = styled.form`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacer.quad};
`;

const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: normal;
  }

  p:nth-child(2) {
    color: ${theme.colors.purple};
  }
`;

const SpinnerWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: ${theme.spacer.double};

  p {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;

const StyledSection = styled.section`
  width: 100%;
  height: 80%;
  padding: ${theme.spacer.double};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 18px;
    margin-bottom: ${theme.spacer.double};
  }

  ul {
    list-style-type: square;

    li {
      margin-bottom: ${theme.spacer.single};
    }
  }
`;

const StyledInputSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacer.double};

  input,
  button {
    font-size: 18px;
    line-height: 24px;
    border-radius: ${theme.spacer.single};
    border-color: ${theme.colors.purple};
    padding: ${theme.spacer.two};
    width: 100%;
    text-align: center;
  }

  input {
    box-shadow: inset 3px 3px 5px 0px rgba(100, 100, 100, 0.8);
    ::placeholder {
      color: ${theme.colors.grey};
    }
  }

  button {
    color: ${theme.colors.purple};
    background-color: ${theme.colors.light};
    cursor: pointer;
    transition: all 500ms;
    box-shadow: 3px 3px 5px 0px rgba(100, 100, 100, 0.8);

    :hover {
      color: ${theme.colors.light};
      background-color: ${theme.colors.purple};
      border-color: ${theme.colors.light};
    }
  }
`;

const ApplicationWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SecondApplicationWrapper = styled.section`
  width: 50%;
  display: flex;
  align-items: baseline;
  gap: ${theme.spacer.quad};
  color: ${theme.colors.dark};
  color: ${(p) => p.selected && theme.colors.purple};

  div {
    background-color: ${theme.colors.dark};
    background-color: ${(p) => p.selected && theme.colors.purple};
  }

  p {
    font-size: 24px;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
const DateWrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 40px;
  
  > div {
    height: 100%;
  }
  .react-calendar {
    width:320px;
    position: absolute;
    top: -45px;
    left: -20px;
  }
  .react-daterange-picker {
    height: 100%;
    width: 250px;
    
    .react-daterange-picker__wrapper {
      display: none
    }
    
    .react-calendar__month-view__days__day--neighboringMonth {
      color: rgb(117, 117, 117)
    }

    .react-calendar__tile--active {
      font-weight: bold;
        &:enabled:focus, &:hover {
          font-weight: normal;
        }
        &:enabled:focus:before {
          content: "";
          border-radius: 25px;
        }
    }
 
    .react-calendar__navigation {
      button {
        min-width: 44px;
        background: none;
        font-size: 15px;
      }
    }
  }
`;

const HomeHeader = styled.header`
  
`;

export {
  // eslint-disable-next-line
  StyledLogin, ProfileWrapper, ProfileForm, LabelWrapper, SpinnerWrapper, StyledHeader, StyledSection, StyledInputSection, ApplicationWrapper, SecondApplicationWrapper, Dot, DateWrapper
};
