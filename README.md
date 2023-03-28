Сборка Gulp/Webpack

Все настройки в gulp.config.js

<!---
HTML:

layout - статичные переиспользуемые шаблоны страниц
views - страницы, с подключением секций
sections - секции, разбитые по папкам шаблонов
components - компоненты
modals - модальные окна

Не используем глобальные обертки. В тек-м проекте они есть, нужно будет от них избавиться. 
Лучше "section->lw-container" вместо "wrap->section". Тогда проект становится универсальней.
-->

<!---
SCSS:

1) Используем БЭМ:
block
block__element
block__element--modifier

2) Не используем margin-top:
Элемент не должен отталкиваться от другого эл-та, лучше использовать margin-bottom у верхстоящего блока.
Это позволяет более универсально использовать компоненты

3) Не задаем фикс-е. величины:
вместо width, height -> min(max)-width, min(max)-height.

Возможное исключение - кнопки.

4) Именования общих классов начинаем с префикса lw:
lw-container, lw-title, lw-text и тд. Для того , чтобы избежать конфликтов со старым CSS и внутреннего понимания что это наши общие стили.

5) Все переиспользуемые классы в extends.scss.

6) Все глобальные и неизменные для проекта стили в global.scss
-->

<!---
JS:
Придерживаемся DRY, используем чистый js и модули.
-->


