import React, { useContext } from "react";

import { generate } from "shortid";

import sketch1Src from "./sketch";
import sketch2Src from "./endSketch";

import { AppDispatchContext, AppStateContext } from "./App/AppStateProvider";
import p5Wrapper from "./P5Wrapper";

const P5Wrapper = p5Wrapper(generate());

export default function Section() {
  const dispatch = useContext(AppDispatchContext);
  const { sketch1L, sketch2L, animationState, endAnimationState } = useContext(AppStateContext);

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
      {/* <div>
        {sketch2L && (
          <P5Wrapper
            dispatch={dispatch}
            sketch={sketch2Src}
            state={{ endAnimationState }}
          />
        )}
      </div> */}
    </div>
  );
}
