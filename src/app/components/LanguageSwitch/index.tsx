import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Radio, RadioChangeEvent, Typography } from 'antd';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: RadioChangeEvent) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <Wrapper>
      <Typography>{t(...messages.selectLanguage())}</Typography>
      <Languages>
        <Radio
          id="en"
          title="English"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="en"
          checked={i18n.language === 'en'}
        />
        <Radio
          id="tr"
          title="Deutsch"
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="vi"
          checked={i18n.language === 'vi'}
        />
      </Languages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Languages = styled.div`
  display: flex;

  .radio {
    margin-right: 1.5rem;
  }
`;
