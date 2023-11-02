import axios from 'axios';
const BASE_URL =  "https://youtube138.p.rapidapi.com";
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '3ade2d2c17msh9c7064e4da99771p17f558jsn24ef571a15ab',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export  const fetchDataFromApi =  async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  };
 /*  import axios from "axios";
  const appi =()=>{
    const BASE_URL =  "https://youtube138.p.rapidapi.com";
    const options = {
      method: 'GET',
      url: 'https://youtube138.p.rapidapi.com/auto-complete/',
      params: {
        q: 'desp',
        hl: 'en',
        gl: 'US'
      },
      headers: {
        'X-RapidAPI-Key': '3ade2d2c17msh9c7064e4da99771p17f558jsn24ef571a15ab',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    };
    axios(BASE_URL,options)
    .then((res)=>{console.log(res)});    
  }

  appi(); */