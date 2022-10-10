
import {useState, useEffect} from 'react';


import Directory from '../../components/directory/directory.component';

const MySQLAPI = () => {

  const [categories, setCategories] = useState([]); // [value, setValue]

  useEffect(()=>{
    fetch('http://localhost:3001/categories')
    .then((response)=> { return response.json();})
    .then((category=> { setCategories(category);}));
  },[])

  return (
      <Directory categories={categories} />
  );
}

export default MySQLAPI;
