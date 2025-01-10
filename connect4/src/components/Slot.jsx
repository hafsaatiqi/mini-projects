import redToken from '../assets/redtoken.png'
import blackToken from '../assets/blacktoken.png'

const Slot=({ch,y,x})=>{
    return (
        <div className="slot" x={x} y={y}>
            {ch && (<img src={ch==='X'? redToken: blackToken}
             height='100%' width='100%' />
        )}
        </div>
    );
};

export default Slot;