import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Mill from '../src/assets/imgs/mill.jpg';
import Mineral from '../src/assets/imgs/mineral.jpg';
import Oil from '../src/assets/imgs/oil.png';
import Sustainability from '../src/assets/imgs/sustainability.jpg';

function App() {
  const contents = [
    {
      title: 'Mine-To-Mill-To-Mine Optimization',
      description: [
        'NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.',
      ],
      img: Mill,
    },
    {
      title: 'Sustainability',
      description: [
        'Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.',
        'With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.',
      ],
      img: Sustainability,
    },
    {
      title: 'Mineral Processing',
      description: [
        'NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.',
      ],
      img: Mineral,
    },
    {
      title: 'Oil & Gas',
      description: [
        'Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.',
        'NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.',
      ],
      img: Oil,
    },
  ];
  return (
    <>
      <Header />
      {contents.map((content, idx) => {
        return (
          <Content
            title={content.title}
            description={content.description}
            imgsrc={content.img}
            alignment={idx}
            key={idx}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
