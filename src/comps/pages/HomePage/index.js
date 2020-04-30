import BigText from "../../atoms/BigText";
import Flex from "../../atoms/Flex";
import FullHeight from "../../atoms/FullHeight";
import FullScreenFlex from "../../templates/FullScreenFlex";
import JumboTron from "../../organisms/JumboTron/index";
import Message from "../../atoms/Message";
import React from "react";
import colors from "../../colors";
import useWindowSize from "../../useWindowSize";

export default function MessageListPage({ ...props }) {
  return (
    <FullScreenFlex {...props}>
      <JumboTron />
      <FullHeight style={{ background: colors.secondary }}>
        <Flex>
          <BigText>F</BigText>
        </Flex>
      </FullHeight>
    </FullScreenFlex>
  );
}
