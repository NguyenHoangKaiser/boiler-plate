import * as React from 'react';
import styled from 'styled-components/macro';
import { themeActions } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { Radio, RadioChangeEvent, Typography } from 'antd';

export function ThemeSwitch() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event: RadioChangeEvent) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <Wrapper>
      <Typography>Select Theme</Typography>
      <Themes>
        <Radio
          id="system"
          title="System theme"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="system"
          checked={theme === 'system'}
        />
        <Radio
          id="light"
          title="Light"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="light"
          checked={theme === 'light'}
        />
        <Radio
          id="dark"
          title="Dark"
          className="radio"
          name="theme"
          onChange={handleThemeChange}
          value="dark"
          checked={theme === 'dark'}
        />
      </Themes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Themes = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
