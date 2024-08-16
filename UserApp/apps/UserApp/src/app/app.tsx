// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
const RemoteUserList = React.lazy(() => import('user-list/Module'));
const WeatherCharts = React.lazy(()=>import('weather-app/Module'))  
export function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <React.Suspense fallback={<div>Loading Remote Component...</div>}>
       <WeatherCharts />
      </React.Suspense>

      <React.Suspense fallback={<div>Loading Remote Component...</div>}>
       <RemoteUserList />
      </React.Suspense>
    </div>
  );
}

export default App;
