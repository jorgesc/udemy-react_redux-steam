import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';
import StreamDelete from './streams/StreamDelete.js';
import Header from './Header.js';

export default props => {
  return (
    <div className="ui container">
      <HashRouter>
        <div>
          <Header />
          <div>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </div>
      </HashRouter>
    </div>
  );
};
