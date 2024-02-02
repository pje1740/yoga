import React, { useEffect, useState } from "react";
import PoseCard from "@/app/yoga/components/PoseCard";

import { POSES } from "@/app/yoga/constants/poses";

interface PoseJournal {
  poseCode: string;
  journal: string;
}

const PoseCards = () => {
  const [journals, setJournals] = useState<PoseJournal[]>(
    POSES.ASHTANGA_PRIMARY.map((pose) => {
      return { poseCode: pose.nameCode, journal: "" };
    })
  );

  const updateJournal = (journalIndex: number, journal: string) => {
    const newJournals = [...journals];
    newJournals[journalIndex].journal = journal;

    setJournals(newJournals);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Yoga Journal</h1>
      {POSES.ASHTANGA_PRIMARY.map((pose, i) => (
        <PoseCard
          key={pose.nameCode}
          pose={pose}
          journal={journals[i].journal}
          onChangeJournal={(journal) => {
            updateJournal(i, journal);
          }}
        />
      ))}
    </div>
  );
};

export default PoseCards;
