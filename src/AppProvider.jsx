import React from 'react';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import themes from '@journal/configs/theme/theme.config';
import AppLocale from '@journal/configs/translation';
import PropTypes from 'prop-types';

export default function AppProvider({ children }) {
  const { locale } = useSelector(state => state.LanguageSwitcher.language);
  const { themeName } = useSelector(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = AppLocale[locale];

  console.log(currentAppLocale, 'app Location', locale, themeName, themes)
  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>
      </IntlProvider>
    </ConfigProvider>
  );
}


AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};