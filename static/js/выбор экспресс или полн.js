        const polnye = document.querySelector('.block_poln_kons');
        const express = document.querySelector('.block_express');

        const showExpress = () => {
            document.querySelector('.express').style.display = 'block';
            document.querySelector('.polnye_konsultacii').style.display = 'none';
        }

        const showPolnye = () => {
            document.querySelector('.express').style.display = 'none';
            document.querySelector('.polnye_konsultacii').style.display = 'block';
        }

        const highlightBlock = (block) => {
            block.classList.add('highlight');
        }

        const unhighlightBlock = (block) => {
            block.classList.remove('highlight');
        }

        // Переключение блоков
        express.addEventListener('click', () => {
            showExpress();
            highlightBlock(express);
            unhighlightBlock(polnye);
        });

        polnye.addEventListener('click', () => {
            showPolnye();
            highlightBlock(polnye);
            unhighlightBlock(express);
        });

        // Выделение блока при клике
        express.addEventListener('click', () => {
            highlightBlock(express);
            unhighlightBlock(polnye);
        });

        polnye.addEventListener('click', () => {
            highlightBlock(polnye);
            unhighlightBlock(express);
        });

        // Выделение первого блока при загрузке страницы и автоматический клик
        document.addEventListener('DOMContentLoaded', () => {
            showExpress();
            highlightBlock(express);

            // Проверяем наличие параметра 'from' в URL
            const urlParams = new URLSearchParams(window.location.search);
            const fromPage = urlParams.get('from');

            if (fromPage === 'first_page') {
                // Автоматический клик на блок "block_poln_kons"
                const blockPolnKons = document.getElementById('block_poln_kons');
                blockPolnKons.click();
            }
        });