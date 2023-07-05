import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        "Servicio de gestión de archivos eficiente y seguro."
      </>
    ),
  },
  {
    title: 'Plataforma de almacenamiento y descarga de archivos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        "Descarga y sube archivos fácilmente con nuestra plataforma de almacenamiento".
      </>
    ),
  },
  {
    title: 'Solución de manejo de archivos basada en NestJS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        "Una solución completa para el manejo de archivos desarrollada con NestJS."
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
