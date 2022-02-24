export default function Pagination({total, page, nextPage}){
    let arr = new Array(total).map(Number).fill(0);
    return (
        <div style={{marginTop:"1rem"}}>
            <button disabled={page == 1? "disabled" : ""} onClick={() => nextPage(page - 1)} >Prev</button>
            {
                arr.map( (ele, ind) => (<button key={ind} onClick={() => nextPage(ind + 1)} >{ind + 1}</button>) )
            }
            <button disabled={page == total ? "disabled" : ""} onClick={() => nextPage(page + 1)}>Next</button>
        </div>
    )
}