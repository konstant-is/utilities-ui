import styles from './feature.module.css'
import { FeatureClient } from './feature.client'
import { FeatureProps } from './types'

export const Feature: React.FC<FeatureProps> = (props) => {
  const { name, description, icon, codeExample, version, category, useClientComponent, children } =
    props

  return (
    <div className={styles.feature}>
      <header className={styles.featureHeader}>
        <div className={styles.featureTitle}>
          {icon && <span className={styles.featureIcon}>{icon}</span>}
          <h3>{name}</h3>
        </div>
        {version && <span className={styles.featureVersion}>v{version}</span>}
        {category && <span className={styles.featureCategory}>{category}</span>}
      </header>

      <p className={styles.featureDescription}>{description}</p>

      <div className={styles.featureDetails}>
        {/* Render the client-only component if enabled */}
        {useClientComponent && <FeatureClient {...props} />}
        {/* Render code example */}
        {codeExample && (
          <div className={styles.codeExample}>
            <pre>
              <code>{codeExample}</code>
            </pre>
          </div>
        )}
        {/* Render additional children */}
        {children && <div className={styles.additionalContent}>{children}</div>}
      </div>
    </div>
  )
}
