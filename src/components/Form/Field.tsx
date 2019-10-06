import * as React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  padding-bottom: 5px;
`;

interface FieldProps {
  title?: string;
}

const Field: React.FunctionComponent<FieldProps> = props => {
  return (
    <Label>
      {props.title && <Title>{props.title}</Title>}
      {props.children}
    </Label>
  );
};

export default Field;
