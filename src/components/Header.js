import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import ActionLink from './ActionLink';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header outer">
              <div className="inner">
                <div className="site-header-inside">
                  <div className="site-branding">
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null) && (
                    <p className="site-logo">
                      <Link to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img', null))}
                        alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_alt', null)} /></Link>
                    </p>
                    )}
                    {(_.get(this.props, 'pageContext.frontmatter.template', null) === 'home') ? (
                    <h1 className="site-title"><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link></h1>
                    ) : 
                    <p className="site-title"><Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link></p>
                    }
                  </div>
                  {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (<React.Fragment>
                  <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Menu</span><span className="icon-menu"
                    aria-hidden="true" /></button>

                  </React.Fragment>)}
                </div>
              </div>
            </header>
        );
    }
}
