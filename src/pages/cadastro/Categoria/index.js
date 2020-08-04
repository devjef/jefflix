import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  function handleChange(infos) {
    setValue(infos.target.getAttribute('name'), infos.target.value);
  };

  useEffect(() => {
    
    const URL_TOP = 'http://localhost:8080/categorias/'
    fetch(URL_TOP)
    .then(async res => {
      const resposta = await res.json();
      setCategorias([...resposta,])
    })

  }, [values.nome]);



  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField label="Nome da Categoria" name="nome" value={values.nome} onChange={handleChange} />

        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />

        <Button>Cadastrar</Button>

        {
          categorias.length === 0 && (
           <div>
            Loading...
           </div>
          )
        }
        

        <ul>
          {categorias.map((categoria, indice) => (

            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
