export interface PoseCode {
  nameCode: string
  descriptionCode?: string
}

export interface PoseJournal {
  poseCode: string;
  text: string;
  images: File[];
}