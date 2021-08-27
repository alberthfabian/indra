import React, {useState} from 'react';
import image from '../../assents/img/eliminate.svg';
import { Table, Th, Td, Input, DivInput, InputNumber } from './style';
import { data } from './data';

const Main = () => {

  const [value, setValue] = useState(data);
  const dataInfo = [];

  const search = (e) => {
    for(let i=0; i<data.length; i++){
      dataInfo.push(Object.values(data[i])[0]);
    }
    if(dataInfo.includes(parseInt(e.target.value))){
      for(let i=0; i<data.length; i++) {
        if(data[i].id === parseInt(e.target.value))
        setValue([data[i]])
      }
    } else {
      setValue(data);
    }
  }

  return (
    <div>
      <DivInput>
        <div>
          <Input type="text" placeholder='Busqueda' onChange={(e) => search(e)} />
          <label htmlFor='number'>
            Ver
            <InputNumber
              type="number" 
              id='number'
              min='0'
              max='100' 
            />
          </label>
        </div>
      </DivInput>
      <Table>
        <tbody>
          <tr>
            <Th>Id Festivo</Th>
            <Th>Día Festivo</Th>
            <Th>Descripción</Th>
            <Th>Id Proceso</Th>
            <Th>Acción</Th>
          </tr>
        </tbody>
        <tfoot>
          {value?.map(info => (
            <tr key={info.id}>
              <Td>{info.id}</Td>
              <Td>{info.date}</Td>
              <Td>{info.description}</Td>
              <Td>{info.process}</Td>
              <Td><img src={image} alt='Eliminate' /></Td>
            </tr>
          ))}
        </tfoot>
      </Table>
    </div>
  );
};

export default Main;