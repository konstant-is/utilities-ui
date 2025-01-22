'use client'

import { FeatureProps } from './types'

export const FeatureClient: React.FC<FeatureProps> = ({ feature }) => {
  const result = `${feature}`
  return (
    <div>
      <h3>Feature Client</h3>
      <p>
        This is a client-side feature component. It can interact with browser-specific APIs or
        manage client-only state.
      </p>
      {result}
    </div>
  )
}
