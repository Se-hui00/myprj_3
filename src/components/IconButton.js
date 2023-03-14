import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import images from '../images';

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 5px;
`;

const IconButton = ({ type, onPressOut, id, completed }) => {
  const _onPressOut = () => onPressOut(id);

  return (
    <Pressable onPressOut={_onPressOut}>
      <Icon source={type} completed={completed} />
    </Pressable>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

// props속성의 타입과 필수여부체크
IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
  id: PropTypes.string,
  completed: PropTypes.bool,
};

export default IconButton;