import styled from "styled-components"
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { AntButton } from "../../atoms/button/AntButton";

export const ConnectedButtons = (props) => {
    const { first, second } = props
    return (
        <SContainer>
          <SButtonWrapper>
          <PrimaryButton>{ first }</PrimaryButton>
          </SButtonWrapper>
          <SButtonWrapper>
          <AntButton>{ second }</AntButton>
          </SButtonWrapper>
        </SContainer>
    )
}

const SContainer = styled.div`
  display: flex;
  align-items: left;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;