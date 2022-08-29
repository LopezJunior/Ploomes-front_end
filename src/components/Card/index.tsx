import * as S from "./style";

import { RoomContext } from "Contexts/room";
import { useContext, useState } from "react";

const Card = () => {
  const [numbersSort, setNumberSort] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ]);
  const [isSelect, setIsSelect] = useState(() => numbersSort.map(() => false));
  //const [numberList, setNumberList] = useState<any[]>([]);
  const context = useContext(RoomContext);

  return (
    <>
      <S.Content>
        {context?.getCards()!.map<React.ReactNode>( (card, cardIndex) => (
          <S.Parent key={cardIndex}>
            <S.Title>
              <S.TitleB>b</S.TitleB>
              <S.TitleI>i</S.TitleI>
              <S.TitleN>n</S.TitleN>
              <S.TitleG>g</S.TitleG>
              <S.TitleO>o</S.TitleO>
            </S.Title>
            <S.Ball>
              {card.vetor.map<React.ReactNode>((n: any, index) => {
                return (
                  <div
                    key={index}
                    className={`Number${index + 1}`}
                    onClick={() => {
                      setIsSelect(
                        isSelect.map((bool, j) => {
                          if (j === index) {
                            // array de numeros selecionados ainda não inicializado
                            if ( !card.selecteds ) {
                              card.selecteds = [];
                            }
                            const isDuplicate = ( 
                                     card.selecteds.findIndex( (num) => num === n ) 
                                    );
                            if (isDuplicate === -1) {
                              //setNumberList((numberList) => [...numberList, n]);
                              //card.addSelected(n);
                              card.selecteds.push(n);
                            }
                            return true;
                          } else {
                            return bool;
                          }
                        })
                      );
                    }}
                  >
                    <div className={`${isSelect[index] ? "selected" : ""}`}>
                      {n}
                      {/*console.log(numberList)*/}
                    </div>
                  </div>
                );
              })}
            </S.Ball>            
          </S.Parent>
          ))
        }
      </S.Content>
    </>
  );
};

export default Card;
