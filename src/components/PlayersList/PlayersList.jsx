/* eslint-disable jsx-a11y/no-redundant-roles */


export const PlayersList = ({ visiblePlayers, deletePlayer, isAdding, isAddPlayer, inputValue, setInputValue, addPlayer }) => {


    return (
        <div className="playersSection">
            <ul className="playerList">
                {visiblePlayers.map(player => (
                    <>
                        <div className="playerCard">
                            <li 
                                className="playerCard__item"
                                key={player}
                            >
                                {player}
                            </li>
                            <button
                                className="button-24" 
                                role="button"
                                onClick={() => deletePlayer(player)}
                            >
                                x
                            </button>
                        </div>
                    </>
                ))}

            {isAdding === false
                ? (
                <button
                    className="button-56" 
                    role="button"
                    onClick={() => isAddPlayer()}
                >
                Add Player
                </button>)
                : (
                <>
                <input 
                    type="text"
                    placeholder="Enter nickname"
                    value={inputValue}
                    onChange={(event) => {
                        const { value } = event.target;

                        setInputValue(value.trimStart());
                    }}
                />
                {inputValue && (
                    <button
                        className="button-56-mine" 
                        role="button"
                        onClick={() => addPlayer(inputValue)}
                        disabled={inputValue.length === 0}
                    >
                        Enter
                    </button>
                )}
                </>)
            }
            </ul>

        </div>
    )
}