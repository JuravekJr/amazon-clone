import React from 'react';
import "./LanguageBox.css"
import language from '../../images/language.png'

function LanguageBox() {
    return (
        <div className='languageBox'>
            <p>Cahnge Language <a href="">Learn more</a></p>
            <h4><input type="radio" name='languageInp'/> English - EN</h4>
            <h5><input type="radio" name='languageInp'/> Español - ES</h5>
            <h5><input type="radio" name='languageInp'/> 한국어 - ZH</h5>
            <h5><input type="radio" name='languageInp'/> Português - PT</h5>
            <h5><input type="radio" name='languageInp'/> 한국어 - KO</h5>
            <h5><input type="radio" name='languageInp'/> Русский - РУ</h5>
            <h5><input type="radio" name='languageInp'/> गोंयची कोंकणी - IH</h5>
            <h5><input type="radio" name='languageInp'/> Lingua Franca Nova - LI</h5>
            <h5><input type="radio" name='languageInp'/> Sranantongo - SR</h5>
            <p>Change currency <a href="">Learn more</a></p>
            <h5>$ -USD -US Dollar <a href="">Change</a></h5>
            <h4><img src={language} alt="" /> You are shopping on Amazon.com</h4>
            <li><a href="">Change country/region.</a></li>
        </div>
    );
}

export default LanguageBox;