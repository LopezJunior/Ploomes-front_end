import React, { useState } from "react";
import * as S from "./style";

const BallHistory = () => {
  const numberHistory: number[] = [1, 2, 3, 4, 5, 6];
  const numberSort: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  const [control, setControl] = useState<number>(0);
  setTimeout(() => {
    setControl(control + 1);
  }, 5000);

  return (
    <S.HistoryContainer>
      <>
        <S.Ball>{numberSort[control]}</S.Ball>
        {numberHistory.map<React.ReactNode>((n, index) => {
          return <S.BallDraw key={index}>{n}</S.BallDraw>;
        })}
      </>
    </S.HistoryContainer>
  );
};

export default BallHistory;
