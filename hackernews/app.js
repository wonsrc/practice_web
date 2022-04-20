// let ajax = new XMLHttpRequest();
const ajax = new XMLHttpRequest();
const news_url = 'https://api.hnpwa.com/v0/news/1.json';

ajax.open('GET', news_url, false);    // false - 데이터를 동기적으로 처리하겠다
ajax.send();


const news_feed = JSON.parse(ajax.response);
const ul = document.createElement('ul');    // 태그를 만들어주는 함수

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    
    li.innerHTML =news_feed[i].title;

    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul)  // ul태그를 root태그 하위에 넣어준다.