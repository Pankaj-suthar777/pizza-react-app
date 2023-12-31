import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="g grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader></Loader>}

      <Header></Header>

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl ">
          <Outlet></Outlet>
        </main>
      </div>

      <CartOverview></CartOverview>
    </div>
  );
}
