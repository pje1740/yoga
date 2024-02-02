import EN_POSES from '@/i18n/locales/en/ashtanga_primary.json'
import { PoseCode } from '@/app/yoga/types'

const ASHTANGA_PRIMARY: PoseCode[] = []

// change to PoseCode type
Object.keys(EN_POSES).map((code) => {
  if (code.match(/pose_\d+$/)) {
    const index = Number(code.match(/\d+/)) - 1
    if (!ASHTANGA_PRIMARY[index]) {
      ASHTANGA_PRIMARY[index] = { nameCode: code }
    } else {
      ASHTANGA_PRIMARY[index].nameCode = code
    }
  } else {
    const index = Number(code.match(/\d+/)) - 1
    ASHTANGA_PRIMARY[index].descriptionCode = code
  }
})

export const POSES = {
  ASHTANGA_PRIMARY,
}
