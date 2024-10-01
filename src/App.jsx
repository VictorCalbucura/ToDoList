import './App.css'
import '@mantine/core/styles.css';
import Input from './components/Input';
import List from './components/List';
import { MantineProvider } from '@mantine/core';
import TaskApp from './components/TaskApp';

export default function App() {
  return (
    <MantineProvider>
      <>
        <TaskApp/>
      </>
    </MantineProvider>
  );
}