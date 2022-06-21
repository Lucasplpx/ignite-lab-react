import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div>
      <ul>
        {data?.lessons.map((lesson) => (
          <li key={lesson.title}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
