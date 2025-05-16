function Search() {
  return (
    <div>
        {/* <div className="">
          <form className="form input-container">
            {show===''&&<i className="fas fa-search icon"></i>}
            <input type="search" {...register("searchbar",{required:true})} placeholder="search movies here" className="form-control form-control-lg sb" value={show} onChange={handleInputChange} onSubmit={handleSubmit()}/>
            {errors.searchbar?.type==="required" && <p className="text-danger">* required</p>}
          </form>
        </div> */}
    </div>
  )
}
export default Search