function checkInvalid(v) {
    if(v === null || v === undefined ) return false;
    return true;
}
function Category(data){
    this.CategoryID = checkInvalid(data.CategoryID)?data.categoryID:0;
    this.CategoryName = checkInvalid(data.CategoryName)?data.CategoryName:"";
    this.Status = checkInvalid(data.Status)?data.Status: 1;
}
export default Category;
