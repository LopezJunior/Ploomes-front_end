import Api from "./api";
import swal from "sweetalert";
import { ProfilesTypes } from "types/interfaces";
import { StringLiteralType } from "typescript";

export interface RoomServicesStartParams {
    maxCards: number, 
    limitPrizeDraw: number, 
    limitRecord?: number, 
    limitUsers?: number, 
    price?: number, 
    frequency: number, 
}

export interface RoomServicesCheckBingoParams {
  id: string, 
  vetor: number[], 
  markings: number[], 
}

export const RoomServices = {
  start: async (params: RoomServicesStartParams  )  => {
    
    try {
      const _data = {
        maxCards: params.maxCards || 3, 
        limitPrizeDraw: params.limitPrizeDraw || 75, 
        limitRecord: params.limitRecord || 5, 
        limitUsers: params.limitUsers || 3, 
        price: params.price || 10, 
        frequency: params.frequency || 7 
      };

      const res = await Api.post( "/room", _data,  );

      return res.data;

    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
      return error;
    }
  },

  checkBingo: async (idRoom: string, card: RoomServicesCheckBingoParams )  => {
    try {
      const _data = {
        id: card.id, 
        vetor: card.vetor, 
        markings: card.markings, 
      };

      const res = await Api.post( `/room/${idRoom}/checkBingo`, _data,  );

      return res.data;

    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
      return error;
    }
  },  

  getRoom: async (id: string) => {
    try {
      const res = await Api.get(`/room/${id}`, { method: "GET" });

      return res.data;

    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
      return error;
    }
  },

};
