const paginate = ( items, { current_page }) => {
    const per_page_items = 10;

    let page = current_page || 1,
	per_page = per_page_items,
	offset = (page - 1) * per_page,

	paginatedItems = items.slice(offset).slice(0, per_page_items),
	totalPages = parseInt(Math.ceil(items.length / per_page));

	return {
		page: parseInt(page),
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (totalPages > page) ? page + 1 : null,
		total: items.length,
		totalPages: totalPages > 0 ? totalPages : 1,
		data: paginatedItems
	};
}

module.exports = {
    paginate
}