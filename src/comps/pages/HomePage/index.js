import BigText from "../../atoms/BigText";
import Flex from "../../atoms/Flex";
import FullHeight from "../../atoms/FullHeight";
import FullScreenFlex from "../../templates/FullScreenFlex";
import Message from "../../atoms/Message";
import React from "react";
import useWindowSize from "../../useWindowSize";

export default function MessageListPage({ ...props }) {
  const [w, h] = useWindowSize();

  return (
    <FullScreenFlex {...props}>
      <FullHeight style={{ backgroundColor: "black" }}>
        <Flex margin="5%" width="80%" color="red">
          <p style={{ color: "white", fontSize: "100%" }}>
            Let's make <br /> compelling experiences
          </p>
        </Flex>
      </FullHeight>

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
