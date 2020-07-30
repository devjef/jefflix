import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria'
import PaginaDeErro from './pages/Erro'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={PaginaDeErro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
); 