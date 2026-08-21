"use strict";
console.log('動いた！');
const title = document.querySelector('#site-title');
if (title instanceof HTMLElement) {
    title.textContent = '四毒チキンだよ！';
    title.style.color = 'pink';
}
;
const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
    btn.addEventListener('click', () => {
        message.textContent = 'Thank you for your opinion!';
    });
}
let count = 0;
const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
if (likeBtn && likeCount) {
    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = String(count);
        if (count === 10) {
            likeCount.textContent = '10 iine! Thank you for your support!';
        }
    });
}
const items = [
    { title: 'チキン ワン', category: '鶏', description: 'チェック 1' },
    { title: 'チキン ツー', category: '鶏', description: 'チェック 2' },
];
items[0].description;