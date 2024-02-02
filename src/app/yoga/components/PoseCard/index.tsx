import React from "react";
import { Label, TextField, TextArea, Input } from "react-aria-components";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { PoseCode } from "../../types";

interface PoseCardProps {
  pose: PoseCode;
  journal: string;
  onChangeJournal: (value: string) => void;
  onUploadImages?: (images: File[]) => void;
}

const PoseCard = ({
  pose,
  journal,
  onChangeJournal,
  onUploadImages,
}: PoseCardProps) => {
  const { t } = useTranslation("ashtanga_primary");

  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChangeJournal(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto md:p-2">
      <div>
        <details className="border-solid border border-gray-200 rounded-lg md:p-4">
          <summary className="flex items-center gap-4 cursor-pointer">
            <Image
              alt="Pose 1"
              className="aspect-square object-cover rounded-lg"
              height={60}
              src="/yoga/posture_placeholder.png"
              width={60}
            />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{t(pose.nameCode)}</h2>
              {pose.descriptionCode && (
                <p className="text-xs">{t(pose.descriptionCode)}</p>
              )}
            </div>
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </summary>
          <div className="grid gap-4 mt-6">
            <TextField className="grid gap-1.5" aria-label="journal">
              <TextArea
                className="border rounded p-2 w-full h-24"
                placeholder="수련 일지 기록"
                value={journal}
                onChange={handleJournalChange}
              />
            </TextField>
            <div className="grid gap-1.5">
              <Label htmlFor="image-1">수련 사진</Label>
              <Input id="image-1" type="file" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              <Image
                alt="Uploaded Image 1"
                className="aspect-square object-cover rounded-lg"
                height={100}
                src="/yoga/posture_placeholder.png"
                width={100}
              />
              <Image
                alt="Uploaded Image 2"
                className="aspect-square object-cover rounded-lg"
                height={100}
                src="/yoga/posture_placeholder.png"
                width={100}
              />
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default PoseCard;
