import React, { useState, useEffect } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';
import { Room, RoomConfig } from 'components/StartButton/type';

const BallHistory = () => {
	const status = useLocation();
	const [maxSort, setMaxSort] = useState(1);
	let [lastNumberHistory, setLastNumberHistory] = useState<any[]>([0]);
	const [numberHistory, setNumberHistory] = useState<any[]>([]);
	const [time, setTime] = useState(10);
	const [control, setControl] = useState<number>(0);
	const [room, setRoom] = useState<Room>();

	async function getState() {
		let roomParams = status.state as RoomConfig;

		setTime(+roomParams.room.frequency);
		setRoom(roomParams.room);
		setMaxSort(Number(roomParams.room.limitPrizeDraw))
	}

	setTimeout(() => {
		if (control < Number(room?.prizeOrder.length)) {
			setControl(control + 1);
		}
	}, time * 1000);
	
	useEffect(() => {
		getState();
		setNumberHistory((numberHistory: any ) => [...numberHistory, room?.prizeOrder[control-1]])

		console.log(lastNumberHistory.length)

		if(lastNumberHistory.length && lastNumberHistory[0] === undefined){
			lastNumberHistory = lastNumberHistory.filter(e => {
				return e !== undefined;
			})
			
			console.log('Aqui ', lastNumberHistory )
		}
		for (let i = 0; i < 6; i++) {
			lastNumberHistory[i] = numberHistory[numberHistory.length - (i+1)];
		}
		
	}, [control]);

	//let result = backSort.splice(0, maxSort);

	return (
		<S.HistoryContainer>
			<>
				<S.Ball>{room?.prizeOrder[control]}</S.Ball>
				{lastNumberHistory.map<React.ReactNode>((n, index) => {
					return <S.BallDraw key={index}>{n}</S.BallDraw>;
				})}
			</>
		</S.HistoryContainer>
	);
};

export default BallHistory;
