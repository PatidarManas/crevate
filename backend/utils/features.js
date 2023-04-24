class ApiFeatures {
    constructor (query, querystr) {
    this.query = query;
    this.queryStr = queryStr;
    }
    search() {
    const keyword = this.queryStr.keyword
    ? {
    name: {
    $regex: this.queryStr.keyword,
    $options: "i",
    },
    }
    : {};
    console.log(keyword);
    this.query = this.query.find({ ... keyword });
    return this;
    }
}
export default ApiFeatures;