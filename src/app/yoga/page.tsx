'use client'

import React from 'react'
import PoseCards from '@/app/yoga/PoseCards'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'

const Page = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <PoseCards />
    </I18nextProvider>
  )
}

export default Page
