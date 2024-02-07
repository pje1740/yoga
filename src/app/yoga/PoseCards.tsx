import React, { useEffect, useState } from "react";
import PoseCard from "@/app/yoga/components/PoseCard";
import { PoseJournal } from "@/app/yoga/types";

import { POSES } from "@/app/yoga/constants/poses";

const PoseCards = () => {
  const [journals, setJournals] = useState<PoseJournal[]>(
    POSES.ASHTANGA_PRIMARY.map((pose) => {
      return { poseCode: pose.nameCode, text: "", images: [] };
    })
  );

  // TODO: reducer로 수정
  const updateJournal = (journalIndex: number, journal: string) => {
    const newJournals = [...journals];
    newJournals[journalIndex].text = journal;

    setJournals(newJournals);
  };

  const updateImages = (journalIndex: number, images: File[]) => {
    const newJournals = [...journals];
    newJournals[journalIndex].images = [
      ...newJournals[journalIndex].images,
      ...images,
    ];

    setJournals(newJournals);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Yoga Journal</h1>
      {POSES.ASHTANGA_PRIMARY.map((pose, i) => (
        <PoseCard
          key={pose.nameCode}
          pose={pose}
          journal={journals[i]}
          onChangeJournal={(journal) => {
            updateJournal(i, journal);
          }}
          onUploadImages={(images) => {
            updateImages(i, images);
          }}
        />
      ))}
    </div>
  );
};

export default PoseCards;
