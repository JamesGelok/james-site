import BigText from "../../atoms/BigText";
import Flex from "../../atoms/Flex";
import FullScreenFlex from "../../templates/FullScreenFlex";
import Message from "../../atoms/Message";
import React from "react";

export default function MessageListPage({ ...props }) {
  return (
    <FullScreenFlex {...props}>
      <Flex style={{ background: "pink" }}>
        <Flex margin="5%">
          <Message lines="howdy yall" />
        </Flex>
      </Flex>

      <Flex style={{ background: "purple" }}>
        <Flex>
          <BigText>howdyy</BigText>
        </Flex>
        <Flex>
          <BigText>asdfff</BigText>
        </Flex>
        <Flex>
          <BigText>aaaaaa</BigText>
        </Flex>
        <Flex>
          <BigText>aaaaaa</BigText>
        </Flex>
      </Flex>
    </FullScreenFlex>
  );
}
