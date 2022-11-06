import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Notification = styled.p`
  font-style: 24px;
  font-weight: bold;
`;

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};
