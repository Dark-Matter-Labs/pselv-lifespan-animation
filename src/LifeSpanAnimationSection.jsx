import React, { useContext } from "react";

import { generate } from "shortid";

import sketch1Src from "./sketch";

import { AppDispatchContext, AppStateContext } from "./App/AppStateProvider";
import p5Wrapper from "./P5Wrapper";

const P5Wrapper = p5Wrapper(generate());

export default function Section() {
  const dispatch = useContext(AppDispatchContext);
  const { sketch1L, animationState } = useContext(AppStateContext);

  return (
    <div>
      <div>
        {sketch1L && (
          <P5Wrapper
            dispatch={dispatch}
            sketch={sketch1Src}
            state={{ animationState }}
          />
        )}
      </div>
    </div>
  );
}
