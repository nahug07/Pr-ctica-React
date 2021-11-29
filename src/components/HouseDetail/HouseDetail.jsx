import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

    const dispatch = useDispatch();

    const house = useSelector(state => state.house);

    React.useEffect(() => { dispatch(getHouse(props.match.params.houseId)) }, []);
    
    return (
        <div>
            <h3>House: {house.name}</h3>
            <h3>Region: {house.region}</h3>
            <h3>Words: {house.words}</h3>
            {
                house.characters && house.characters.map(character => (
                    <CharacterCard
                    id={character.id}
                    fullName={character.fullName}
                    title={character.title}
                    family={character.family}
                    imageUrl={character.imageUrl}
                    houseId={character.houseId}
                    key={character.id}
                    />
                ))
            }
        </div>
    );
};

export default HouseDetail;