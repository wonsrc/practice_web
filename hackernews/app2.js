// let ajax = new XMLHttpRequest();
const containter = document.getElementById('root');
const ajax = new XMLHttpRequest();
const news_url = 'https://api.hnpwa.com/v0/news/1.json';
const content_url = 'https://api.hnpwa.com/v0/item/@id.json'; // @id.json 마킹
const content = document.createElement('div');

ajax.open('GET', news_url, false);    // false - 데이터를 동기적으로 처리하겠다
ajax.send();


const news_feed = JSON.parse(ajax.response);
const ul = document.createElement('ul');    // 태그를 만들어주는 함수

window.addEventListener('hashchange', function() {
    const id = location.hash.substr(1);

    ajax.open('GET', content_url.replace('@id', id), false);
    ajax.send();

    const news_content = JSON.parse(ajax.response);
    const title = document.createElement('h1');

    title.innerHTML = news_content.title;
    content.appendChild(title);
});

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `#${news_feed[i].id}`;
    a.innerHTML = `${news_feed[i].title}, (${news_feed[i].comments_count})`;

    li.appendChild(a);
    ul.appendChild(li);
}
containter.appendChild(ul)  // ul태그를 root태그 하위에 넣어준다.
containter.appendChild(content); 