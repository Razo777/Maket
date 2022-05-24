import React from 'react'

export default function footer() {
    return {
        mainlinks: {
            title: 'Основные ссылки',
            elements: [

                {
                    name: 'О компании',
                    path: 'aboutus'
                },
                {
                    name: 'Доставка',
                    path: 'shiping'
                },
                {
                    name: 'Оплата',
                    path: 'payment'
                },
                {
                    name: 'Каталог',
                    path: 'catalog'
                }
            ]
        },
        category: {
            title: 'Категории',
            elements: [
                {
                    name: 'Мужская одежда',
                    path: 'forman'
                },
                {
                    name: 'Женская одежда',
                    path: 'forwoman'
                },
                {
                    name: 'Детская одежда',
                    path: 'forChild'
                },
                {
                    name: 'Для животных',
                    path: 'fordogs'
                }
            ]
        },
        alllinks: {
            title: 'ПОЛЕЗНЫЕ ССЫЛКИ',
            elements: [
                {
                    name: 'Таблица размеров',
                    path: 'sizes'
                },
                {
                    name: 'Блог о моде',
                    path: 'moda'
                },
                {
                    name: 'Наша миссия',
                    path: 'mission'
                },
            ]
        }
    }

}
