import React, {useState, useEffect} from 'react';

export default () => {


const[theme, setTheme] = useState('light');

useEffect(
    ()=>{
        const localTheme=window.localStorage.getItem('theme');

        if(localTheme){
            setTheme(localTheme);
        }
    }, []
);

const changeTheme = () =>{

    if(theme==='dark'){

        window.localStorage.setItem('theme', 'light');
        setTheme('light');
    }
    else{
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');
    }
}






return [theme, changeTheme];



};
