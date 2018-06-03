import { Bold } from './cleanSS/Typography';
import { If } from 'react-extras';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

const SidebarAside = styled.aside`
  position: fixed;
  top: 0;
  ${props =>
    props.right
      ? `
    right: 0;
    transform: translate3d(0, 20vh, 0) rotate(-90deg) scale(-1, -1);
  `
      : `
    left: 0;
    transform: translate3d(-5vh, 20vh, 0) rotate(90deg) scale(-1, -1);
  `} z-index: 999;
  @media print {
    & {
      display: none;
    }
  }
`;
SidebarAside.displayName = 'SidebarAside';

const SidebarButton = styled.button`
  line-height: 1em;
  display: inline-block;
  zoom: 1;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  background: 0;
  border: 0;
  padding: 0.5em;
  &:focus {
    outline: 0;
    outline: -webkit-focus-ring-color none;
  }
`;
SidebarButton.displayName = 'SidebarButton';

const SidebarAnchor = styled.a`
  line-height: 1em;
  display: inline-block;
  zoom: 1;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  background: 0;
  border: 0;
  padding: 0.5em;
  color: ${props => props.theme.colors.black};
  &:focus {
    outline: 0;
    outline: -webkit-focus-ring-color none;
  }
`;
SidebarAnchor.displayName = 'SidebarAnchor';

const getNextLanguage = lng => {
  if (lng === 'en') return 'de';
  return 'en';
};

class Sidebar extends React.PureComponent {
  static propTypes = {
    i18n: PropTypes.object,
    t: PropTypes.func,
    url: PropTypes.object,
  };

  render() {
    const { i18n, t, url } = this.props;
    return (
      <div>
        <SidebarAside left>
          <If condition={url.pathname !== '/'}>
            <Link href="/">
              <SidebarAnchor href="/">
                <Bold>^</Bold>&nbsp;&nbsp;&nbsp;Back Home
              </SidebarAnchor>
            </Link>
          </If>
        </SidebarAside>
        <SidebarAside right>
          <SidebarButton onClick={() => i18n.changeLanguage(getNextLanguage(i18n.languages[0]))}>
            {t(`common:${getNextLanguage(i18n.languages[0])}`)}
          </SidebarButton>
        </SidebarAside>
      </div>
    );
  }
}

const TranslatedSidebar = translate('common')(Sidebar);

export default TranslatedSidebar;
