module.exports = async (Model, page = 1, perpage = 10) => {

    page = page ?? page <= 0 ? page : 1;

    const allCount = await Model.find().count();

    const totalPage = Math.ceil(allCount / perpage);

    const data = await Model.find().skip((page - 1) * perpage).limit(perpage);

    return {
        data,
        prevPage: page > 1 ? page - 1 : null,
        currentPage: +page,
        nextPage: page < totalPage ? +page + 1 : null
    }
}