function Video() {
    return (
        <div className="video">
            <ul>
                <li>
                    <img src="images/Video1.png" alt="Video1" />
                    <p>
                        Крабик, ходьба в бок в приседе с двумя резинками Кра...
                        <div>
                            <span>Астахова Е.В</span>
                        </div>
                    </p>
                </li>
                <li>
                    <img src="images/Video2.png" alt="Video2" />
                    <p>
                        Разминка для локтевого сустава
                        <div className="spaceBetween">
                            <span>Астахова Е.В</span>
                            <span>15.01.2019 - 22.01.2019</span>
                        </div>
                    </p>
                </li>
                <li>
                    <img src="images/Video3.png" alt="Video3" />
                    <p>
                        Разминка для локтевого суставаРазминка для локтевого..{' '}
                        <div className="spaceBetween">
                            <span>Астахова Е.В</span>
                            <span>15.01.2019 - 22.01.2019</span>
                        </div>
                    </p>
                </li>
            </ul>
        </div>
    );
}
export { Video };
