
function Form(){
    return(
        <form id="submit-form" action="submit" onSubmit={(e)=> {
            e.preventDefault();
            alert("submitted");
        }}>
            <div className="inner-content">
            <div className="mb-3">
                <label className="form-label" htmlFor="name">NAME</label>
                <input id="name" className="form-control" type="text" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="age">AGE</label>
                <input id="age" className="form-control" type="number" />
            </div>
            <button className="btn btn-primary">Submit</button>
            </div>
            
        </form>
    )
}

export default Form