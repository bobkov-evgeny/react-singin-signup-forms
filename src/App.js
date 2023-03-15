import {Input} from "./components/Input";

function App() {

  return (
    <div className="App" style={{padding: 10}}>
      <Input
        label={'Full name'}
        value={''}
        placeholder={'Your name'}
        description={'Please enter your full name'}
        disabled
      />
    </div>
  );
}

export default App;
