import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme, selectThemeKey } from './slice/selectors';
import { ConfigProvider, App, theme as antTheme } from 'antd';
import viVN from 'antd/locale/vi_VN';
import enUS from 'antd/locale/en_US';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { useTranslation } from 'react-i18next';

const px2rem = px2remTransformer({
  rootValue: 16,
});

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  useThemeSlice();
  const { i18n } = useTranslation();
  const theme = useSelector(selectTheme);
  const themeKey = useSelector(selectThemeKey);
  return (
    <StyleProvider transformers={[px2rem]}>
      <OriginalThemeProvider theme={theme}>
        <ConfigProvider
          theme={{
            cssVar: true,
            hashed: false,
            token: {
              colorPrimary: '#00b96b',
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            },
            algorithm:
              themeKey === 'light'
                ? antTheme.defaultAlgorithm
                : antTheme.darkAlgorithm,
          }}
          locale={i18n.language === 'vi' ? viVN : enUS}
        >
          <App>{React.Children.only(props.children)}</App>
        </ConfigProvider>
      </OriginalThemeProvider>
    </StyleProvider>
  );
};
