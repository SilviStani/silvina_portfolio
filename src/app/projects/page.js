import NavBar from '../../../Components/NavBar/NavBar';
import Portfolio from '../../../Components/Portfolio/Portfolio';

export const metadata = {
  title: 'Projects | Silvina Dev',
  description: 'A collection of web development and QA projects by Silvina Staniszewski.',
};

export default function ProjectsPage() {
  return (
    <main>
      <NavBar />
      <Portfolio />
    </main>
  );
}
