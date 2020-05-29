import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { triggerBugged } from './store/actions/bug.actions';
import './Home.css';

const socket = io.connect("http://localhost:3001");

export default function Home() {
  const { numBugs, buggerNames } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    socket.on('bugged', name => dispatch(triggerBugged(name)));
  }, []);

  React.useEffect(() => {
    if(buggerNames.length){
      toast(`${buggerNames[buggerNames.length - 1]} bugged you`);
    }
  }, [buggerNames]);

  return (
      <div className="Home">
        <header className="Home-header">
          <h1>Welcome Scott</h1>
          <p>
            Number of times bugged: {numBugs}
          </p>
          <ToastContainer/>
        </header>
      </div>
  );
}