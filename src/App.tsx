import { gql, useQuery } from '@apollo/client';
import Header from './components/Header';
import Lesson from './components/Lesson';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import Event from './pages/Event';

interface Lesson {
  id: string;
  title: string;
}

function App() {
  return <Event />;
}

export default App;
