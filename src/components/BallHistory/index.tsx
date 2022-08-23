import React, { useState } from "react";
import * as S from "./style";

const BallHistory = () => {
	const maxSort = 10;
	const numberHistory: number[] = [1, 2, 3, 4, 5, 6];

	const numberBackSort: number[] = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];
	const tempBackEnd = 1;
	const [time, setTime] = useState(tempBackEnd);
	const [control, setControl] = useState<number>(0);

	let result = numberBackSort.splice(0, maxSort);
	/*  console.log(result); */

	setTimeout(() => {
		setControl(control + 1);
	}, time * 1000);

	return (
		<S.HistoryContainer>
			<>
				<S.Ball>{result[control]}</S.Ball>
				{numberHistory.map<React.ReactNode>((n, index) => {
					return <S.BallDraw key={index}>{n}</S.BallDraw>;
				})}
			</>
		</S.HistoryContainer>
	);
};

export default BallHistory;
