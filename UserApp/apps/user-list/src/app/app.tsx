// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UserList from './views/userList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './views/userDetail';


export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </ Router>
    </div>
  );
}
export default App;
