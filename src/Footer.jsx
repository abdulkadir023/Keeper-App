import React from 'react';

const date = new Date();    
const year = date.getFullYear();
console.log(year);

function Footer(){

    return (
        <div> 
                
    <footer>
        <p>Copyright &#169; {year} </p>
    </footer>

        </div>
    );
}

export default Footer;