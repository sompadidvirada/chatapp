import "./App.css";
import List from "./component/list/List";
import Chat from "./component/chat/Chat";
import Detail from "./component/detail/Detail";
import Login from "./component/login/Login";

function App() {
  const user = false;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
