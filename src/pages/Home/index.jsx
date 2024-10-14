import { Header, Footer, Navbar } from '@/layout';
import { WorkShowCase } from '@/pages';
import { Button } from '@/components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/slices/counterSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="text-fuchsia-100 bg-gray-500 flex flex-col">
      <Navbar />
      <Header />
      <WorkShowCase />
      {/* <br />
      Home Page
      <Button
        text={'Go About Page (Control Redux-Toolkit)'}
        onClick={() => navigate('/about')}
      />
      <div className="flex flex-col">
        <h2>Counter</h2>
        <p>Value: {counterValue}</p>

        <Button text={'Increment'} onClick={() => dispatch(increment())} />

        <Button text={'Decrement'} onClick={() => dispatch(decrement())} />
      </div>
      <Footer /> */}
    </div>
  );
};

export default Home;
