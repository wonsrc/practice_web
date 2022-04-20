// let ajax = new XMLHttpRequest();
const containter = document.getElementById('root');
const ajax = new XMLHttpRequest();
const news_url = 'https://api.hnpwa.com/v0/news/1.json';
const content_url = 'https://api.hnpwa.com/v0/item/@id.json'; // @id.json 마킹
const content = document.createElement('div');

function get_data(url) {
    ajax.open('GET',url, false);    // false - 데이터를 동기적으로 처리하겠다
    ajax.send();

    return JSON.parse(ajax.response);
}

const news_feed = get_data(news_url);
const ul = document.createElement('ul');    // 태그를 만들어주는 함수

window.addEventListener('hashchange', function() {
    const id = location.hash.substr(1);

    const news_content = get_data(content_url.replace('@id', id));
    const title = document.createElement('h1');

    title.innerHTML = news_content.title;
    content.appendChild(title);
});

for(let i = 0; i < 10; i++) {
    const div = document.createElement('div');

    div.innerHTML = `
        <li>
            <a href="#${news_feed[i].id}">
            ${news_feed[i].title}, (${news_feed[i].comments_count})
            </a>
        </li>
    `;

    ul.appendChild(div.firstElementChild);
}
containter.appendChild(ul)  // ul태그를 root태그 하위에 넣어준다.
containter.appendChild(content); 