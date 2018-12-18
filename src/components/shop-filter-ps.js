import React  from 'react';
import '../css/style.css';


function FilterPs (props) {
  return (
    <div className='filter-game-ps'>
      <p className='head-filter'>
        Жанр игры:
      </p>

      <input type="checkbox" id="racing"  onChange={props.filterItems}/>
      <label htmlFor='racing'><span>Racing</span></label><br />

      <input type="checkbox" id="fighting" onChange={props.filterItems}/>
      <label htmlFor='fighting'><span>Fighting</span></label><br />

      <input type="checkbox" id="open-world"  onChange={props.filterItems}/>
      <label htmlFor='open-world'><span>Open World</span></label><br />

      <input type="checkbox" id="adventure" onChange={props.filterItems}/>
      <label htmlFor='adventure'><span>Adventure</span></label><br />

      <input type="checkbox" id="RPG" onChange={props.filterItems}/>
      <label htmlFor='RPG'><span>RPG</span></label><br />

      <input type="checkbox" id="family" onChange={props.filterItems}/>
      <label htmlFor='family'><span>Family</span></label><br />

    </div>
  )
}

export default FilterPs;
