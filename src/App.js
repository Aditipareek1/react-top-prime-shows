import Netflix from './Netflix'
import Prime from './Prime'

const favPlat="All";

function App(){
    return(
        <>
        <h1 className='heading_style'>My Top Five Shows</h1>
        {favPlat==="All"?(
            <>
            <Prime/>
            <Netflix/>
            </>
        ) : favPlat==='Netflix'?(
            <Netflix/>
        ):(
            <Prime/>
        )}
        </>
    )
}

export default App;