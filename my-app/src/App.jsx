import "./App.css";
import List from "./component/list/List";
import Chat from "./component/chat/Chat";
import Detail from "./component/detail/Detail";
import Login from "./component/login/Login";
import Notification from "./component/notification/Notification";

function App() {
  const user = true;

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
      <Notification/>
    </div>
  );
}

export default App;
