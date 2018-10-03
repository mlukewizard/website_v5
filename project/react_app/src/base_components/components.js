import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme_constants} from "../global_constants";

export const UnderlineUnderHoverLink = styled(Link)`
  color: ${theme_constants.text_color};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
