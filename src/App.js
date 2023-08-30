import { useState } from 'react';
import { List } from './Components/List';
import { Notes } from './Components/Notes';
import { Consultations } from './Components/Consultations';
import { Video } from './Components/Video';
import { Events } from './Components/Events';

function App() {
    const [action, setAction] = useState(false);
    const [viewContent, setViewContent] = useState('notes');
    const [checkbox, setCheckbox] = useState(false);
    const [allCheckbox, setAllCheckbox] = useState(false);
    const [countCheckbox, setCountCheckbox] = useState('');
    const [choose, setChoose] = useState(true);
    const list = [
        {
            name: 'Кравцова Александра',
            logo: <img src="images/Кравцова.png" alt="Кравцова Александра" />,
        },
        {
            name: 'Рожков Денис',
            logo: <img src="images/Рожков.png" alt="Рожков Денис" />,
        },
        {
            name: 'Диброва Алевтина',
            logo: <img src="images/Диброва.png" alt="Диброва Алевтина" />,
        },
        {
            name: 'Иванов Дмитрий',
            logo: <img src="images/Иванов.png" alt="Иванов Дмитрий" />,
        },
        {
            name: 'nosikov@list.ru',
            logo: <img src="images/Кравцова.png" alt="nosikov@list.ru" />,
        },
        {
            name: 'Форс Александр',
            logo: <img src="images/Форс.png" alt="Форс Александр" />,
        },
        {
            name: 'Ахмедов Артур',
            logo: <img src="images/Ахмедов.png" alt="Ахмедов Артур" />,
        },
        {
            name: 'Блажевич Игорь',
            logo: <img src="images/Блажевич.png" alt="Блажевич Игорь" />,
        },
        {
            name: 'Валиева Руфина',
            logo: <img src="images/Валиева.png" alt="Валиева Руфина" />,
        },
        {
            name: 'Волошина Виктория',
            logo: <img src="images/Волошина.png" alt="Волошина Виктория" />,
        },
    ];

    /*Колличество выбранных checkbox*/
    const handleCheckboxChange = (event) => {
        setCountCheckbox((prevState) =>
            event.target.checked ? (prevState += 1) : (prevState -= 1)
        );
    };

    /*Выбрать все checkbox*/
    function checkedAll(e) {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
        setCountCheckbox(() => (e.target.checked ? checkboxes.length : 0));
    }
    /*Отрисовка кнопок Действия и Отмены*/
    function Chose() {
        setChoose(false);
        setAction(true);
        setCheckbox(true);
        setAllCheckbox(true);
        document.querySelector('.count').classList.add('none');
    }
    /*Отрисовка кнопоки Выбрать*/
    function Cancel() {
        setChoose(true);
        setAction(false);
        setCheckbox(false);
        setAllCheckbox(false);
        document.querySelector('.count').classList.remove('none');
    }

    return (
        <div className="main">
            <div className="container">
                <div className="sideBar">
                    <div className="search">
                        <img
                            className="imgSearch"
                            src="images/Search.png"
                            alt="Search"
                        />
                        <input type="text" />

                        <img src="images/List.png" alt="List" />
                        <img src="images/Add.png" alt="Add" />
                    </div>
                    <div className="choose">
                        <img
                            className="count"
                            src="images/Count.png"
                            alt="Count"
                        />
                        {allCheckbox && (
                            <div>
                                <input type="checkbox" onClick={checkedAll} />{' '}
                                Все {countCheckbox}
                            </div>
                        )}
                        {choose && <button onClick={Chose}>Выбрать</button>}
                        {action && (
                            <div className="actionBtn">
                                <button>Действия</button>
                                <button onClick={Cancel}>Отменить</button>
                            </div>
                        )}
                    </div>
                    <List
                        list={list}
                        checkbox={checkbox}
                        clickCheckbox={handleCheckboxChange}
                    />
                </div>
                <div className="page">
                    <img src="images/Main.png" alt="Main" />
                    <div className="infoPerson">
                        <h4>Рожков Денис Петрович</h4>
                        <p>30 лет, муж</p>
                    </div>

                    <div className="pageBtn">
                        <button
                            onClick={() => {
                                setViewContent('notes');
                            }}
                            style={
                                viewContent == 'notes'
                                    ? {
                                          borderRight: '1px solid grey',
                                          color: 'blue',
                                      }
                                    : { borderRight: '1px solid grey' }
                            }
                        >
                            Заметки
                        </button>
                        <button
                            onClick={() => {
                                setViewContent('consultations');
                            }}
                            style={
                                viewContent == 'consultations'
                                    ? {
                                          borderRight: '1px solid grey',
                                          color: 'blue',
                                      }
                                    : { borderRight: '1px solid grey' }
                            }
                        >
                            Консультации
                        </button>
                        <button
                            onClick={() => {
                                setViewContent('video');
                            }}
                            style={
                                viewContent == 'video'
                                    ? {
                                          borderRight: '1px solid grey',
                                          color: 'blue',
                                      }
                                    : { borderRight: '1px solid grey' }
                            }
                        >
                            Видео
                        </button>
                        <button
                            onClick={() => {
                                setViewContent('events');
                            }}
                            style={
                                viewContent == 'events'
                                    ? {
                                          color: 'blue',
                                      }
                                    : undefined
                            }
                        >
                            Мероприятия
                        </button>
                        <div className="someBtn">
                            {viewContent == 'notes' && (
                                <div>
                                    <button>Новая заметка</button>
                                    <img src="images/Add+.png" alt="Main" />
                                </div>
                            )}
                            {viewContent == 'consultations' && (
                                <div>
                                    <button>Записать</button>
                                    <img src="images/Add+.png" alt="Main" />
                                </div>
                            )}
                            {viewContent == 'video' && (
                                <div>
                                    <button>Рекомендовать</button>
                                    <img src="images/Add+.png" alt="Main" />
                                </div>
                            )}
                            {viewContent == 'events' && (
                                <div>
                                    <button>Рекомендовать</button>
                                    <img src="images/Add+.png" alt="Main" />
                                </div>
                            )}
                        </div>
                    </div>
                    {viewContent == 'notes' && <Notes />}
                    {viewContent == 'consultations' && <Consultations />}
                    {viewContent == 'video' && <Video />}
                    {viewContent == 'events' && <Events />}
                </div>
            </div>
        </div>
    );
}

export default App;
