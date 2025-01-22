import { PropsWithChildren } from 'react'

export type FeatureProps = PropsWithChildren<{
  name: string
  description: string
  icon?: string
  codeExample?: string // Code snippet for demonstration
  version?: string // Version information
  category?: string // Feature category
  feature: unknown
  useClientComponent?: boolean
}>
