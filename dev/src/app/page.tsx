import styles from './page.module.css'
import { Feature } from '@/components/feature'
import { canUseDOM } from '@konstant/utilities-ui'

export default function Home() {
  const features = [
    {
      name: 'Can Use DOM',
      description: 'Checks if the code is executed on the client side.',
      icon: '🌐',
      codeExample: `
import { canUseDOM } from '@konstant/utilities-ui';

if (canUseDOM) {
  console.log("Running on the client!");
}
      `,
      version: '1.0.0',
      category: 'Utilities',
      useClientComponent: true,
    },
    {
      name: 'Fast Rendering',
      description: 'Optimized React components for faster UI updates.',
      icon: '⚡',
      version: '1.2.0',
      category: 'Performance',
    },
  ]

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {features.map((feature, index) => (
          <Feature
            key={index}
            name={feature.name}
            description={feature.description}
            icon={feature.icon}
            codeExample={feature.codeExample}
            version={feature.version}
            category={feature.category}
            feature={canUseDOM}
            useClientComponent={feature.useClientComponent}
          />
        ))}
      </main>
    </div>
  )
}
