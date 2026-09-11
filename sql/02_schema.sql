insert into items (title, category, description)
values ('四毒チキン', 'グルメ', '命の応援'),
       ('Pizza', 'グルメ', 'イタリアの魅力'),
       ('Борщ', 'Soup', 'Very red delicious food');


insert into comments (item_id, body, stars)
values (1, '最高',           5),
       (1, '安定感がすごい', 4),
       (2, '毎回見てる',     5),
       (3, 'これから期待',   3);

select items.title, comments.body, comments.stars
from items
join comments on comments.item_id = items.id;

select title, category from items;

select * from items where category = 'グルメ';

select * from items order by title asc;

select title, description from items
where category = 'グルメ'
order by title asc;