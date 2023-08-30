function List({ list, checkbox, clickCheckbox }) {
    return (
        <div className="list">
            <ul>
                {list.map((i, index) => (
                    <li key={index}>
                        {checkbox && (
                            <input
                                className="checkbox"
                                type="checkbox"
                                onClick={clickCheckbox}
                            />
                        )}
                        <div className="smallLogo">{i.logo}</div>
                        {i.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export { List };
