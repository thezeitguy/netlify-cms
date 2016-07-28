import React, { PropTypes } from 'react';

export default function StringPreview({ value }) {
  return <h2>{value}</h2>;
}

StringPreview.propTypes = {
  value: PropTypes.node,
};
