import { CORE_CONCEPTS } from './data';
import reactConceptsImage from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt='' />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  const keyword = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactConceptsImage} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {keyword} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Core Concepts</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            ></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
