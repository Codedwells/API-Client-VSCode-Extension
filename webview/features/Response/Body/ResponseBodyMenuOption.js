import React from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import SelectWrapper from "../../../components/SelectWrapper";
import {
  RESPONSE_BODY_VIEW_FORMAT_OPTIONS,
  VIEW_FORMAT,
} from "../../../constants/response";
import useResponseOptionStore from "../../../store/useResponseOptionStore";

const ResponseBodyViewOption = () => {
  const {
    responseBodyOption,
    responseBodyViewFormat,
    handleResponseBodyViewFormatChange,
  } = useResponseOptionStore(
    (state) => ({
      responseBodyOption: state.responseBodyOption,
      responseBodyViewFormat: state.responseBodyViewFormat,
      handleResponseBodyViewFormatChange:
        state.handleResponseBodyViewFormatChange,
    }),
    shallow,
  );

  return (
    <>
      {responseBodyOption === "Pretty" && (
        <SelectWrapper>
          <SelectOptionWrapper
            onChange={(event) =>
              handleResponseBodyViewFormatChange(event.target.value)
            }
            value={responseBodyViewFormat}
          >
            {RESPONSE_BODY_VIEW_FORMAT_OPTIONS.map((option, index) => (
              <option key={VIEW_FORMAT + index} value={option}>
                {option}
              </option>
            ))}
          </SelectOptionWrapper>
        </SelectWrapper>
      )}
    </>
  );
};

const SelectOptionWrapper = styled.select`
  width: 7rem;
  height: 2.3rem;
  margin-left: 1rem;
  padding-left: 0.7rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
`;

export default ResponseBodyViewOption;