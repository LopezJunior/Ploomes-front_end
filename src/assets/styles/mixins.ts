import { css } from "styled-components";
import { constants } from "./constants";
import { colors } from "./colors";

const modalStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  color: ${colors.textColorRed};
`;

const buttonSmall = () => css`
  width: 180px;
  height: 37px;
  font-size: 30px;
  border-radius: 3px;
  font-weight: 400;
  font-family: ${constants.bodyFontFamily};
  border: none;
`;

export const mixins = {
  modalStyle,
  buttonSmall,
};
