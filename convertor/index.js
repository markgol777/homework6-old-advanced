let bank;
let check = true;

document.querySelector('.btn-change1').addEventListener('click', () => {
    document.querySelector('.convert1-hiden').style = 'display: flex;';
    document.querySelector('.convert1').style = 'display: none;';
    check = false;
})

document.querySelector('.btn-change1-back').addEventListener('click', () => {
    document.querySelector('.convert1-hiden').style = 'display: none;';
    document.querySelector('.convert1').style = 'display: flex;';
    check = true;
})

document.querySelector('.btn-change2').addEventListener('click', () => {
    document.querySelector('.convert2-hiden').style = 'display: flex;';
    document.querySelector('.convert2').style = 'display: none;';
    check = false;
})


document.querySelector('.btn-change2-back').addEventListener('click', () => {
    document.querySelector('.convert2-hiden').style = 'display: none;';
    document.querySelector('.convert2').style = 'display: flex;';
    check = true;
})


document.querySelector('.btn-change3').addEventListener('click', () => {
    document.querySelector('.convert3-hiden').style = 'display: flex;';
    document.querySelector('.convert3').style = 'display: none;';
    check = false;
})


document.querySelector('.btn-change3-back').addEventListener('click', () => {
    document.querySelector('.convert3-hiden').style = 'display: none;';
    document.querySelector('.convert3').style = 'display: flex;';
    check = true;
})

for (let i = 0; i < document.querySelectorAll('.input').length; i++) {
    document.querySelectorAll('.input')[i].addEventListener('input', () => {
        if (document.querySelectorAll('.input')[i].value !== '' && isNaN(document.querySelectorAll('.input')[i].value) !== true && document.querySelectorAll('.input')[i].value > 0) {
            document.querySelectorAll('.input')[i].nextElementSibling.nextElementSibling.disabled = false;
        } else {
            document.querySelectorAll('.input')[i].nextElementSibling.nextElementSibling.disabled = true;
        }
    })
}


for (let i = 0; i < document.querySelectorAll('.convert-btn1').length; i++) {
    document.querySelectorAll('.convert-btn1')[i].addEventListener('click', async (e) => {
        console.log(e.target.parentElement.parentElement.className);
        await fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11`)
            .then((res) => res.json())
            .then((data) => {
                bank = data;
            });

        await bank.forEach(element => {
                if (check) {
                    if (document.querySelector(`.ccy-${e.target.parentElement.parentElement.className}`).innerText === element.ccy) {
                        document.querySelector(`.${e.target.parentElement.parentElement.className}-${element.ccy}-INPUT2`).value = (document.querySelector(`.${element.ccy}-INPUT1`).value / element.sale).toLocaleString('en-US');
                    }
                } else {
                    if (document.querySelector(`.ccy-${e.target.parentElement.parentElement.className}`).innerText === element.ccy) {
                        document.querySelector(`.${e.target.parentElement.parentElement.className}-${element.ccy}-INPUT4`).value = (document.querySelector(`.${e.target.parentElement.parentElement.className}-${element.ccy}-INPUT3`).value * element.buy).toLocaleString('en-US');
                    }
                }
        });
    })
}