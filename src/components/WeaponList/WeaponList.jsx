/* eslint-disable jsx-a11y/no-redundant-roles */
export const WeaponList = ({ visibleWeapons, shuffle }) => {
    return (
        <div className="weaponsSection">
            <ul className="weaponList">
                {visibleWeapons.map(weapon => (
                    <li key={weapon}>{weapon}</li>
                ))}
                <button
                    className="button-56" 
                    role="button"
                    onClick={() => shuffle()}
                >
                    Shuffle
                </button>
            </ul>
           
        </div>
    )
}