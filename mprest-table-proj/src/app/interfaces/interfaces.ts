
export interface TableDataIfc {
  id: number;
  title: string;
  albumId: number;
  imgPath: string;
  thumbImgPath: string;
}

export interface LineDataIfc {
  id: number;
  text: string;
  albumId: number;
}

export interface LineToDeleteIfc {
  id: number;
  albumId: number;
}
