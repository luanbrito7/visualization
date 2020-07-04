import React, { useState, useEffect } from 'react'
import Util from '../../utils/Utils'
 
const Drawer = function(props) {
 
  const { lyrics, classes } = props;

  const [ display, setDisplay ] = useState(null)

  useEffect(() => {
    if (lyrics != null && classes != null) {
        if (display == null) {
            let components = []
    
            classes.forEach((_class, indexI) => {
                _class.intervals.forEach((interval, indexJ) => {
                  let syllable = lyrics.substring(interval[0], interval[1])
                  components.push(<p key={`${indexI}-${indexJ}`} style={{ color: Util.colors[_class.idClass]}}>{syllable}</p>)
                })
            });
            setDisplay(components)
        }
    }
  }, [lyrics, classes]);

 
  return (
    <div>
      {display}
    </div>
  )
}
 
export default Drawer;