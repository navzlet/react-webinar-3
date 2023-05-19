import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from './components/cart';


/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
*/
function App({store}) {
  const [isCartOpened, setIsCartOpened] = useState(false)
  const list = store.getState().list;
  const cart = store.getState().cart

  const callbacks = {
    onAddItem: useCallback((item) => {
      store.addCartItem(item);
    }, [store]),

    showCart: (() => {
      isCartOpened ? setIsCartOpened(false) : setIsCartOpened(true)
    })
  }

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS'/>
      <Controls onShowCart={callbacks.showCart} cart={cart}/>
      <List list={list}
            onAddItem={callbacks.onAddItem}/>
      {isCartOpened ? <Cart showCart={callbacks.showCart} /> : null}
    </PageLayout>
  );
}

export default App;
