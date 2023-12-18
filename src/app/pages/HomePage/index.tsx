import { Button, DatePicker, Space, Typography } from 'antd';
import { LanguageSwitch } from 'app/components/LanguageSwitch';
import { ThemeSwitch } from 'app/components/ThemeSwitch';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Space>
          <DatePicker />
          <Button type="primary">Primary Button</Button>
          <AntButton type="primary">Primary Button</AntButton>
          <ThemeSwitch />
          <LanguageSwitch />
        </Space>
        <Typography.Title>HomePage</Typography.Title>
        <h1>Home</h1>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
`;

const AntButton = styled(Button)`
  background-color: #f2f;
`;
