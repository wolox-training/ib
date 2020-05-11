import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {State} from 'src/app/interfaces/state';
import actions from 'src/redux/Books/actions';
import Library from './components/Library';

function Books({navigation}: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBooks());
  }, [dispatch]);

  const libraryData = useSelector((state: State) => state.library);

  return <Library isLoading={libraryData.loading} navigation={navigation} books={libraryData.books} />;
}

export default Books;
