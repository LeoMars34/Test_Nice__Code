function Consultations() {
    return (
        <div className="consultations">
            <ul>
                <li>
                    <img src="images/Online.png" alt="Online" />
                    <p>
                        Online консультация <br />
                        <span>15.01.2019, 12.30-13:00</span>
                    </p>
                </li>
                <li>
                    <img
                        style={{
                            width: '14px',
                            height: '8px',
                            padding: '13px',
                        }}
                        src="images/Video.png"
                        alt="Video"
                    />
                    <p>
                        Online консультация <br />
                        <span>15.01.2019, 12.30-13:00</span>
                    </p>
                </li>
                <li>
                    <img
                        style={{
                            width: '16px',
                            height: '14px',
                            padding: '13px',
                        }}
                        src="images/Meet.png"
                        alt="Meet"
                    />
                    <p>
                        Личный приём <br />
                        <div className="spaceBetween">
                            <span>15.01.2019, 12.30-13:00</span>
                            <span className="red">Не подтверждена</span>
                        </div>
                    </p>
                </li>
            </ul>
        </div>
    );
}
export { Consultations };
