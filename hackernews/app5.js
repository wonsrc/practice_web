// let ajax = new XMLHttpRequest();
const containter = document.getElementById('root');
const ajax = new XMLHttpRequest();
const news_url = 'https://api.hnpwa.com/v0/news/1.json';
const content_url = 'https://api.hnpwa.com/v0/item/@id.json'; // @id.json 마킹
const content = document.createElement('div');
const store = {
    current_page: 1,
};

function get_data(url) {
    ajax.open('GET',url, false);    // false - 데이터를 동기적으로 처리하겠다
    ajax.send();

    return JSON.parse(ajax.response);
}


function news_feed() {
    const news_feed = get_data(news_url);
    const news_list = [];
    
    news_list.push('<ul>');
    for(let i = 0; i <10; i++) {
        news_list.push(`
            <li>
                <a href="#${news_feed[i].id}">
                ${news_feed[i].title}, (${news_feed[i].comments_count})
                </a>
            </li>
        `);
    }
    news_list.push('</ul>');
    news_list.push(`
        <div>
            <a href="#">이전 페이지</a>
            <a href="#">다음 페이지</a>
        </div>
    `)
    containter.innerHTML = news_list.join('');

}

function news_detail() {
    const id = location.hash.substr(1);

    const news_content = get_data(content_url.replace('@id', id));

    containter.innerHTML =`
    <h1>${news_content.title}</h1>
    
    <div>
        <a href="#">목록으로</a>
    </div>
    `;
}

function router() {
    const route_path = location.hash;

    if(route_path === '') {
        news_feed();
    } else {
        news_detail();
    }
}

window.addEventListener('hashchange', router);
router();