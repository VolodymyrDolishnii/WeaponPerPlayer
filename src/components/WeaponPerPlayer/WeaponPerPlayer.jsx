import React from "react";
import { useState } from "react";
import { players } from "../api/api";
import { weaponString } from "../api/api";
import { PlayersList } from "../PlayersList/PlayersList";
import { shuffle } from "../Randomizer/Randomizer";
import { WeaponList } from "../WeaponList/WeaponList";

export const WeaponPerPlayer = () => {
    const weaponArr = weaponString.split(' ');

    const [weapons, setWeapons] = useState(weaponArr);
    const [visibleWeapons, setVisibleWeapons] = useState(weapons.slice(0, players.length));
    const [isAdding, setIsAdding] = useState(false);
    const [visiblePlayers, setVisiblePlayers] = useState(players);
    const [inputValue, setInputValue] = useState('');

    const shuffling = () => {
        const shuffledWeapons = shuffle(weaponArr);
        setWeapons(shuffledWeapons);
        setVisibleWeapons(weapons.slice(0, visiblePlayers.length));
    }

    const deletePlayer = (player) => {
        const newList = visiblePlayers.filter((item) => item !== player);

        setVisiblePlayers(newList);
        setVisibleWeapons(weapons.slice(0, visiblePlayers.length - 1));
    }


    const isAddPlayer = () => {
        setIsAdding(true);
    }

    const addPlayer = (newPlayer) => {
        setVisiblePlayers([...visiblePlayers, newPlayer]);
        setIsAdding(false);
        setInputValue('');
        setVisibleWeapons(weapons.slice(0, visiblePlayers.length + 1));
    }

    return (
        <>
            <WeaponList 
                visibleWeapons={visibleWeapons} 
                shuffle={shuffling}
            />

            <PlayersList 
                visiblePlayers={visiblePlayers}
                deletePlayer={deletePlayer}
                isAdding={isAdding}
                isAddPlayer={isAddPlayer}
                inputValue={inputValue}
                setInputValue={setInputValue}
                addPlayer={addPlayer}
            />
        </>
    )
}