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

    input, button {
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

      :hover{
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

  input, button {
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

    :hover{
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

export {
  StyledLogin, ProfileWrapper, ProfileForm, LabelWrapper,
};
