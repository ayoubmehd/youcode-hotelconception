module.exports = async (Model, page = 1, query = {}, perpage = 10) => {

    page = page ?? page <= 0 ? page : 1;

    const allCount = await Model.find(query).count();

    const totalPage = Math.ceil(allCount / perpage);
    // 1.1 => 2

    const data = await Model.find(query).skip((page - 1) * perpage).limit(perpage);

    return {
        data,
        prevPage: page > 1 ? page - 1 : null,
        currentPage: +page,
        nextPage: page < totalPage ? +page + 1 : null
    }
}