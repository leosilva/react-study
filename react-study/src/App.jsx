import { Alert } from './Alert';

function App() {
   return (
      <div>
         <Alert type="information" heading="Success" closable onClose={() => console.log('closed')}>
            Everything is really good!
         </Alert>
      </div>
   );
}

export default App;
