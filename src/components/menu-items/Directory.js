import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../Redux/directory/directory.selector'

import MenuItem from '../menu-items/Menu-item';
import './directory.scss';

const Directory = ({ sections }) => (
            <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
            </div>
        );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
